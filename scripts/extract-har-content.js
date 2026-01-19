const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// This script will extract all content from body-full.html and organize it properly
// It will also ensure CSS loading order matches the original site

const bodyFullPath = path.join(__dirname, '../public/body-full.html');
const html = fs.readFileSync(bodyFullPath, 'utf8');

console.log('📄 Reading body-full.html, length:', html.length);

// Extract all external CSS links from the original HTML
const linkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*>/gi;
const links = [];
let match;
while ((match = linkRegex.exec(html)) !== null) {
  links.push(match[0]);
}

console.log('📋 Found', links.length, 'stylesheet links in original HTML');

// Extract all style tags
const styleTagRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const styleTags = [];
while ((match = styleTagRegex.exec(html)) !== null) {
  styleTags.push({
    full: match[0],
    content: match[1],
    attributes: match[0].match(/<style([^>]*)>/i)?.[1] || ''
  });
}

console.log('📋 Found', styleTags.length, 'style tags in original HTML');

// Extract all script tags to understand loading order
const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
const scripts = [];
while ((match = scriptRegex.exec(html)) !== null) {
  const srcMatch = match[0].match(/src=["']([^"']+)["']/i);
  scripts.push({
    full: match[0],
    src: srcMatch ? srcMatch[1] : null,
    inline: !srcMatch,
    content: match[1]
  });
}

console.log('📋 Found', scripts.length, 'script tags');
console.log('  - External scripts:', scripts.filter(s => s.src).length);
console.log('  - Inline scripts:', scripts.filter(s => s.inline).length);

// Create a report of the original loading order
console.log('\n📊 Original Resource Loading Order:');
console.log('1. HTML document');
if (links.length > 0) {
  console.log('2. Stylesheet links:', links.length);
  links.forEach((link, i) => {
    const hrefMatch = link.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      console.log(`   ${i + 1}. ${hrefMatch[1]}`);
    }
  });
}
console.log('3. Inline style tags:', styleTags.length);
console.log('4. Scripts (external and inline):', scripts.length);

// Save extracted CSS to a single file for reference
const allCSS = styleTags.map(st => st.content).join('\n\n/* ====== STYLE TAG SEPARATOR ====== */\n\n');
const cssOutputPath = path.join(__dirname, '../public/css/extracted-all.css');
fs.writeFileSync(cssOutputPath, allCSS);
console.log('\n✅ Saved all extracted CSS to:', cssOutputPath);

// Create a manifest of all resources
const manifest = {
  stylesheets: links.map(link => {
    const hrefMatch = link.match(/href=["']([^"']+)["']/i);
    return {
      link: link,
      href: hrefMatch ? hrefMatch[1] : null
    };
  }),
  styleTags: styleTags.length,
  scripts: {
    external: scripts.filter(s => s.src).map(s => s.src),
    inline: scripts.filter(s => s.inline).length
  },
  extractedAt: new Date().toISOString()
};

fs.writeFileSync(
  path.join(__dirname, '../public/resource-manifest.json'),
  JSON.stringify(manifest, null, 2)
);
console.log('✅ Saved resource manifest to: public/resource-manifest.json');

console.log('\n✅ Extraction complete!');
console.log('\n📝 Notes:');
console.log('  - CSS should be injected AFTER webpack loads (in page.tsx)');
console.log('  - Do NOT load CSS in layout.tsx head (it loads too early)');
console.log('  - CSS should be extracted from body-clean.html and injected dynamically');

