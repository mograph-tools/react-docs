<span id="overview"></span>
## Overview

React is a parametric cloning tool for After Effects. Select one or more layers, click a repeater button, and React duplicates those layers into a repeater. Effectors change property values across all layers in the repeater at once. Tracers draw lines between layers. Everything is expression-based and updates live.

React works with any layer type: shape layers, text layers, footage, pre-comps, and native 3D layers (imported .obj/.gltf models and AE 2026+ parametric mesh shapes).

<span id="installation"></span>
## Installation

1. Download React from your aescripts account.
2. Install the ZXP file using the aescripts + aeplugins app.
3. Restart After Effects.
4. Open the panel: Window > Extensions > React.
5. Run the initialization script if prompted. This installs the pseudo effects React needs.

React uses expression-based pseudo effects. If a composition opens and expressions show an error, run the initialization script again from the panel menu.

<span id="toolbar-interface"></span>
## Toolbar Interface

The React panel has a text input and eight buttons.

Enter a number in the text input before clicking a repeater button to set the layer count. Leave it blank to use the default from Preferences.

Use Shift-Click on any button to open the relevant help section.

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="5" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="14" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="23" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Linear Repeater</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat in a line. Enter the amount in the text input.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="5" cy="5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="14" cy="5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="23" cy="5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="5" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="14" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="23" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="5" cy="23" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="14" cy="23" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="23" cy="23" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Grid Repeater</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat in a grid. Separate X, Y, and Z values with a space, comma, x, *, or -. For example: 5x4, 5 4, or 5x4x3 for a 3D grid.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="4" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="22.5" cy="9.5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="22.5" cy="18.5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="14" cy="24" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="5.5" cy="18.5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="5.5" cy="9.5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px; 0; font-size: 18px; color: #303030;">Radial Repeater</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat in a circle. Enter the amount in the text input. For a 3D radial repeater, use two numbers separated by a space or x: the first sets the ring count, the second sets the depth layers.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <path d="M 6 20 C 6 10, 13 11, 14 14 C 15 17, 22 18, 22 8" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="6" cy="23" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="22" cy="5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Path Repeater</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat along a path. A dialog appears where you can select an existing path or create a new one. Enter the amount in the text input.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="10.5" fill="none" stroke="#8471FF" stroke-width="1.2"/>
        <line x1="14" y1="8" x2="14" y2="20" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="8" y1="14" x2="20" y2="14" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Add Effector</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layer properties, then press to add an effector. If the property is part of a layer in a repeater, the effector applies to all layers in that repeater. Hold Alt to apply to the selected layer only.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <rect x="3.5" y="3.5" width="21" height="21" fill="none" stroke="#8471FF" stroke-width="1.2"/>
        <line x1="3.5" y1="10.5" x2="24.5" y2="10.5" stroke="#8471FF" stroke-width="1.2"/>
        <line x1="3.5" y1="17.5" x2="24.5" y2="17.5" stroke="#8471FF" stroke-width="1.2"/>
        <line x1="10.5" y1="3.5" x2="10.5" y2="24.5" stroke="#8471FF" stroke-width="1.2"/>
        <line x1="17.5" y1="3.5" x2="17.5" y2="24.5" stroke="#8471FF" stroke-width="1.2"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Add Tracer</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select a React Repeater null to trace all its layers. Or select two or more layers in order to trace those specific layers. Do not mix Repeater nulls and individual layers in the same selection.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <path d="M25.6 11C24.8 7.1 20.6 2 14 2S2 7.4 2 14 7.4 26 14 26s9.8-4.8 10.6-6.4M26.3 3 26.3 11 18.3 11" fill="none" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Refresh</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select a Repeater null to update its layer count, sorting, and tree characters. Or select an Effector null and one or more properties to add those properties to the effector. Hold Alt to apply to the selected layer only.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="11.67" fill="none" stroke="#EC5E5E" stroke-width="1.2"/>
        <line x1="9.33" y1="9.33" x2="18.67" y2="18.67" stroke="#EC5E5E" stroke-width="1.2" stroke-linecap="round"/>
        <line x1="18.67" y1="9.33" x2="9.33" y2="18.67" stroke="#EC5E5E" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Delete</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select a React Repeater or Effector null and click Delete. Choose whether to bake the current frame, bake all frames as keyframes, or remove without baking.</p>
    </div>
  </div>
</div>

---

<span id="repeaters"></span>
## Repeaters

### Setting up a repeater

Click any repeater button to create a repeater.

Select the layers you want repeated before clicking. Leave nothing selected to create null cloner layers, which you can link to existing layers later.

Selecting two or more different layers causes them to iterate through the repeater by default. Change the sorting mode in the repeater effect, then press Refresh.

React creates a Repeater null. Select it to see the repeater controls in the Effects panel.

<span id="setting-repeater-amounts"></span>
### Setting amounts

There are three ways to set the layer count:

1. Enter a number in the text input before clicking the repeater button. Leave it blank to use the preference default.
2. Select the Repeater null, change the Amount in the Effects panel. Layers update automatically, but press Refresh to add or remove layers.
3. Change the preferences (panel menu > Preferences) to update the default amounts.

**Grid amounts:** enter a single number to use the same value for X and Y. Enter two numbers for X and Y. Enter three numbers for X, Y, and Z (creates a 3D grid). Separate numbers with a space, comma, x, *, or -.

**Radial amounts:** enter two numbers for ring count and depth layers (creates a 3D radial repeater).

<span id="sorting-modes"></span>
### Sorting

For repeaters with two or more different source layers, change the Sorting dropdown in the repeater effect and press Refresh.

- **Iterate**: layers cycle in sequence. Three source layers: 1, 2, 3, 1, 2, 3.
- **Cluster**: same layers group together. Three source layers: 1, 1, 1, 2, 2, 2, 3, 3, 3.
- **Random**: random arrangement. Press Refresh again for a different arrangement.
- **Rows** (Grid only): layers arranged row by row.
- **Columns** (Grid only): layers arranged column by column.

### Repeat from

Controls where the repeater null sits relative to the group.

- **Centre**: repeater null sits at the centre of the group.
- **First Layer**: repeater null sits at the position of the first layer.

<span id="linear-repeater"></span>
### Linear Repeater

Arranges layers in a line.

![Linear Repeater Controls](images/Linear.png)

<span id="grid-repeater"></span>
### Grid Repeater

Arranges layers in a grid.

![Grid Repeater Controls](images/Grid.png)

**Honeycomb Offset** shifts alternating rows along X to create a honeycomb arrangement.

**3D Grid:** add a Z value to the amount input (e.g. `5x4x3`) to create a three-dimensional grid. This adds Z - Amount, Z - Spacing, Z - Rotation, and Z - Scale controls to the effect. The Repeater null becomes a 3D layer automatically.

<span id="radial-repeater"></span>
### Radial Repeater

Arranges layers in a circle.

![Radial Repeater Controls](images/Radial.png)

**Start** and **End** control where the first and last layers are positioned around the circle.

With **Loop** enabled, layers loop seamlessly. Animate **Offset** to spin them continuously.

With **Loop** disabled, layers are constrained between Start and End.

**3D Radial:** add a second value to the amount input (e.g. `12 4`) to create a 3D radial repeater. This adds Depth Amount and Depth Spacing controls. The Repeater null becomes a 3D layer.

<span id="path-repeater"></span>
### Path Repeater

Arranges layers along a bezier path.

![Path Repeater Controls](images/Path.png)

Click the Path Repeater button and a dialog appears.

**Select Path:** with the dialog open, click an existing path in the composition (select the path itself, not the layer). Click Select Path.

**Create Path:** set the number of points and whether to use bezier curves. Click Create Path. The path runs left to right by default; edit it in the composition as you would any shape path.

**Orient Along Path:** when checked, each repeated layer rotates to follow the path direction. Note: AE has a known issue where auto-orient can conflict with expression-driven properties that have keyframes. If layers behave unexpectedly, add a single keyframe to the Rotation property as a workaround.

Start and End control where layers are positioned along the path. Loop and Offset work the same way as the Radial repeater.

The path layer is created as a guide layer with a white stroke at width 0. Increase the stroke width to visualise the path, or leave it at 0 to keep it invisible.

---

<span id="effectors"></span>
## Effectors

Effectors change property values across many layers at once, using a single null to control all settings.

### Adding an effector

Select any animatable layer property (position, scale, rotation, opacity, a path's Trim Paths, a color property, or any other property that accepts keyframes).

Press **Add Effector**.

If the property belongs to a layer inside a repeater, the effector is applied to the same property on every layer in that repeater. To add an effector to all position properties in a grid repeater, select one position property from any layer in the repeater. React handles the rest.

**Hold Alt** to apply the effector to the selected layer only, regardless of whether it is inside a repeater.

Select multiple properties before clicking to control them all from one effector.

React creates two layers: an Effector null and a guide layer. The guide visualises the falloff area. It is only visible in the composition when Falloff Shape is set to something other than Off.

### Effector controls

Select the Effector null to see its controls in the Effects panel.

There are two effects: **React - Effector** (global controls) and one effect per property (e.g. React - Effector | Position).

#### React - Effector

**Amount**
Global strength of the effector. 100% by default. Keyframe this to fade the effector in or out.

**Falloff**

- **Shape**: how the effector's influence is distributed spatially.
  - **Off**: all layers affected equally.
  - **Circle**: influence zone shaped as an ellipse in 2D, or an ellipsoid when the null is 3D.
  - **Box**: rectangular influence zone. Rotate the null to change the orientation.
  - **Linear**: influence falls off along a line; direction set by null rotation.
- **Size**: radius or extent of the falloff zone. Also controlled by the null's scale.
- **Hold**: falloff sharpness. At 0%, there is a gradual transition across the falloff edge. At 100%, the edge is hard.

By default the Effector null is a 2D layer. Enable 3D on the null to include the Z axis in Circle and Box falloff calculations.

**Animation**

Controls how the effector value distributes across layers.

- **Animation Type**: Off, In, In & Out, Inverse.
  - **Off**: all layers at full value simultaneously.
  - **In**: value builds from 0 to full across the layer order.
  - **In & Out**: value builds then fades across the layer order.
  - **Inverse**: reverses the In direction.
- **Easing**: Linear, Ease In, Ease Out, Ease In & Out, Custom.
- **Custom Easing** (visible when Custom is selected):
  - **Ease In - X / Y**: moves the lower-left point of the easing curve.
  - **Ease Out - X / Y**: moves the upper-right point of the easing curve.

<span id="position-effector"></span>
#### React - Effector | Position

![Position Effector Controls](images/Position.png)

**Mode**

- **Relative / Absolute**: offset or set the position directly.
  - **X, Y, Z**: value per axis.
  - Each axis has its own Relative/Absolute toggle. Relative adds to the layer's current position; Absolute sets a fixed position.
- **Attract / Repel**: moves layers toward or away from a target.
  - **Target**: the layer to attract or repel toward. Defaults to the Effector null.
  - **Attract / Repel**: positive values push layers away; negative values pull them in.
  - **X Multiplier / Y Multiplier**: scale the effect independently per axis.

<span id="rotation-effector"></span>
#### React - Effector | Rotation

![Rotation Effector Controls](images/Rotation.png)

All three rotation axes (X, Y, Z) share one effect: React - Effector | Rotation.

**Mode**

- **Relative / Absolute**: offset or set the rotation directly.
  - **X, Y, Z**: value per axis. X and Y only affect 3D layers.
  - Each axis has its own Relative/Absolute toggle.
- **Look At**: all three axes rotate to face a target, using AE's native `lookAt()` function.
  - **Target**: the layer to look at. Defaults to the Effector null.
  - **Offset**: rotational offset applied after the Look At calculation.
  - Falloff works in Look At mode. At 0% falloff strength, rotation is 0°. At 100%, the full Look At angle is applied.

<span id="scale-effector"></span>
#### React - Effector | Scale

![Scale Effector Controls](images/Scale.png)

- **Uniform Scale**: when enabled, the X value applies to all axes.
- **X, Y, Z**: value per axis. Relative/Absolute toggle per axis.

<span id="color-effector"></span>
#### React - Effector | Color

![Color Effector Controls](images/Color.png)

**Color Mode**

- **Single Color**: sets all affected layers to one color.
- **HSL**: shifts hue, saturation, and lightness.
- **Multiple Colors**: assigns colors from a palette of up to 10 colors.
  - Enable each color using its checkbox.
  - **Order**: how colors are distributed.
    - **Iterate**: colors cycle in sequence.
    - **Blend**: colors are blended smoothly across layers. **Blend - Loop Length** sets how many layers make up one full blend cycle.
    - **Random**: colors distributed randomly. Use **Seed**, **Evolution**, and **Evolution Step** to control the pattern.

The Color effector does not have modifiers.

---

<span id="modifiers"></span>
## Modifiers

Every effector property (except Color) has five modifiers: Noise, Wave, Elastic, Snap To, and Clamp. Each property has its own modifier settings. Modifiers stack.

<span id="noise-modifier"></span>
### Noise

Adds organic variation using AE's `noise()` function. Unlike Wave, Noise is non-repeating and framerate-independent.

- **Noise Amplitude** (per axis): amount of variation. Set to 0 to disable. Each axis is controlled separately.
- **Noise Mode** (per axis): Bidirectional (positive and negative variation) or Unidirectional (positive only).
- **Noise Seed**: changes the noise pattern. Each layer in the repeater gets a unique offset based on its index, so layers do not all move identically.
- **Noise Speed**: how fast the noise evolves over time.
- **Noise Loop Length**: number of frames for a seamless loop. Set to 0 to disable looping.

<span id="wave-modifier"></span>
### Wave

Adds a repeating wave pattern across layers. Each layer is offset along the wave based on its position in the repeater.

- **Wave Amplitude** (per axis): height of the wave. Set to 0 to disable.
- **Wave Type**: shape of the wave.
  - **Sine**: smooth curve.
  - **Triangle**: linear ramp up and down.
  - **Sawtooth**: ramps up then snaps back.
  - **Reverse Sawtooth**: snaps up then ramps down.
- **Wave Mode**: Bidirectional (wave swings positive and negative) or Unidirectional (positive only).
- **Wave Speed**: how fast the wave pattern moves over time.
- **Wave Length**: how many layers span one full wave cycle.
- **Wave Phase**: shifts the starting position of the wave.

<span id="elastic-modifier"></span>
### Elastic

Adds a spring bounce when the effector value changes. Based on damped harmonic oscillation.

- **Elastic** (checkbox): enable/disable. Off by default.
- **Amplitude**: multiplier for bounce strength.
- **Frequency**: oscillation speed in cycles per second.
- **Decay**: how quickly the bounce settles, in frames.

**Limitations:** Elastic does not work with Position Attract/Repel mode or Rotation Look At mode. Both modes recalculate values dynamically every frame, so there is no stable rest position for the spring. Elastic only works with Relative/Absolute modes.

<span id="snap-to-modifier"></span>
### Snap To

Snaps the output value to the nearest multiple of an increment.

- **Snap To** (per axis): the snap increment. Set to 0 to disable.
  - 90 snaps to right angles (useful for rotation).
  - 100 snaps to percentage steps (useful for scale).
  - Any pixel value snaps positions to a grid.

<span id="clamp-modifier"></span>
### Clamp

Limits the output value to a minimum or maximum. Clamp is applied after all other modifiers.

- **Clamp Min** (per axis): enable with the checkbox, then set the floor value.
- **Clamp Max** (per axis): enable with the checkbox, then set the ceiling value.

---

<span id="tracer-feature"></span>
## Tracer

The Tracer creates a shape layer that draws lines between repeated layers. The path expression updates live as layer positions change. Set stroke color, width, and dash settings directly in the shape layer properties.

### Adding a tracer

**Repeater tracer**: select one React Repeater null, then click Add Tracer. The tracer connects all layers in that repeater.

**Layer tracer**: select two or more layers in the order you want them connected. Do not include Repeater nulls. Click Add Tracer.

The resulting layer is called "React - Tracer 1" (or incrementing numbers for additional tracers).

### Line tracer

Used for Linear and Path repeaters, and for layer tracers. Connects layers in sequence as a single open path.

In the React - Tracer effect on the tracer layer:
- **Close Path**: closes the path by joining the last layer back to the first.

### Grid tracer

Used for Grid repeaters. Three path arrangements:

- **Grid**: connects layers in standard grid order.
- **Snake**: row-by-row path, alternating direction each row.
- **Zig Zag**: alternating direction without reversing.
- **Close Path**: closes the path.

For Grid repeaters with Z depth, the tracer creates two separate paths:
- One XY-face path per Z slice. The mode selector (Grid/Snake/Zig Zag) switches between arrangements.
- One continuous Z pillar path that snakes through all Z levels.

### Radial tracer

Used for Radial repeaters. Connects layers around the ring as a closed loop.

For Radial repeaters with Z depth, the tracer creates:
- One closed ring per Z level.
- One Z pillar path.

---

<span id="working-with-text-layers"></span>
## Text Layers

Select a single text layer before clicking any repeater button to use the Text Layer Repeater.

React duplicates the text layer as a guide layer (called "React - Text Source 1") and applies the React - Text effect. Each repeated layer displays a different portion of the source text. Edit the guide text layer and all repeated layers update live.

### React - Text effect controls

Select the guide text layer to see these controls.

**Repeater based on**: how to split the source text.

- **Letters**: each character becomes a separate layer, including spaces.
- **Letters (excluding spaces)**: each character, with spaces skipped.
- **Words**: splits at spaces.
- **Lines**: splits at paragraph breaks.

**Adjust Anchor Point**: shifts the anchor point of each text layer. Useful when the anchor is not centred on the character.

---

<span id="refresh-button"></span>
## Refresh

### Repeater Refresh

Select one React Repeater null, then click Refresh.

- If the Amount has changed, React adds or removes layers to match.
- If the Sorting mode has changed, React reorders the layers.
- `├` and `└` tree characters update if the layer order has been rearranged.

### Effector Refresh

Select one React Effector null and one or more properties from another layer, then click Refresh.

- React adds the selected properties to the existing effector.
- If the property belongs to a layer inside a repeater, the effector is applied to the same property on all layers in that repeater.
- **Hold Alt**: applies to the selected layer only.

---

<span id="delete-button"></span>
## Delete

Select one or more React Repeater or Effector nulls, then click Delete.

A dialog appears with three options:

- **No Baking**: removes all React expressions and layers. Properties return to their pre-React values.
- **Bake Current Frame**: captures the current value of each affected property as a static value, then removes React elements. The animation is not preserved.
- **Bake All Frames**: evaluates every frame and creates keyframes for the full animation, then removes React elements. This can take time on large compositions.

When deleting an Effector from a property that also has a Repeater, React removes only the Effector block. The Repeater expression is preserved.

When deleting one effector from a property controlled by multiple effectors, React measures that effector's contribution in isolation before baking. The remaining effectors continue to function correctly.
