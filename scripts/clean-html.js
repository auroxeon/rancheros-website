const fs = require('fs');
const path = require('path');

// Read the original HTML
const html = fs.readFileSync(path.join(__dirname, '../public/body-full.html'), 'utf8');

console.log('📄 Original HTML length:', html.length);

// Remove all script tags (but preserve their content if it's just data)
let clean = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

// Remove Wix link tags (preload, etc.) but keep stylesheets
// NOTE: We're removing external stylesheet links because they point to Wix CDN
// The CSS rules should be in the <style> tags in the HTML
clean = clean.replace(/<link[^>]*rel=["']preload["'][^>]*>/gi, '');
clean = clean.replace(/<link[^>]*parastorage[^>]*>/gi, '');
clean = clean.replace(/<link[^>]*wix[^>]*>/gi, '');
// Remove external stylesheet links (they won't work without Wix CDN)
clean = clean.replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '');

// Remove problematic SVG animate tags that cause errors
clean = clean.replace(/<animate[^>]*>[\s\S]*?<\/animate>/gi, '');

// Get list of available local images
const imagesDir = path.join(__dirname, '../public/images');
let localImages = [];
if (fs.existsSync(imagesDir)) {
  localImages = fs.readdirSync(imagesDir).filter(f => 
    /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i.test(f)
  );
  console.log(`📸 Found ${localImages.length} local images`);
}

// Helper function to find matching local image
function findLocalImage(url) {
  // Extract various parts of the URL to match
  const urlParts = url.split('/');
  const lastPart = urlParts[urlParts.length - 1];
  
  // Handle Wix URL format: 3e2d76_be7a21d8aed5479fa6b7c313ff29f009~mv2.jpg/v1/fill/.../Image--2---Modern-Swimming-Pool---Full-Use.jpg
  // Extract the final filename after the last /
  let finalFilename = lastPart;
  if (urlParts.length > 1) {
    // Check if there's a filename after the last path segment
    const pathWithFilename = urlParts[urlParts.length - 1];
    if (pathWithFilename.includes('/')) {
      finalFilename = pathWithFilename.split('/').pop();
    }
  }
  
  // Also extract the base part before ~
  const baseName = lastPart.split('~')[0].split('?')[0]; // Remove ~ and query params
  const nameParts = baseName.split('_');
  const firstPart = nameParts[0];
  
  // Try multiple matching strategies
  // 1. Match by final filename (e.g., "Image--2---Modern-Swimming-Pool---Full-Use.jpg")
  let match = localImages.find(f => {
    const fLower = f.toLowerCase();
    const finalLower = finalFilename.toLowerCase();
    return fLower === finalLower || 
           fLower.includes(finalLower.replace(/[^a-z0-9]/gi, '')) ||
           finalLower.includes(fLower.replace(/[^a-z0-9]/gi, ''));
  });
  if (match) return match;
  
  // 2. Exact match with baseName
  match = localImages.find(f => f === baseName || f === lastPart);
  if (match) return match;
  
  // 3. Match by first part (e.g., "3e2d76")
  match = localImages.find(f => f.startsWith(firstPart + '_') || f.startsWith(firstPart + '.'));
  if (match) return match;
  
  // 4. Match by any part of the name
  match = localImages.find(f => {
    const fParts = f.split('_');
    return fParts.some(part => nameParts.includes(part)) || 
           nameParts.some(part => fParts.includes(part));
  });
  if (match) return match;
  
  // 5. Match by extension and similar name
  const ext = baseName.split('.').pop();
  match = localImages.find(f => {
    const fBase = f.split('.').slice(0, -1).join('.');
    const urlBase = baseName.split('.').slice(0, -1).join('.');
    return f.endsWith('.' + ext) && (fBase.includes(urlBase) || urlBase.includes(fBase));
  });
  if (match) return match;
  
  // 6. Match by removing special chars and comparing
  const normalizedFinal = finalFilename.replace(/[^a-z0-9]/gi, '').toLowerCase();
  match = localImages.find(f => {
    const normalizedF = f.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return normalizedF.includes(normalizedFinal) || normalizedFinal.includes(normalizedF);
  });
  if (match) return match;
  
  return null;
}

// Replace all external image URLs with local paths
// Pattern: https://static.wixstatic.com/media/3e2d76_be7a21d8aed5479fa6b7c313ff29f009~mv2.jpg/v1/fill/.../Image--2---Modern-Swimming-Pool---Full-Use.jpg
clean = clean.replace(/https:\/\/static\.wixstatic\.com\/media\/([^"'\s>]+)/gi, (match, imagePath) => {
  // Extract the image ID (part before ~) - e.g., "3e2d76_be7a21d8aed5479fa6b7c313ff29f009"
  const imageIdMatch = imagePath.match(/^([^~]+)/);
  const imageId = imageIdMatch ? imageIdMatch[1] : null;
  
  // Extract final filename if present (after last /)
  const parts = imagePath.split('/');
  const finalFilename = parts[parts.length - 1];
  
  // Try to find matching local image
  let localFile = findLocalImage(imagePath);
  
  // If not found, try matching by image ID
  if (!localFile && imageId) {
    const idPrefix = imageId.split('_')[0]; // e.g., "3e2d76"
    localFile = localImages.find(f => f.startsWith(idPrefix + '_') || f.startsWith(imageId));
  }
  
  // If still not found, try matching by final filename
  if (!localFile && finalFilename) {
    const normalizedFinal = finalFilename.replace(/[^a-z0-9]/gi, '').toLowerCase();
    localFile = localImages.find(f => {
      const normalizedF = f.replace(/[^a-z0-9]/gi, '').toLowerCase();
      return normalizedF.includes(normalizedFinal) || normalizedFinal.includes(normalizedF);
    });
  }
  
  if (localFile) {
    return `/images/${localFile}`;
  }
  
  // Fallback: use the image ID with .jpg extension
  if (imageId) {
    // Try to find any file that starts with the image ID prefix
    const idPrefix = imageId.split('_')[0]; // e.g., "3e2d76"
    const matchingByPrefix = localImages.find(f => f.startsWith(idPrefix + '_'));
    if (matchingByPrefix) {
      return `/images/${matchingByPrefix}`;
    }
    
    // Try to construct filename from image ID
    const ext = imageId.includes('.') ? imageId.split('.').pop() : 'jpg';
    const fallbackName = imageId + '.' + ext;
    // Check if this exact file exists
    if (localImages.includes(fallbackName)) {
      return `/images/${fallbackName}`;
    }
    
    console.log(`⚠️  Could not find local image for: ${imagePath.substring(0, 100)}..., using fallback: ${fallbackName}`);
    return `/images/${fallbackName}`;
  }
  
  // Last resort: use final filename
  console.log(`⚠️  Could not find local image for: ${imagePath.substring(0, 100)}..., using: ${finalFilename}`);
  return `/images/${finalFilename}`;
});

// Replace filesusr.com URLs
clean = clean.replace(/https:\/\/www-luxury-gardens-co-uk\.filesusr\.com\/([^"'\s>]+)/gi, (match, imagePath) => {
  const localFile = findLocalImage(imagePath);
  return localFile ? `/images/${localFile}` : `/images/${imagePath.split('/').pop()}`;
});

clean = clean.replace(/https:\/\/[^"'\s>]*\.filesusr\.com\/([^"'\s>]+)/gi, (match, imagePath) => {
  const localFile = findLocalImage(imagePath);
  return localFile ? `/images/${localFile}` : `/images/${imagePath.split('/').pop()}`;
});

// Replace any remaining https:// URLs for images
clean = clean.replace(/https:\/\/[^"'\s>]*\/([^"'\s>]*\.(jpg|jpeg|png|gif|webp|svg|avif))/gi, (match, filename) => {
  const localFile = findLocalImage(filename);
  return localFile ? `/images/${localFile}` : `/images/${filename.split('/').pop()}`;
});

// Comprehensive font replacement mapping
// Based on actual fonts found in the HTML
const fontReplacements = {
  // Neue Montreal -> Montserrat (geometric sans-serif)
  // Pattern: wfont_bf7db0_73e1a5d79ffd44919dfe6467d818d584
  'wfont_bf7db0_73e1a5d79ffd44919dfe6467d818d584': 'Montserrat',
  'wf_73e1a5d79ffd44919dfe6467d818d584': 'Montserrat',
  'orig_neue_montreal_regular': 'Montserrat',
  'neue_montreal': 'Montserrat',
  'Neue Montreal': 'Montserrat',
  
  // Inter variants -> Inter
  // Pattern: wfont_57a328_3d9bc3b839b74ea79430f6ffd29a7875 (extralight)
  'wfont_57a328_3d9bc3b839b74ea79430f6ffd29a7875': 'Inter',
  'wf_3d9bc3b839b74ea79430f6ffd': 'Inter',
  'orig_inter_28_pt_extralight': 'Inter',
  // Pattern: wfont_d42cb7_7f40852f7974452ab242bdab41611ec9 (light)
  'wfont_d42cb7_7f40852f7974452ab242bdab41611ec9': 'Inter',
  'wf_7f40852f7974452ab242bdab4': 'Inter',
  'orig_inter_24_pt_light': 'Inter',
  // Pattern: wfont_57a328_056b0e780fbb4e609d5cfb92039e33d9 (light)
  'wfont_57a328_056b0e780fbb4e609d5cfb92039e33d9': 'Inter',
  'wf_056b0e780fbb4e609d5cfb920': 'Inter',
  'orig_inter_18_pt_light': 'Inter',
  'wfont_57a328': 'Inter',
  'Inter': 'Inter',
  
  // Montage Serif -> Playfair Display (serif alternative)
  'wfont_d7438f_16a8443c32214e99999ed3ca6400f583': 'Playfair Display',
  'wf_16a8443c32214e99999ed3ca6': 'Playfair Display',
  'orig_montage_serif_font_regular': 'Playfair Display',
  
  // Presti Display -> Playfair Display
  'wfont_abc551_7a57ef9bcd4f4c338df3489f43e9cb90': 'Playfair Display',
  'wf_7a57ef9bcd4f4c338df3489f4': 'Playfair Display',
  'orig_presti_display_book': 'Playfair Display',
  
  // Avenir -> Nunito (similar humanist sans-serif)
  'avenir-lt-w01_85-heavy1475544': 'Nunito',
  'Avenir': 'Nunito',
  'avenir': 'Nunito',
  
  // Helvetica Neue -> System fonts
  'HelveticaNeueW01-45Ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW01-55Roma': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW02-45Ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW02-55Roma': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW10-45Ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW10-55Roma': 'system-ui, -apple-system, sans-serif',
  'helveticaneuew01-45ligh': 'system-ui, -apple-system, sans-serif',
  'helveticaneuew02-45ligh': 'system-ui, -apple-system, sans-serif',
  'helveticaneuew10-45ligh': 'system-ui, -apple-system, sans-serif',
  'Helvetica Neue': 'system-ui, -apple-system, sans-serif',
  
  // Proxima Nova -> Open Sans
  'proxima-n-w01-reg': 'Open Sans',
  'Proxima Nova': 'Open Sans',
  'proxima-nova': 'Open Sans',
  
  // Generic fallbacks
  'madefor-text': 'system-ui, -apple-system, sans-serif',
  'din-next-w01-light': 'Open Sans',
  'poppins-v2': 'Montserrat',
};

// Replace font references in CSS font-family declarations
Object.entries(fontReplacements).forEach(([oldFont, newFont]) => {
  // Match font-family declarations with the old font
  const patterns = [
    // In style attributes: style="font-family: oldFont"
    new RegExp(`font-family:\\s*["']?${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?`, 'gi'),
    // In CSS: font-family: oldFont, fallback
    new RegExp(`font-family:\\s*["']?${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?[^;]*`, 'gi'),
    // In class names or inline styles with quotes
    new RegExp(`["']${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'gi'),
  ];
  
  patterns.forEach(pattern => {
    clean = clean.replace(pattern, (match) => {
      // Replace the font name but keep the rest of the declaration
      return match.replace(new RegExp(oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), newFont);
    });
  });
});

// Update font-family declarations to use CSS variables for Google Fonts
// This ensures they work with Next.js font loading
clean = clean.replace(/font-family:\s*["']?Montserrat["']?/gi, 'font-family: var(--font-montserrat), Montserrat, sans-serif');
clean = clean.replace(/font-family:\s*["']?Inter["']?/gi, 'font-family: var(--font-inter), Inter, sans-serif');
clean = clean.replace(/font-family:\s*["']?Open Sans["']?/gi, 'font-family: var(--font-open-sans), "Open Sans", sans-serif');
clean = clean.replace(/font-family:\s*["']?Nunito["']?/gi, 'font-family: var(--font-nunito), Nunito, sans-serif');
clean = clean.replace(/font-family:\s*["']?Playfair Display["']?/gi, 'font-family: "Playfair Display", serif');

// Replace font references in CSS variables (--wix-font-*-family)
// These are used throughout the CSS and need to be replaced
Object.entries(fontReplacements).forEach(([oldFont, newFont]) => {
  // Replace in CSS variable font-family declarations
  // Pattern: --wix-font-*-family: oldFont,fallback
  const varPattern = new RegExp(`(--wix-font-[^:]*family:\\s*[^;]*?)${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^;]*)`, 'gi');
  clean = clean.replace(varPattern, (match, prefix, suffix) => {
    // Replace the old font with new font, keeping the rest
    return `${prefix}${newFont}${suffix}`;
  });
  
  // Also replace in the full font variable (--wix-font-*: ... oldFont ...)
  const fullVarPattern = new RegExp(`(--wix-font-[^:]*:\\s*[^;]*?)${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^;]*)`, 'gi');
  clean = clean.replace(fullVarPattern, (match, prefix, suffix) => {
    return `${prefix}${newFont}${suffix}`;
  });
});

// Handle font-family with multiple fonts (fallback chains)
clean = clean.replace(/font-family:\s*([^;]*Montserrat[^;]*)/gi, (match, fonts) => {
  if (!fonts.includes('var(--font-montserrat)')) {
    return `font-family: var(--font-montserrat), ${fonts}`;
  }
  return match;
});
clean = clean.replace(/font-family:\s*([^;]*Inter[^;]*)/gi, (match, fonts) => {
  if (!fonts.includes('var(--font-inter)')) {
    return `font-family: var(--font-inter), ${fonts}`;
  }
  return match;
});

// IMPORTANT: Preserve all CSS animations and transitions
// Don't remove any animation or transition properties
// Only remove problematic HTML animate tags (already done above)

// Write cleaned HTML
fs.writeFileSync(path.join(__dirname, '../public/body-clean.html'), clean);
console.log('✅ Clean HTML created:', clean.length, 'characters');
console.log('✅ Scripts removed');
console.log('✅ Wix links removed');
console.log('✅ External image URLs replaced with local paths');
console.log('✅ Fonts replaced with Google Fonts equivalents');
console.log('✅ Animations and transitions preserved');
console.log('✅ Ready for rendering');
