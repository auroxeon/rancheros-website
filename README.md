# Rancheros Grills - Next.js Website

This is a Next.js project converted from the luxury gardens template, preserving pixel-perfect layout and styling.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/public` - Static assets (images, CSS, fonts)
- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/styles` - Global styles and extracted CSS
- `/template-source` - Original template files

## Conversion Status

- ✅ Next.js project structure created
- ✅ Assets (images, CSS) moved to public/
- ✅ HTML body extracted and split into sections
- ✅ CSS styles extracted (36 style blocks)
- ✅ HTML to React component conversion completed
- ✅ Section components created (Header, MainContent, Footer)
- ✅ All HTML content preserved exactly using dangerouslySetInnerHTML

## Project Structure

```
nextjs-rancheros/
├── public/
│   ├── images/          # All template images
│   ├── css/             # Template CSS files
│   ├── header-extracted.html
│   ├── footer-extracted.html
│   └── main-content-only.html
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Home page
│   ├── components/
│   │   ├── BodyContent.tsx
│   │   ├── SiteContainer.tsx
│   │   ├── Header.tsx   # Loads header HTML
│   │   ├── MainContent.tsx  # Loads main content HTML
│   │   └── Footer.tsx   # Loads footer HTML
│   └── styles/
│       ├── globals.css
│       └── extracted-styles.css  # All extracted CSS
└── template-source/     # Original template files
```

## Notes

The original HTML has been preserved exactly using `dangerouslySetInnerHTML` to ensure pixel-perfect accuracy. All classes, IDs, attributes, and styling are maintained exactly as in the original template.

### Image Paths

Currently, images reference external Wix CDN URLs. To use local images:
1. Update image paths in the extracted HTML files
2. Replace `https://static.wixstatic.com/...` with `/images/...`
3. Ensure all referenced images exist in `public/images/`

