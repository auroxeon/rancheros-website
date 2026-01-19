// Simple HTML to JSX converter for the extracted HTML sections
// This will help convert HTML attributes to JSX format

const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  // Replace class with className
  let jsx = html.replace(/\sclass=/g, ' className=');
  
  // Replace for with htmlFor
  jsx = jsx.replace(/\sfor=/g, ' htmlFor=');
  
  // Replace tabindex with tabIndex
  jsx = jsx.replace(/\stabindex=/g, ' tabIndex=');
  
  // Replace readonly with readOnly
  jsx = jsx.replace(/\sreadonly=/g, ' readOnly=');
  
  // Replace colspan with colSpan
  jsx = jsx.replace(/\scolspan=/g, ' colSpan=');
  
  // Replace rowspan with rowSpan
  jsx = jsx.replace(/\srowspan=/g, ' rowSpan=');
  
  // Replace autofocus with autoFocus
  jsx = jsx.replace(/\sautofocus=/g, ' autoFocus=');
  
  // Replace maxlength with maxLength
  jsx = jsx.replace(/\smaxlength=/g, ' maxLength=');
  
  // Replace minlength with minLength
  jsx = jsx.replace(/\sminlength=/g, ' minLength=');
  
  // Replace contenteditable with contentEditable
  jsx = jsx.replace(/\scontenteditable=/g, ' contentEditable=');
  
  // Replace spellcheck with spellCheck
  jsx = jsx.replace(/\sspellcheck=/g, ' spellCheck=');
  
  // Replace autocapitalize with autoCapitalize
  jsx = jsx.replace(/\sautocapitalize=/g, ' autoCapitalize=');
  
  // Replace autocorrect with autoCorrect
  jsx = jsx.replace(/\sautocorrect=/g, ' autoCorrect=');
  
  // Replace autocomplete with autoComplete
  jsx = jsx.replace(/\sautocomplete=/g, ' autoComplete=');
  
  // Replace checked with defaultChecked (for uncontrolled inputs)
  // Note: This is a simple replacement, may need manual review
  
  // Replace selected with defaultValue (for select options)
  // Note: This is a simple replacement, may need manual review
  
  // Handle style attributes - convert to object format if needed
  // For now, keep as string since dangerouslySetInnerHTML will handle it
  
  // Handle data-* attributes - these are fine as-is in JSX
  
  // Handle aria-* attributes - these are fine as-is in JSX
  
  // Handle event handlers - convert onclick to onClick, etc.
  jsx = jsx.replace(/\sonclick=/gi, ' onClick=');
  jsx = jsx.replace(/\sonchange=/gi, ' onChange=');
  jsx = jsx.replace(/\soninput=/gi, ' onInput=');
  jsx = jsx.replace(/\sonblur=/gi, ' onBlur=');
  jsx = jsx.replace(/\sonfocus=/gi, ' onFocus=');
  jsx = jsx.replace(/\sonmouseover=/gi, ' onMouseOver=');
  jsx = jsx.replace(/\sonmouseout=/gi, ' onMouseOut=');
  jsx = jsx.replace(/\sonmousedown=/gi, ' onMouseDown=');
  jsx = jsx.replace(/\sonmouseup=/gi, ' onMouseUp=');
  jsx = jsx.replace(/\sonkeydown=/gi, ' onKeyDown=');
  jsx = jsx.replace(/\sonkeyup=/gi, ' onKeyUp=');
  jsx = jsx.replace(/\sonkeypress=/gi, ' onKeyPress=');
  jsx = jsx.replace(/\sonsubmit=/gi, ' onSubmit=');
  
  // Close self-closing tags properly
  jsx = jsx.replace(/<img([^>]*[^/])>/gi, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*[^/])>/gi, '<input$1 />');
  jsx = jsx.replace(/<br([^>]*[^/])?>/gi, '<br$1 />');
  jsx = jsx.replace(/<hr([^>]*[^/])?>/gi, '<hr$1 />');
  jsx = jsx.replace(/<meta([^>]*[^/])>/gi, '<meta$1 />');
  jsx = jsx.replace(/<link([^>]*[^/])>/gi, '<link$1 />');
  
  // Escape curly braces in text content that might be interpreted as JSX expressions
  // This is tricky - we'll need to be careful with this
  
  return jsx;
}

// Read and convert header
const headerHtml = fs.readFileSync(path.join(__dirname, '../header-extracted.html'), 'utf8');
const headerJsx = htmlToJsx(headerHtml);
fs.writeFileSync(path.join(__dirname, '../header-converted.jsx'), headerJsx);

// Read and convert footer
const footerHtml = fs.readFileSync(path.join(__dirname, '../footer-extracted.html'), 'utf8');
const footerJsx = htmlToJsx(footerHtml);
fs.writeFileSync(path.join(__dirname, '../footer-converted.jsx'), footerJsx);

console.log('Conversion complete!');
console.log('Header:', headerJsx.length, 'chars');
console.log('Footer:', footerJsx.length, 'chars');




