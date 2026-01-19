# Setup Instructions

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation

1. Navigate to the project directory:
   ```bash
   cd nextjs-rancheros
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Project Features

- **Pixel-Perfect Replication**: All HTML, CSS, and styling preserved exactly
- **Component-Based**: Header, Main, and Footer extracted as separate components
- **TypeScript**: Full type safety
- **Next.js 14**: Latest App Router architecture
- **Responsive**: Original responsive design maintained

## File Locations

- **Template HTML**: `public/header-extracted.html`, `public/footer-extracted.html`, `public/main-content-only.html`
- **Template CSS**: `public/css/` and `src/styles/extracted-styles.css`
- **Template Images**: `public/images/`
- **React Components**: `src/components/`
- **Pages**: `src/app/`

## Customization

To modify content:
1. Edit the HTML files in `public/` directory
2. Or update the components in `src/components/` to use JSX instead of dangerouslySetInnerHTML
3. CSS can be modified in `src/styles/extracted-styles.css` or `public/css/`




