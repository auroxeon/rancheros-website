# Rancheros Website - Navigation Structure Documentation

**Last Updated:** January 19, 2026  
**Website:** Rancheros Grills  
**Framework:** Next.js 14

---

## Table of Contents

1. [Header Navigation](#header-navigation)
2. [Header Buttons & Links](#header-buttons--links)
3. [Mobile Navigation Menu](#mobile-navigation-menu)
4. [Footer Navigation](#footer-navigation)
5. [Homepage Section Links](#homepage-section-links)
6. [Page Routes](#page-routes)
7. [External Links](#external-links)
8. [Contact Information](#contact-information)

---

## Header Navigation

**Location:** Fixed top header (transparent on load, fades to black on scroll)  
**Component:** `src/components/Header.tsx`

### Logo
- **Element:** Image logo
- **Link:** `/` (Homepage)
- **Image:** `/rancheros-logo.png`
- **Alt Text:** "Rancheros"
- **Styling:** White filter applied (visible on transparent/black background)
- **Size:** 
  - Desktop: 100px height
  - Mobile: 80px height

### Main Navigation Menu Items

The navigation menu is accessible via the burger menu icon (right side of header). All items are listed in the right-sliding menu panel:

| Menu Item | Route | Component Reference |
|-----------|-------|---------------------|
| Home | `/` | `src/app/page.tsx` |
| Domestic Gardens | `/domestic-gardens` | `src/app/domestic-gardens/page.tsx` (to be created) |
| Commercial Gardens | `/commercial-gardens` | `src/app/commercial-gardens/page.tsx` (to be created) |
| Meet the Team | `/meet-the-team` | `src/app/meet-the-team/page.tsx` (to be created) |
| How we Work | `/how-we-work` | `src/app/how-we-work/page.tsx` (to be created) |
| Garden Design | `/garden-design` | `src/app/garden-design/page.tsx` |
| Garden Build | `/garden-build` | `src/app/garden-build/page.tsx` (to be created) |
| Garden Maintenance | `/garden-maintenance` | `src/app/garden-maintenance/page.tsx` (to be created) |
| Press | `/press` | `src/app/press/page.tsx` |
| Careers | `/careers` | `src/app/careers/page.tsx` |
| Get in touch | `/contact` | `src/app/contact/page.tsx` |

---

## Header Buttons & Links

### "Get in touch" Button
- **Location:** Top right of header (next to burger menu)
- **Type:** Link button
- **Route:** `/contact`
- **Styling:** White background, black text, uppercase
- **Component:** `src/components/Header.tsx` (line 64)
- **CSS Class:** `navbar__get-in-touch`

### Burger Menu Button
- **Location:** Top right of header
- **Type:** Button (opens right-sliding menu)
- **Action:** Opens `MobileNavigation` component
- **Aria Label:** "Open navigation menu"
- **Component:** `src/components/Header.tsx` (line 67-79)
- **CSS Class:** `navbar__menu-toggle`

---

## Mobile Navigation Menu

**Component:** `src/components/MobileNavigation.tsx`  
**Style:** Right-sliding panel (light beige background)  
**Trigger:** Burger menu button in header

### Menu Structure

All navigation items from the header are displayed in a vertical list:

1. Home → `/`
2. Domestic Gardens → `/domestic-gardens`
3. Commercial Gardens → `/commercial-gardens`
4. Meet the Team → `/meet-the-team`
5. How we Work → `/how-we-work`
6. Garden Design → `/garden-design`
7. Garden Build → `/garden-build`
8. Garden Maintenance → `/garden-maintenance`
9. Press → `/press`
10. Careers → `/careers`
11. Get in touch → `/contact`

### Menu Features
- **Close Button:** X icon in top right
- **Overlay:** Dark overlay behind menu when open
- **Animation:** Slides in from right with smooth transition
- **Styling:** Light beige background (`#f5f5f0`), dark text

---

## Footer Navigation

**Component:** `src/components/Footer/Footer.tsx`  
**Location:** Bottom of all pages

### Footer Sections

#### 1. Company Information
- **Title:** "Rancheros Grills"
- **Content:**
  - Address: Pantiles Chambers, 85 High Street, Tunbridge Wells, Kent, TN1 1XP
  - Phone: `tel:0189248923` → "01892 489 923"
  - Email: `mailto:design@luxurygardendesign.co.uk` → "design@luxurygardendesign.co.uk"

#### 2. Explore Section
- **Title:** "Explore"
- **Links:**
  - Home → `/`
  - About Us → `/about-us` (note: different from `/about`)
  - Portfolio → `/garden-portfolio` (to be created)
  - Contact Us → `/contact`
  - News → `/news`

#### 3. Follow Us Section
- **Title:** "Follow Us"
- **Social Media Links:**
  - Instagram → `https://instagram.com` (opens in new tab)
  - Facebook → `https://facebook.com` (opens in new tab)
  - YouTube → `https://youtube.com` (opens in new tab)
  - Pinterest → `https://pinterest.com` (opens in new tab)
  - Houzz → `https://houzz.com` (opens in new tab)

#### 4. Legal Section
- **Title:** "Legal"
- **Links:**
  - Privacy Policy → `/privacy-policy` (to be created)
  - Accessibility Statement → `/accessibility-statement` (to be created)

#### 5. Copyright
- **Text:** "© {current year} Rancheros Grills. All rights reserved."

---

## Homepage Section Links

**Component:** `src/components/HomePage.tsx`

### Hero Section
- **Component:** `src/components/Hero.tsx`
- **Content:** Tagline text overlay on video background
- **No direct links** (purely visual)

### About Section
- **Component:** `src/components/AboutSection.tsx`
- **Content:** "Award winning garden design" heading and description
- **No direct links** (informational content)

### Domestic Gardens Section
- **Component:** `src/components/DomesticGardensSection.tsx`
- **Link:** "View our domestic gardens portfolio >" → `/domestic-gardens`
- **Text:** Description of domestic garden services

### Commercial Gardens Section
- **Component:** `src/components/CommercialGardensSection.tsx`
- **Link:** "View our commercial gardens portfolio >" → `/commercial-gardens`
- **Text:** Description of commercial garden services

### How we Work Section
- **Component:** `src/components/HowWeWorkSection.tsx`
- **Link:** "More about how we work >" → `/how-we-work`
- **Text:** Description of working approach

### Newsletter Section
- **Component:** `src/components/NewsletterSection.tsx`
- **Type:** Form (Email, First Name, Last Name)
- **Action:** Submit button (currently logs to console)
- **No external link** (form submission)

---

## Page Routes

### Existing Pages

| Route | File Path | Status |
|-------|-----------|--------|
| `/` | `src/app/page.tsx` | ✅ Active |
| `/about` | `src/app/about/page.tsx` | ✅ Active |
| `/accessories` | `src/app/accessories/page.tsx` | ✅ Active |
| `/architects` | `src/app/architects/page.tsx` | ✅ Active |
| `/bespoke` | `src/app/bespoke/page.tsx` | ✅ Active |
| `/blog` | `src/app/blog/page.tsx` | ✅ Active |
| `/careers` | `src/app/careers/page.tsx` | ✅ Active |
| `/contact` | `src/app/contact/page.tsx` | ✅ Active |
| `/developers` | `src/app/developers/page.tsx` | ✅ Active |
| `/garden-design` | `src/app/garden-design/page.tsx` | ✅ Active |
| `/garden-designers` | `src/app/garden-designers/page.tsx` | ✅ Active |
| `/homeowners` | `src/app/homeowners/page.tsx` | ✅ Active |
| `/landscape-designers` | `src/app/landscape-designers/page.tsx` | ✅ Active |
| `/news` | `src/app/news/page.tsx` | ✅ Active |
| `/press` | `src/app/press/page.tsx` | ✅ Active |
| `/services` | `src/app/services/page.tsx` | ✅ Active |
| `/single-grills` | `src/app/single-grills/page.tsx` | ✅ Active |
| `/double-grills` | `src/app/double-grills/page.tsx` | ✅ Active |

### Pages Referenced But Not Created

| Route | Referenced In | Status |
|-------|---------------|--------|
| `/domestic-gardens` | Header nav, Homepage section | ❌ To be created |
| `/commercial-gardens` | Header nav, Homepage section | ❌ To be created |
| `/meet-the-team` | Header nav | ❌ To be created |
| `/how-we-work` | Header nav, Homepage section | ❌ To be created |
| `/garden-build` | Header nav | ❌ To be created |
| `/garden-maintenance` | Header nav | ❌ To be created |
| `/about-us` | Footer | ❌ To be created (note: `/about` exists) |
| `/garden-portfolio` | Footer | ❌ To be created |
| `/privacy-policy` | Footer | ❌ To be created |
| `/accessibility-statement` | Footer | ❌ To be created |

### Test/Development Pages

| Route | File Path | Purpose |
|-------|-----------|---------|
| `/diagnostic` | `src/app/diagnostic/page.tsx` | Testing |
| `/minimal` | `src/app/minimal/page.tsx` | Testing |
| `/simple` | `src/app/simple/page.tsx` | Testing |
| `/test` | `src/app/test/page.tsx` | Testing |
| `/test-css` | `src/app/test-css/page.tsx` | Testing |
| `/test-html` | `src/app/test-html/page.tsx` | Testing |
| `/test-load` | `src/app/test-load/page.tsx` | Testing |
| `/test-render` | `src/app/test-render/page.tsx` | Testing |
| `/test-simple` | `src/app/test-simple/page.tsx` | Testing |

---

## External Links

### Social Media Links (Footer)

All social media links open in a new tab (`target="_blank"`) with `rel="noopener"`:

- **Instagram:** `https://instagram.com`
- **Facebook:** `https://facebook.com`
- **YouTube:** `https://youtube.com`
- **Pinterest:** `https://pinterest.com`
- **Houzz:** `https://houzz.com`

**Note:** These are placeholder URLs. Update with actual social media profile URLs.

---

## Contact Information

### Phone
- **Link:** `tel:0189248923`
- **Display:** "01892 489 923"
- **Location:** Footer (Company Information section)

### Email
- **Link:** `mailto:design@luxurygardendesign.co.uk`
- **Display:** "design@luxurygardendesign.co.uk"
- **Location:** Footer (Company Information section)

### Address
- **Display:** 
  ```
  Pantiles Chambers
  85 High Street, Tunbridge Wells
  Kent, TN1 1XP
  ```
- **Location:** Footer (Company Information section)

---

## Navigation Component Files

### Header Components
- `src/components/Header.tsx` - Main header component
- `src/components/Navigation.tsx` - Desktop navigation (currently hidden)
- `src/components/MobileNavigation.tsx` - Right-sliding mobile menu
- `src/styles/navbar.css` - Header/navbar styles

### Footer Components
- `src/components/Footer/Footer.tsx` - Footer component
- `src/components/Footer/Footer.module.css` - Footer styles

### Homepage Section Components
- `src/components/HomePage.tsx` - Homepage layout
- `src/components/Hero.tsx` - Hero section with video
- `src/components/AboutSection.tsx` - About section
- `src/components/DomesticGardensSection.tsx` - Domestic gardens section
- `src/components/CommercialGardensSection.tsx` - Commercial gardens section
- `src/components/HowWeWorkSection.tsx` - How we work section
- `src/components/NewsletterSection.tsx` - Newsletter signup section

---

## Navigation Behavior

### Header Scroll Behavior
- **On Page Load:** Transparent background, white logo/buttons visible
- **On Scroll (>50px):** Fades to black background (`rgba(0, 0, 0, 0.95)`) with backdrop blur
- **Transition:** Smooth 0.3s ease transition

### Mobile Menu Behavior
- **Trigger:** Burger menu button click
- **Animation:** Slides in from right with 0.35s cubic-bezier transition
- **Overlay:** Dark overlay appears behind menu
- **Close:** Click X button or click overlay
- **Body Scroll:** Disabled when menu is open

### Link Behavior
- **Internal Links:** Use Next.js `Link` component for client-side navigation
- **External Links:** Use standard `<a>` tags with `target="_blank"` and `rel="noopener"`
- **Contact Links:** Use `tel:` and `mailto:` protocols

---

## Missing Pages Checklist

Pages referenced in navigation but not yet created:

- [ ] `/domestic-gardens` - Referenced in header nav and homepage
- [ ] `/commercial-gardens` - Referenced in header nav and homepage
- [ ] `/meet-the-team` - Referenced in header nav
- [ ] `/how-we-work` - Referenced in header nav and homepage
- [ ] `/garden-build` - Referenced in header nav
- [ ] `/garden-maintenance` - Referenced in header nav
- [ ] `/about-us` - Referenced in footer (note: `/about` exists)
- [ ] `/garden-portfolio` - Referenced in footer
- [ ] `/privacy-policy` - Referenced in footer
- [ ] `/accessibility-statement` - Referenced in footer

---

## Notes

1. **Route Inconsistency:** Footer links to `/about-us` but page exists at `/about`. Consider aligning.
2. **Social Media URLs:** Currently using placeholder URLs. Update with actual profile links.
3. **Newsletter Form:** Currently only logs to console. Needs backend integration.
4. **Navigation Visibility:** Desktop navigation component exists but is hidden. Only burger menu is visible on all screen sizes.
5. **Logo Filter:** Logo uses CSS filter to appear white on transparent/black backgrounds.

---

**Document Version:** 1.0  
**Generated:** January 19, 2026

