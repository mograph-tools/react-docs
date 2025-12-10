# React - Parametric Cloning for After Effects

<span id="overview"></span>
## Overview

React is a powerful After Effects extension that enables parametric cloning and dynamic animation effects. Create complex repeater patterns, apply sophisticated effectors, and build procedural animations with ease.

**Key Features:**
- 4 Repeater Types (Linear, Grid, Radial, Path)
- 7 Effector Properties (Position, Rotation, Scale, Opacity, Color)
- 3 Modifiers (Falloff, Sticky, Elastic)
- Advanced Tools (Tracer, Refresh, Delete)

---

<span id="installation"></span>
## Installation

1. Download React from [aescripts.com](https://aescripts.com/react/)
2. Run the installer
3. Restart After Effects
4. Open: **Window → Extensions → React**

The React panel will appear in your After Effects workspace.

---

## Repeaters

<span id="linear-repeater"></span>
### Linear Repeater

Duplicate layers in a straight line.

**How to Use:**
1. Select layer(s) in composition
2. Enter amount in text input (e.g., "10")
3. Click **Linear Repeater** button

![Linear Repeater controls](images/Linear.png)
*Linear Repeater controls in Effects panel*

**Controls:**
- **Amount** - Number of clones (default: 6)
- **Spacing** - Distance between clones (default: 100px)
- **Rotation** - Rotation angle for entire array
- **Scale** - Scale multiplier for entire array
- **Repeat from** - Start from first layer or center pattern
- **Offset** - Manual position adjustment

**Shift-Click:** Opens documentation to this section

**Use Cases:**
- Title sequences with staggered text
- Fence posts or pillars
- Animation steps

---

<span id="grid-repeater"></span>
### Grid Repeater

Arrange layers in rows and columns.

**How to Use:**
1. Select layer(s) in composition
2. Enter dimensions in text input:
   - Single number: "10" → 10×10 grid
   - Two numbers: "10x5" → 10 columns, 5 rows
3. Click **Grid Repeater** button

![Grid Repeater controls](images/Grid.png)
*Grid Repeater controls in Effects panel*

**Controls:**
- **Amount** - Grid dimensions (X × Y)
- **Spacing** - Distance between clones (X and Y)
- **Rotation** - Rotation angle for entire grid
- **Scale** - Scale multiplier for entire grid
- **Repeat from** - Position grid from corner or center
- **Offset** - Manual position adjustment (X and Y)
- **Honeycomb Offset** - Offset alternate rows for honeycomb pattern

**Shift-Click:** Opens documentation to this section

**Use Cases:**
- Tiled backgrounds
- Crowd duplication
- Photo grids
- Honeycomb patterns

---

<span id="radial-repeater"></span>
### Radial Repeater

Distribute layers in a circle.

**How to Use:**
1. Select layer(s) in composition
2. Enter amount in text input (e.g., "23")
3. Click **Radial Repeater** button

![Radial Repeater controls](images/Radial.png)
*Radial Repeater controls in Effects panel*

**Controls:**
- **Amount** - Number of clones around circle (default: 23)
- **Radius** - Distance from center point
- **Rotation** - Starting rotation angle
- **Scale** - Scale multiplier for entire array
- **Start Angle** - Where circle begins (default: 0°)
- **End Angle** - Where circle ends (default: 360°)
- **Offset** - Rotational offset adjustment

**Shift-Click:** Opens documentation to this section

**Use Cases:**
- Clock numbers
- Circular menus
- Mandala patterns
- Radial progress indicators

---

<span id="path-repeater"></span>
### Path Repeater

Distribute layers along a custom path.

**How to Use:**

**Option 1: Create New Path**
1. Select layer(s) in composition
2. Enter amount in text input (e.g., "10")
3. Click **Path Repeater** button
4. Select **Create new path** radio button
5. Choose number of points (3-10)
6. Enable **Use bezier curves** for smooth curves
7. Click **Continue**

**Option 2: Select Existing Path**
1. Select layer(s) in composition
2. Select a shape path property in timeline
3. Click **Path Repeater** button
4. Select **Select existing path** radio button
5. Click **Continue**

![Path Repeater controls](images/Path.png)
*Path Repeater controls in Effects panel*

**Controls:**
- **Amount** - Number of clones along path (default: 10)
- **Offset** - Shift position along path (0-100%)
- **Rotation** - Rotation angle for entire array
- **Scale** - Scale multiplier for entire array

**Shift-Click:** Opens documentation to this section

**Use Cases:**
- Text on path
- Following motion graphics
- Custom distribution patterns
- Organic animations

---

## Effectors

<span id="effector-overview"></span>
### Effector Overview

Effectors apply dynamic transformations to repeated layers based on their clone index or distance from an effector layer.

**How Effectors Work:**
1. Create a repeater (Linear, Grid, Radial, or Path)
2. Select one or more properties in the Effects Controls panel
3. Click **Effector** button
4. An effector layer is created with controls
5. Move/animate the effector to affect repeated layers

**Effect Modes:**
- **Random** - Randomize property values
- **Step** - Incremental steps per clone
- **Noise** - Animated noise patterns
- **Attract/Repel** - Physics-based attraction (Position only)
- **Look At** - Aim rotation at target (Rotation Z only)

**Alt-Click Effector Button:** Creates effector without requiring property selection

---

<span id="position-effector"></span>
### Position Effector

Control the X and Y position of repeated layers.

![Position Effector controls](images/Position.png)
*Position Effector controls in Effects panel*

**Available Modes:**
- **Random** - Randomly offset positions
- **Step** - Incremental position change per clone
- **Noise** - Animated turbulent motion
- **Attract/Repel** - Pull layers toward or push away from effector

**Special Controls:**
- **Attract/Repel Amount** - Strength of attraction (negative = repel)
- **Target** - Layer to attract to (default: effector layer)

**Common Uses:**
- Scattered text layouts
- Organic motion
- Physics simulations
- Procedural animation

---

<span id="rotation-effector"></span>
### Rotation Effector

Control the rotation (Z, X, Y) of repeated layers.

![Rotation Effector controls](images/Rotation.png)
*Rotation Effector controls in Effects panel*

**Available Modes:**
- **Random** - Randomize rotation angles
- **Step** - Incremental rotation per clone
- **Noise** - Animated rotation turbulence
- **Look At** (Rotation Z only) - Aim layers at target

**Special Controls (Rotation Z):**
- **Look At Offset** - Angle offset when aiming at target
- **Target** - Layer to look at (default: effector layer)

**Common Uses:**
- Text rotation variations
- Camera facing elements
- Animated turbulence
- Aim constraints

---

<span id="scale-effector"></span>
### Scale Effector

Control the uniform or independent X/Y scale of repeated layers.

![Scale Effector controls](images/Scale.png)
*Scale Effector controls in Effects panel*

**Available Modes:**
- **Random** - Randomize scale values
- **Step** - Incremental scale change per clone
- **Noise** - Animated scale turbulence

**Controls:**
- **Uniform Scale** - Checkbox to link X and Y scale
- **X / Y Scale** - Independent scale controls (when uniform disabled)

**Common Uses:**
- Size variations
- Pulsing animations
- Depth perception
- Breathing effects

---

<span id="opacity-effector"></span>
### Opacity Effector

Control the transparency of repeated layers.

**Available Modes:**
- **Random** - Randomize opacity values
- **Step** - Incremental opacity change per clone
- **Noise** - Animated opacity flicker

**Common Uses:**
- Fade patterns
- Twinkling effects
- Depth of field simulation
- Glitch effects

---

## Modifiers

<span id="falloff"></span>
### Falloff

Control how effector influence diminishes over distance.

**How to Enable:**
1. Create an effector on repeated layers
2. Check **Falloff Enable** checkbox on effector layer
3. Adjust **Falloff Radius** slider
4. Choose **Falloff Shape**

**Falloff Shapes:**
- **Linear** - Straight linear falloff
- **Smooth** - Ease in/out curve
- **Round** - Circular dropoff

**Controls:**
- **Falloff Radius** - Distance where influence ends
- **Falloff Shape** - Curve type

**Use Cases:**
- Localized effects
- Ripple animations
- Force field simulation
- Organic motion

---

<span id="sticky"></span>
### Sticky

Snap property values to specific intervals.

**How to Enable:**
1. Create an effector on repeated layers
2. Check **Sticky** checkbox on effector layer
3. Adjust **Sticky Value** slider

**How It Works:**
- Property values snap to multiples of the sticky value
- Example: Sticky Value = 45 → Rotation snaps to 0°, 45°, 90°, 135°, etc.
- Works with all effector properties (Position, Rotation, Scale, Opacity)

**Use Cases:**
- Stair-step animations
- Quantized motion
- Retro effects
- Grid snapping

---

<span id="elastic"></span>
### Elastic

Add spring-like bounce to effector animations.

**How to Enable:**
1. Create an effector with animated property
2. Check **Elastic Enable** checkbox on effector layer
3. Adjust elastic parameters

**Controls:**
- **Elastic Amplitude** - Bounce strength multiplier (default: 1)
- **Elastic Frequency** - Oscillation speed, higher = more bounces (default: 2)
- **Elastic Decay** - Decay time in frames, lower = faster decay (default: 0.5)

**How It Works:**
- Detects when effector motion stops
- Adds spring oscillation that decays exponentially
- Works bidirectionally (forward and backward motion)
- Respects actual position changes for natural feel

**Use Cases:**
- Cartoon physics
- Spring animations
- Natural motion
- Overshoot effects

---

## Tools

<span id="tracer"></span>
### Tracer

Create animated lines connecting repeated layers.

**How to Use:**
1. Create a repeater (any type)
2. Select some or all repeated layers
3. Click **Tracer** button
4. Choose tracer type in dialog

**Tracer Types:**
- **Line** - Straight lines between layer anchors
- **Point** - Individual points at each layer position
- **Transform** - Animated path following layer transforms

**Controls:**
- Tracer shapes are standard After Effects shape layers
- Edit stroke width, color, and effects
- Animate path trim for reveal animations

**Use Cases:**
- Constellation patterns
- Network diagrams
- Motion trails
- Connect-the-dots effects

---

<span id="refresh"></span>
### Refresh

Update repeater settings and refresh layer structure.

**How to Use:**
1. Adjust repeater controls on repeater null layer
2. Click **Refresh** button
3. Repeater updates with new settings

**What Gets Refreshed:**
- Amount (add/remove clones)
- Sorting order
- Layer tree structure
- Property expressions

**Refresh Types:**
- **Normal Refresh** - Update selected repeater(s)
- **Alt+Click Refresh** - Update ALL repeaters in composition

**Use Cases:**
- Change clone count after creation
- Reorder layers
- Fix broken expressions
- Update after composition changes

---

<span id="delete"></span>
### Delete

Remove React elements and optionally bake animations to keyframes.

**How to Use:**

**Delete Selected:**
1. Select repeater layer, effector layer, or affected layers
2. Click **Delete** button
3. Choose **Delete Selected** in dialog
4. Choose baking mode

**Delete All:**
1. Click **Delete** button (no selection)
2. Choose **Delete All** in dialog
3. Choose baking mode

**Baking Modes:**
- **No Baking** - Remove expressions, layers revert to original state
- **Current Frame** - Bake current values as static values
- **All Frames** - Bake full animation to keyframes

**What Gets Deleted:**
- Repeater null layers
- Effector layers
- React expressions from layers
- React pseudo effects from layers

**Smart Deletion:**
- Deleting one effector preserves others on same property
- Deleting repeater preserves effectors
- Position expressions preserved when repeater remains

**Use Cases:**
- Clean up finished animations
- Bake procedural motion to keyframes
- Remove React dependencies
- Reduce project complexity

---

## Tips & Tricks

### Combining Multiple Repeaters
- Create multiple repeaters on the same layers
- Each repeater adds to position independently
- Use different repeater types for complex patterns

### Parenting with Repeaters
- Parent repeated layers to create hierarchies
- Effectors work correctly with parented layers
- Great for mechanical rigs and character animation

### 3D Space
- React works with both 2D and 3D layers
- Position effectors respect 3D space
- Radial repeaters can work in 3D with rotation

### Expression Performance
- Expressions are optimized for performance
- Property lookups cached where possible
- 500+ test cases ensure reliability

### Keyboard Shortcuts
- **Shift+Click** any button → Opens help documentation
- **Alt+Click Refresh** → Refresh all repeaters in comp
- **Alt+Click Effector** → Create effector without property selection

---

## Troubleshooting

### Repeater Not Creating
**Issue:** Button clicked but nothing happens
**Solution:**
- Ensure a composition is open and active
- Check layer is selected (except Path Repeater)
- Verify text input has valid number

### Effector Not Working
**Issue:** Effector created but no effect visible
**Solution:**
- Check property is selected before clicking Effector
- Verify effector amount slider is not at 0
- Check falloff radius is large enough (if falloff enabled)
- Try moving effector layer position

### Expressions Show Errors
**Issue:** Red expression errors in timeline
**Solution:**
- Click **Refresh** button to update expressions
- Check repeater/effector layers haven't been renamed
- Verify composition expression engine is JavaScript (not Legacy)

### Delete Not Baking
**Issue:** Delete removes expressions but no keyframes created
**Solution:**
- Choose "All Frames" baking mode, not "Current Frame"
- Ensure property has actual animation (not static)
- Check layer isn't locked

### Performance Issues
**Issue:** Comp preview is slow with many repeated layers
**Solution:**
- Reduce number of clones
- Disable effectors during preview (checkbox)
- Lower comp preview resolution
- Consider baking to keyframes when animation complete

---

## Support

**Need Help?**
- [User Documentation](https://mograph-tools.github.io/react/)
- [Report Bug](https://github.com/mograph-tools/react/issues)
- [Feature Request](https://github.com/mograph-tools/react/issues)

**Version:** 2.2.1
**Developer:** mograph.tools
**Built with:** Claude Code

---

*Copyright © 2025 mograph.tools. All rights reserved.*
