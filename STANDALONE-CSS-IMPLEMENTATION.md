# Standalone CSS Implementation

## Overview
This document describes the implementation of standalone CSS for the Luxury Gardens Next.js site, creating a pixel-perfect replica without Wix dependencies.

## Files Created

### CSS Files
1. **`public/css/standalone.css`** (165,813 characters)
   - Main standalone CSS file containing all styles extracted from the original site
   - Includes all CSS variables, layout rules, animations, and transitions
   - Font references replaced with Google Fonts equivalents

2. **`public/css/standalone.min.css`** (164,069 characters)
   - Minified version for production use

3. **`public/css/variables.css`**
   - CSS custom properties (variables) extracted from the original site

4. **`public/css/animations.css`**
   - All @keyframes animations and transitions

5. **`public/css/menu.css`**
   - Menu-specific CSS (extracted separately for reference)

## Scripts Created

### `scripts/create-standalone-css.js`
- Extracts all CSS from `body-full.html`
- Replaces Wix font references with Google Fonts
- Creates organized CSS files
- Generates minified version

### `scripts/extract-menu-css.js`
- Extracts menu-specific CSS classes
- Useful for debugging menu styling issues

## Code Changes

### `src/app/page.tsx`
- **Before**: Dynamically extracted CSS from HTML and injected it
- **After**: Loads standalone CSS file via `<link>` tag
- Removed complex CSS extraction logic
- Simplified HTML processing (removes style tags since CSS is external)

### `src/app/layout.tsx`
- Added import for `globals.css`
- Maintains Google Fonts loading

### `src/styles/globals.css`
- Updated with base styles
- Ensures proper box-sizing and layout
- Sets up site container styles

## Font Replacements

All Wix-specific fonts have been replaced with Google Fonts equivalents:

- `wfont_57a328_*` (Inter variants) → `Inter`
- `wfont_bf7db0_*` (Neue Montreal) → `Montserrat`
- `wfont_d7438f_*` (Montage Serif) → `Playfair Display`
- `wfont_abc551_*` (Presti Display) → `Playfair Display`
- `din-next-w01-light` → `Open Sans`
- `poppins-v2` → `Montserrat`
- Helvetica Neue variants → `system-ui, -apple-system, sans-serif`

## CSS Loading Order

1. Google Fonts (loaded in `layout.tsx`)
2. `globals.css` (imported in `layout.tsx`)
3. `standalone.css` (loaded dynamically in `page.tsx`)

## Next Steps

### Remaining Tasks
1. ✅ Extract all CSS from original site
2. ✅ Create standalone CSS files
3. ✅ Update page.tsx to use standalone CSS
4. ⏳ Extract and organize CSS by component (header, menu, footer, sections)
5. ⏳ Remove all Wix artifacts and replace with React/Next.js equivalents
6. ⏳ Ensure all animations, transitions, and media embeds work correctly
7. ⏳ Test pixel-perfect rendering and fix compatibility issues

### Wix Artifacts to Remove
- Wix-specific data attributes (`data-wix-*`, `data-hook`, `data-part`)
- Wix component classes (can be kept for styling but should be documented)
- Wix JavaScript dependencies (already removed)
- Wix-specific inline styles using CSS variables

### Component-Specific CSS Extraction
The following components need dedicated CSS extraction:
- Header/Navigation menu
- Hero section
- Content sections
- Footer
- Gallery/Media embeds
- Forms (if any)

## Testing Checklist

- [ ] All fonts load correctly
- [ ] Menu navigation works (burger menu functionality needs React implementation)
- [ ] All animations and transitions work
- [ ] Media embeds (images, videos) load correctly
- [ ] Responsive design works on all screen sizes
- [ ] No console errors
- [ ] Pixel-perfect match with original site

## Notes

- The standalone CSS maintains all original class names and IDs for compatibility
- CSS variables are preserved to maintain dynamic styling
- All animations and transitions are included
- The CSS is organized but not split into separate files (all in standalone.css for simplicity)

