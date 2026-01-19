const fs = require('fs');
const path = require('path');

/**
 * Extract menu-specific CSS from standalone.css
 * This creates a focused CSS file for the navigation menu
 */

const standaloneCSSPath = path.join(__dirname, '../public/css/standalone.css');
const css = fs.readFileSync(standaloneCSSPath, 'utf8');

// Menu-related class patterns
const menuClasses = [
  'wixui-menu',
  'wixui-horizontal-menu',
  'zi7u4T',
  'Trmtvb',
  'Et46Sx',
  'BlM3nT',
  'qi0bcm',
  'YZgQBw',
  'comp-m0a27vnj',
  'comp-m8af7bje',
  'kvKptz',
  'oU_31J',
  'FIGev7',
  'xeYvd7',
  'JJdjxN',
  'okY9U1',
  'EX5Ksz',
  'cf3HLb',
  'TNsPxD',
  'eH50g1',
  'fr3A7J',
  'H2ENa1',
  'wixui-dropdown',
  'SKZitV',
  'OcDYXy',
  'CSIQNQ',
  'nIXiEg',
  'HDkLBy',
  'GWMLbE',
  'UUkylQ',
  'BV22op',
  'n2xrZl',
  'LNYNgf',
  'MJm86e',
  'JRUANI',
  'aTo_UF',
  'yRGvfY',
  'djGpM3',
  'lgvt4I',
];

// Extract CSS rules for menu classes
let menuCSS = '/* Menu-specific CSS extracted from standalone.css */\n\n';

menuClasses.forEach(className => {
  // Match class selectors
  const classRegex = new RegExp(`\\.${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^{]*\\{[^}]*\\}`, 'gi');
  const matches = css.match(classRegex);
  if (matches) {
    menuCSS += `/* ${className} */\n`;
    matches.forEach(match => {
      menuCSS += match + '\n\n';
    });
  }
  
  // Also match ID selectors
  const idRegex = new RegExp(`#${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^{]*\\{[^}]*\\}`, 'gi');
  const idMatches = css.match(idRegex);
  if (idMatches) {
    menuCSS += `/* #${className} */\n`;
    idMatches.forEach(match => {
      menuCSS += match + '\n\n';
    });
  }
});

// Save menu CSS
const menuCSSPath = path.join(__dirname, '../public/css/menu.css');
fs.writeFileSync(menuCSSPath, menuCSS, 'utf8');
console.log('✅ Created menu.css:', menuCSS.length, 'characters');

