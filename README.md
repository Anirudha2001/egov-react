# eGov React Landing Page

Modern, responsive React landing page inspired by the eGov Foundation website.

It includes multiple content sections, tabbed content, reveal animations, lazy-loaded sections, and performance-focused rendering optimizations.

## Tech Stack

- React 18
- Vite 6
- CSS (custom properties + responsive media queries)
- Bootstrap Icons (via classes used in components)

## Run Locally

### Prerequisites

- Node.js 18+ recommended
- npm

### Install and start

```bash
npm install
npm run dev
```

Vite will print the local URL (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build in `dist/`
- `npm run preview` - preview production build locally

## Project Structure

```text
src/
  components/
    Header/
    Hero/
    Stats/
    Features/
    Stories/
    Platform/
    Latest/
    Supporters/
    Footer/
  data/
    features.js
    resources.js
    supporters.js
  hooks/
    useReveal.js
  styles/
    global.css
  App.jsx
  index.jsx
```

## Highlights

- Fully responsive layout (mobile, tablet, desktop)
- Sticky header with mobile navigation drawer
- Scroll reveal effects using `IntersectionObserver`
- Animated stats counter on viewport entry
- Interactive tabbed sections (Features and Latest resources)
- Lazy loading for lower-page sections via `React.lazy` + `Suspense`
- Image lazy loading and async decoding for better initial load behavior
- Reduced-motion support for accessibility (`prefers-reduced-motion`)

## Performance Notes

- Offscreen sections use `content-visibility` to reduce initial paint cost.
- Only active tab panels are rendered in interactive sections.
- Build output is split into smaller chunks for better cache behavior.

## Build

```bash
npm run build
```
