# Documentation Images

This folder contains images for the React documentation site.

## Adding Images to Documentation

### Step 1: Add Image Files

Place your image files in this directory:
- PNG, JPG, GIF, or SVG formats supported
- Recommended: PNG or JPG for screenshots
- Keep file sizes reasonable (< 500 KB per image for fast loading)
- Use descriptive filenames: `linear-repeater-example.png`, `effector-controls.jpg`

### Step 2: Reference in DOCUMENTATION.md

Use standard markdown image syntax:

```markdown
![Alt text description](images/filename.png)
```

### Examples

**Basic Image:**
```markdown
![Linear Repeater interface](images/linear-repeater-ui.png)
```

**Image with Caption:**
```markdown
![Grid Repeater example](images/grid-repeater-example.png)
*Grid Repeater creating a 10×8 array of shape layers*
```

**Screenshot (auto-styled with purple border):**
```markdown
![Screenshot of Effector controls](images/effector-screenshot.png)
```

**Multiple Images Side by Side:**
```markdown
| Before | After |
|--------|-------|
| ![Before effector](images/before.png) | ![After effector](images/after.png) |
```

### Image Styling

Images are automatically styled with:
- Rounded corners (8px border-radius)
- Subtle shadow and border
- Responsive width (scales to fit content area)
- Purple-tinted shadow for screenshots (any alt text containing "screenshot")

### Recommended Image Sizes

- **Screenshots:** 1200px width (retina: 2400px)
- **UI elements:** 800px width
- **Icons/small graphics:** 400px width
- **Full interface shots:** 1600px width

### File Naming Convention

Use lowercase with hyphens:
- ✅ `linear-repeater-example.png`
- ✅ `effector-controls-panel.jpg`
- ❌ `Linear Repeater Example.png`
- ❌ `EffectorControls.jpg`

### Example Documentation Section

```markdown
### Linear Repeater

Duplicate layers in a straight line.

![Linear Repeater button in panel](images/linear-button.png)

**How to Use:**
1. Select layer(s) in composition
2. Enter amount in text input (e.g., "10")
3. Click **Linear Repeater** button

![Linear Repeater creating 6 layers](images/linear-repeater-result.png)
*Linear Repeater with 6 clones, 100px spacing*

**Controls:**
- **Amount** - Number of clones (default: 6)
- **Spacing** - Distance between clones (default: 100px)

![Linear Repeater controls in Effect Controls panel](images/linear-controls-screenshot.png)
```

### Updating Documentation

After adding images, commit and push to GitHub:

```bash
cd docs-site
git add images/
git add DOCUMENTATION.md
git commit -m "Docs: Add images for Linear Repeater section"
git push
```

Changes go live automatically on: https://mograph-tools.github.io/react-docs/
