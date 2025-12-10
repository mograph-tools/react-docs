# React Documentation Site - GitHub Pages

This directory contains the GitHub Pages documentation site for React.

## Files

- **index.html** - Main HTML structure with sidebar navigation
- **style.css** - Custom styling with React brand colors (purple #8471FF, cyan #2ACCFF)
- **script.js** - Markdown loading and navigation functionality
- **DOCUMENTATION.md** - Complete user documentation with section anchors

## Deployment to GitHub Pages

### Option 1: Deploy from docs-site directory

1. **Push to GitHub:**
   ```bash
   git add docs-site/
   git commit -m "Docs: Add GitHub Pages documentation site"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs-site`
   - Click Save

3. **Access site:**
   - URL: `https://[username].github.io/[repo-name]/`
   - Example: `https://mograph-tools.github.io/react/`

### Option 2: Deploy from root /docs directory

If you prefer the standard `/docs` folder:

1. **Move files:**
   ```bash
   mv docs-site docs
   ```

2. **Configure GitHub Pages:**
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/docs`

## Local Testing

To test locally before deploying:

```bash
# Install a simple HTTP server
npm install -g http-server

# Navigate to docs-site directory
cd docs-site

# Start server
http-server -p 8080

# Open in browser
open http://localhost:8080
```

## Updating Documentation

1. Edit `DOCUMENTATION.md` with new content
2. Use proper section anchors: `<span id="section-name"></span>`
3. Ensure navigation links in `index.html` match anchor IDs
4. Test locally, then push to GitHub

## Section Anchors

Section IDs currently defined:

**Getting Started:**
- `overview`
- `installation`

**Repeaters:**
- `linear-repeater`
- `grid-repeater`
- `radial-repeater`
- `path-repeater`

**Effectors:**
- `effector-overview`
- `position-effector`
- `rotation-effector`
- `scale-effector`
- `opacity-effector`

**Modifiers:**
- `falloff`
- `sticky`
- `elastic`

**Tools:**
- `tracer`
- `refresh`
- `delete`

## Shift-Click Integration

To integrate shift-click help from CEP panel:

**Update HelpManager.ts:**
```typescript
show(section: string = 'overview'): void {
  const baseUrl = 'https://mograph-tools.github.io/react/';
  const url = `${baseUrl}#${section}`;

  // Open in browser
  csInterface.evalScript(`
    system.callSystem('open "${url}"');
  `);
}
```

**Button mapping:**
- Linear button → `#linear-repeater`
- Grid button → `#grid-repeater`
- Radial button → `#radial-repeater`
- Path button → `#path-repeater`
- Effector button → `#effector-overview`
- Tracer button → `#tracer`
- Refresh button → `#refresh`
- Delete button → `#delete`

## Custom Styling

The site uses React brand colors and Adobe Fonts:

**Colors:**
- Primary: Purple `#8471FF`
- Secondary: Cyan `#2ACCFF`
- Background: White `#ffffff` / Off-white `#F3F3F3`
- Text: Dark `#303030` / Gray `#666666`

**Typography:**
- Headings: "new-kansas" (italic, 700 weight)
- Body: "neuzeit-grotesk" (400 weight)
- Imported via TypeKit: `@import url("https://use.typekit.net/qgd0wgv.css")`

## Features

- ✅ Sidebar navigation with section links
- ✅ Smooth scrolling to sections
- ✅ Active link highlighting while scrolling
- ✅ Markdown rendering with marked.js
- ✅ Responsive design (mobile-friendly)
- ✅ Custom scrollbar styling
- ✅ Section anchor support for direct links

## Browser Compatibility

- Chrome/Edge: Full support
- Safari: Full support
- Firefox: Full support
- Mobile browsers: Responsive layout with collapsible sidebar

## Maintenance

**Updating documentation:**
1. Edit `DOCUMENTATION.md`
2. Commit and push to GitHub
3. Site updates automatically (GitHub Pages refreshes in ~1 minute)

**Adding new sections:**
1. Add section anchor in `DOCUMENTATION.md`: `<span id="new-section"></span>`
2. Add navigation link in `index.html` sidebar
3. Add section ID to `sections` array in `script.js` (for scroll highlighting)

---

**Questions?** Check [DEVELOPMENT.md](../docs/DEVELOPMENT.md) for development guidelines.
