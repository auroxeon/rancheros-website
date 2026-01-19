const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

/**
 * Create standalone CSS for luxury-gardens.co.uk
 * Extracts all CSS from body-full.html and organizes it into standalone files
 */

const bodyFullPath = path.join(__dirname, '../public/body-full.html');
const html = fs.readFileSync(bodyFullPath, 'utf8');

console.log('📄 Reading body-full.html, length:', html.length);

// Extract all style tags
const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const styleTags = [];
let match;
while ((match = styleTagRegex.exec(html)) !== null) {
  styleTags.push({
    full: match[0],
    content: match[1],
    index: styleTags.length
  });
}

console.log('📋 Found', styleTags.length, 'style tags');

// Combine all CSS
let allCSS = '';
styleTags.forEach((tag, index) => {
  allCSS += `\n\n/* ====== STYLE TAG ${index + 1} ====== */\n\n`;
  allCSS += tag.content;
});

// Replace Wix font references with Google Fonts
const fontReplacements = {
  'wfont_57a328_3d9bc3b839b74ea79430f6ffd29a7875': 'Inter',
  'wf_3d9bc3b839b74ea79430f6ffd': 'Inter',
  'orig_inter_28_pt_extralight': 'Inter',
  'wfont_bf7db0_73e1a5d79ffd44919dfe6467d818d584': 'Montserrat',
  'wf_73e1a5d79ffd44919dfe6467d818d584': 'Montserrat',
  'orig_neue_montreal_regular': 'Montserrat',
  'wfont_d7438f_16a8443c32214e99999ed3ca6400f583': 'Playfair Display',
  'wf_16a8443c32214e99999ed3ca6400f583': 'Playfair Display',
  'orig_montage_serif_font_regular': 'Playfair Display',
  'wfont_abc551_7a57ef9bcd4f4c338df3489f43e9cb90': 'Playfair Display',
  'wf_7a57ef9bcd4f4c338df3489f4': 'Playfair Display',
  'orig_presti_display_book': 'Playfair Display',
  'din-next-w01-light': 'Open Sans',
  'poppins-v2': 'Montserrat',
  'madefor-text': 'system-ui, -apple-system, sans-serif',
  'helveticaneuew01-45ligh': 'system-ui, -apple-system, sans-serif',
  'helveticaneuew02-45ligh': 'system-ui, -apple-system, sans-serif',
  'helveticaneuew10-45ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW01-45Ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW01-55Roma': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW02-45Ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW02-55Roma': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW10-45Ligh': 'system-ui, -apple-system, sans-serif',
  'HelveticaNeueW10-55Roma': 'system-ui, -apple-system, sans-serif',
};

// Replace fonts in CSS
Object.entries(fontReplacements).forEach(([oldFont, newFont]) => {
  const patterns = [
    new RegExp(`font-family:\\s*["']?${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']?`, 'gi'),
    new RegExp(`font-family:\\s*([^;]*?)${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^;]*)`, 'gi'),
    new RegExp(`--wix-font-[^:]*family:\\s*([^;]*?)${oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^;]*)`, 'gi'),
  ];
  
  patterns.forEach(pattern => {
    allCSS = allCSS.replace(pattern, (match) => {
      return match.replace(new RegExp(oldFont.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), newFont);
    });
  });
});

// Update font-family declarations to use Google Fonts
allCSS = allCSS.replace(/font-family:\s*["']?Montserrat["']?/gi, 'font-family: "Montserrat", sans-serif');
allCSS = allCSS.replace(/font-family:\s*["']?Inter["']?/gi, 'font-family: "Inter", sans-serif');
allCSS = allCSS.replace(/font-family:\s*["']?Open Sans["']?/gi, 'font-family: "Open Sans", sans-serif');
allCSS = allCSS.replace(/font-family:\s*["']?Playfair Display["']?/gi, 'font-family: "Playfair Display", serif');

// Ensure CSS directory exists
const cssDir = path.join(__dirname, '../public/css');
if (!fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

// Save standalone CSS
const standaloneCSSPath = path.join(cssDir, 'standalone.css');
fs.writeFileSync(standaloneCSSPath, allCSS, 'utf8');
console.log('✅ Created standalone.css:', allCSS.length, 'characters');

// Also create a minified version for production
const minifiedCSS = allCSS
  .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
  .replace(/\s+/g, ' ') // Collapse whitespace
  .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
  .replace(/\s*{\s*/g, '{') // Remove spaces around opening braces
  .replace(/;\s*/g, ';') // Remove spaces after semicolons
  .trim();

const minifiedPath = path.join(cssDir, 'standalone.min.css');
fs.writeFileSync(minifiedPath, minifiedCSS, 'utf8');
console.log('✅ Created standalone.min.css:', minifiedCSS.length, 'characters');

// Create organized CSS files by component
const organizedCSS = {
  variables: '',
  base: '',
  layout: '',
  menu: '',
  header: '',
  footer: '',
  animations: '',
  media: '',
  other: ''
};

// Extract CSS variables
const variableRegex = /:root\s*\{[^}]*\}|\.comp-m9r7tknv1\s*\{[^}]*\}/gi;
const variables = allCSS.match(variableRegex);
if (variables) {
  organizedCSS.variables = variables.join('\n\n');
}

// Extract menu-related CSS
const menuRegex = /\.(wixui-menu|wixui-horizontal-menu|zi7u4T|Trmtvb|Et46Sx|BlM3nT|qi0bcm|YZgQBw|comp-m0a27vnj[^{]*\{[^}]*\})/gi;
const menuMatches = [];
let menuMatch;
const menuRegex2 = new RegExp(menuRegex.source, menuRegex.flags);
menuRegex2.lastIndex = 0;
while ((menuMatch = menuRegex2.exec(allCSS)) !== null) {
  menuMatches.push(menuMatch[0]);
}
if (menuMatches.length > 0) {
  organizedCSS.menu = menuMatches.join('\n\n');
}

// Extract animations
const animationRegex = /@keyframes\s+\w+[\s\S]*?\{[\s\S]*?\}/gi;
const animations = allCSS.match(animationRegex);
if (animations) {
  organizedCSS.animations = animations.join('\n\n');
}

// Extract transitions
const transitionRegex = /transition[^;]*;/gi;
const transitions = allCSS.match(transitionRegex);
if (transitions && transitions.length > 0) {
  organizedCSS.animations += '\n\n/* Transitions */\n' + transitions.join('\n');
}

// Save organized CSS files
Object.entries(organizedCSS).forEach(([name, content]) => {
  if (content.trim()) {
    const filePath = path.join(cssDir, `${name}.css`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Created ${name}.css:`, content.length, 'characters');
  }
});

console.log('\n✅ Standalone CSS creation complete!');
console.log('\n📝 Files created:');
console.log('  - public/css/standalone.css (main file)');
console.log('  - public/css/standalone.min.css (minified)');
console.log('  - public/css/variables.css');
console.log('  - public/css/menu.css');
console.log('  - public/css/animations.css');
console.log('\n💡 Next steps:');
console.log('  1. Update page.tsx to load standalone.css instead of extracting from HTML');
console.log('  2. Remove Wix-specific code and replace with React components');
console.log('  3. Test all animations and transitions');

