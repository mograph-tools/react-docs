# React - Parametric Cloning for After Effects

<span id="overview"></span>
## Overview

React is a powerful After Effects extension that enables parametric cloning and dynamic animation effects. Create complex repeater patterns, apply sophisticated effectors, and build procedural animations with ease.

**Key Features:**
- 4 Repeater Types (Linear, Grid, Radial, Path)
- Effectors for any keyframeable property
- 4 Modifiers (Random, Step, Sticky, Elastic)
- Advanced Tools (Tracer, Refresh, Delete)

**Video Tutorial:** [Watch on YouTube](https://youtu.be/C8R-feavAv0)

---

<span id="installation"></span>
## Installation

React is a ZXP extension and should be installed using aescripts' ZXP installer:

**Installation Steps:**
1. Download React from [aescripts.com](https://aescripts.com/react/)
2. Install using [ZXP Installer](https://aescripts.com/learn/post/zxp-installer/)
3. Restart After Effects
4. Open: **Window → Extensions → React**

The React panel will appear in your After Effects workspace.

---

<span id="toolbar-interface"></span>
## Toolbar Interface

<div style="display: flex; gap: 12px; padding: 32px 20px; background: #e8e8e8; border-radius: 8px; flex-wrap: wrap; justify-content: center; margin: 32px 0;">
  <div style="width: 80px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 18px; font-family: 'Courier New', monospace;">123</div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <circle cx="5" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="14" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="23" cy="14" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
    </svg>
  </div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
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
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <circle cx="14" cy="3" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="6" cy="8" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="3" cy="17" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="11" cy="25" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="22" cy="20" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="25" cy="11" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
    </svg>
  </div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <path d="M 6 20 C 6 10, 13 11, 14 14 C 15 17, 22 18, 22 8" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="6" cy="23" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      <circle cx="22" cy="5" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
    </svg>
  </div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="10.5" fill="none" stroke="#8471FF" stroke-width="1.2"/>
      <line x1="14" y1="8" x2="14" y2="20" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="8" y1="14" x2="20" y2="14" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round"/>
    </svg>
  </div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <rect x="3.5" y="3.5" width="21" height="21" fill="none" stroke="#8471FF" stroke-width="1.2"/>
      <line x1="3.5" y1="10.5" x2="24.5" y2="10.5" stroke="#8471FF" stroke-width="1.2"/>
      <line x1="3.5" y1="17.5" x2="24.5" y2="17.5" stroke="#8471FF" stroke-width="1.2"/>
      <line x1="10.5" y1="3.5" x2="10.5" y2="24.5" stroke="#8471FF" stroke-width="1.2"/>
      <line x1="17.5" y1="3.5" x2="17.5" y2="24.5" stroke="#8471FF" stroke-width="1.2"/>
    </svg>
  </div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <path d="M25.6 11C24.8 7.1 20.6 2 14 2S2 7.4 2 14 7.4 26 14 26s9.8-4.8 10.6-6.4M26.3 3 26.3 11 18.3 11" fill="none" stroke="#8471FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div style="width: 56px; height: 56px; background: #2a2a2a; border: 1px solid rgba(132, 113, 255, 0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
    <svg width="28" height="28" viewBox="0 0 28 28">
      <circle cx="14" cy="14" r="11.67" fill="none" stroke="#EC5E5E" stroke-width="1.2"/>
      <line x1="9.33" y1="9.33" x2="18.67" y2="18.67" stroke="#EC5E5E" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="18.67" y1="9.33" x2="9.33" y2="18.67" stroke="#EC5E5E" stroke-width="1.2" stroke-linecap="round"/>
    </svg>
  </div>
</div>

The React toolbar provides all the controls you need to create parametric cloning systems in After Effects.

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 60px; height: 42px; background: #2a2a2a; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #999; font-size: 14px; font-family: 'Courier New', monospace; flex-shrink: 0;">123</div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Text Input Box</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Enter the amount of layers. For Grid, separate X & Y values with x, *, -, comma or space. For example: 5x4, 5*4, 5-4, 5,4 or 5 4.</p>
    </div>
  </div>
</div>

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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat in a line. Enter the amount of repeated layers in the text input box.</p>
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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat in a grid. Enter the amount of repeated layers in the text input box. Separate X & Y values with x, *, -, comma or space. For example: 5x4, 5*4, 5-4, 5,4 or 5 4.</p>
    </div>
  </div>
</div>

<div style="background: white; border: 1px solid #e0e0e0; border-radius: 6px; padding: 20px; margin: 24px 0;">
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="width: 42px; height: 42px; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
      <svg width="28" height="28" viewBox="0 0 28 28">
        <circle cx="14" cy="3" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="6" cy="8" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="3" cy="17" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="11" cy="25" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="22" cy="20" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
        <circle cx="25" cy="11" r="3" fill="none" stroke="#00c4ff" stroke-width="1.2"/>
      </svg>
    </div>
    <div>
      <h3 style="margin: 0 0 8px 0; font-size: 18px; color: #303030;">Radial Repeater</h3>
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat in a circle. Enter the amount of repeated layers in the text input box.</p>
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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Select one or more layers, then press to repeat along a path. A popup will appear where you can either select an existing path layer or create a new straight line or bezier path. Enter the amount of repeated layers in the text input box.</p>
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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Add an Effector to one or more selected properties. Layer property in a repeater? Select just one property to apply it to the same properties in the repeater. Or hold ALT to apply to the selected layer only.</p>
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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">There are two ways to apply a Tracer:<br><br>1) Repeater Tracer - Select one React - Repeater layer and press the Add Tracer button to apply to all layers assigned to that repeater.<br><br>2) Layer Tracer - In order, select more than one layer and press the Add Tracer button to apply to those layers. Do not include any React - Repeater layers in your selection.</p>
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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">There are two ways to use the Refresh button:<br><br>1) Repeater Refresh - Select one React - Repeater layer only and press Refresh. The X + Y amount and the sorting mode will update, if changes have been made. ├ and └ will also update if layer order has been changed.<br><br>2) Effector Refresh - Select one React - Effector layer, along with one or more properties from another layer. Press Refresh to add the new property to that effector. If the selected property is from a layer in a repeater, the effector will be applied to every property in that repeater. Hold Alt to apply to the selected layer only.</p>
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
      <p style="margin: 0; font-size: 14px; color: #4a4a4a; line-height: 1.6;">Remove React effects and layers while preserving your animation through keyframe baking.<br><br><strong>Bake Current Frame:</strong> Select a React Repeater or Effector null and click Delete. Choose "Current Frame Only" to remove the React elements while preserving the current state. This is useful for finalizing a static composition.<br><br><strong>Bake Animation:</strong> Choose "Process Every Frame" to convert the entire animation to keyframes. This may take time for complex animations but results in optimized keyframes with improved performance. All expressions are converted to keyframes and React elements are removed.</p>
    </div>
  </div>
</div>

---

<span id="repeaters"></span>
## Repeaters

### Setting up a repeater

Click any of the repeater buttons to set up a repeater.

A Repeater null is created each time a repeater button is clicked. As well as changing position, scale and rotation for the repeater, there is also an effect on this null which affects amount, spacing and sorting modes, as well as a few other things.

Select your layer or layers that you want to be repeated before clicking. Or leave your layers unselected to create nulls that will then be used in the repeater.

Selecting two or more layers will result in them iterating through the repeater by default. Change the sorting mode by clicking on the Repeater null, changing the Sort mode and clicking the Refresh button in the React toolbar.

<span id="setting-repeater-amounts"></span>
### Setting the amount of repeated layers

To set the amount of layers in a repeater, there are a few options:

1. Enter a number in the text input field before clicking the repeater button. For the grid repeater, you can use just 1 number if you want the same amount in X and Y. Separate two numbers with a space, comma, *, - or _ to input X and Y values. For the linear, radial and path repeaters, just the first number in the text input field will be used.
2. Create a repeater first. Then select the Repeater null and change the amount. Layers will update automatically, however you may need to press the Refresh button in the React toolbar to add or remove layers from the repeater.
3. Leave the text input field blank and default values will be used. These can be changed in the Preferences menu.

### Repeater Settings

Each of the repeaters behave in similar ways.

Select the Repeater null and you will see the repeater controls in the Effects panel.

#### Amount

Change the amount of layers in the repeater. Layers will update automatically, however you may need to press the Refresh button in the React toolbar to add or remove layers from the repeater.

#### Spacing/Radius

Change the amount of spacing between layers in the repeater. Or the radius of the circle for radial repeaters.

You can also change the spacing of the repeater by changing the Repeater null's scale.

#### Repeat from

There are two options - Centre or First Layer. This determines the anchor point of the repeater and how spacing affects the layers. Selecting Centre will change the positions of the repeater layers so that the repeater null is in the centre. Alternatively, selecting First Layer will place the repeater null in the same position as the first layer.

<span id="sorting-modes"></span>
#### Sorting

For repeaters using two or more different layers, you may want to change the sorting mode.

Select from the dropdown then press the Refresh button to update.

**Iterate** arranges layers in sequential order. For example, if there are 3 different layers in a repeater, they would be arranged like this - 1, 2, 3, 1, 2, 3, 1, 2, 3

**Cluster** groups the same layers into groups. For example, for 3 different layers in a repeater, they would be arranged like this - 1, 1, 1, 2, 2, 2, 3, 3, 3

**Random** arranges layer randomly. Press the Refresh button multiple times to give different random arrangements.

**Rows and Columns (Grid only)** arranges layers into rows or columns. This will only work for grid repeaters.

Remember to press Refresh after updating the sorting mode.

<span id="linear-repeater"></span>
### Linear Repeater

Arranges layers in a line.

<span id="grid-repeater"></span>
### Grid Repeater

Arranges layers in a grid shape.

The Honeycomb Offset control allows you to change the X position of every other row.

<span id="radial-repeater"></span>
### Radial Repeater

Arranges layers in a circle shape.

The radial and path repeaters have trim settings, which affect the positioning of layers on the circle or path. **Start** and **End** settings change where the first or last layers are positioned and updates the layers between accordingly. With **Loop** enabled, layers can be looped across the circle or path seamlessly by changing the **Offset** setting. With **Loop** disabled, layers are constricted to the start and end points of the circle or path.

<span id="path-repeater"></span>
### Path Repeater

There are two ways to set up a path repeater - select path or create path.

Click the path repeater button and a dialog window will appear.

**Select Path** - With the dialog window open, select an existing path in your composition (ensure the path is selected, not the layer). Then click **Select Path**

**Create Path** - Again, with the dialog window open, select how many points you'd like the new path to have and whether the points should be bezier. Then click **Create Path.** The new path will run left to right be default, however you can change the path in the same way you normally would.

The path repeater also has trim settings, which are explained in the radial repeater above.

---

<span id="effectors"></span>
## Effectors

Effectors can be used to change property values across many layers.

In React 2, you can now apply effectors to almost any property in After Effects.

### Adding an effector

Select any layer property (or properties) that accepts keyframes. This could be position, scale, rotation, opacity, color, start, end, for example.

Then, press the **Add Effector** button.

If the property is part of a layer within a repeater, the effector will be added to every layer within that repeater. For example, to add an effector to the position property of all layers in a grid repeater, we only need to select one position property, not all of them. This makes the process of selecting properties much quicker.

Perhaps a layer is within a repeater but you don't want the effector to be added to all the properties? That's fine, just hold ALT when clicking the **Add Effector** button.

You can also select more than one property (for example, scale and opacity).

### Effector Settings

After clicking the **Add Effector** button, two new layers will appear. One is the Effector null, which controls all the settings, and the other is the guide, which is for falloff visualisation (this only appears in the composition window when Falloff Shape is not Off)

Depending on the amount of properties selected, you will see at least two effects on the Effector null - the **React - Effector** effect (which are the main effector controls) and the property effect (for example, **React - Effector | Position**, which control that property within an effector ).

#### React - Effector

These are the main controls for the effector and work the same no matter which property has been selected.

**Amount** controls the amount of effect the effector controls have. It is set to 100% by default.

<span id="falloff"></span>
Under **Falloff**, we can control whether the effector uses a proximity falloff, which shape to use and the size of the falloff. By default, **Shape** is set to Off. Select Circle, Box or Linear to see a visualisation in the comp window. Change the falloff position, scale and rotation by moving and scaling the Effector null. As well as changing the null scale, you can also use **Size**.

**Hold** affects the falloff sharpness is set to 50% by default. When set to 0%, there is a gradual change, with very few properties reaching maximum effector values. When set to 100%, there is an immediate change, with all properties reaching maximum effector values within the falloff.

Under **Animation**, we can change to In, In & Out or Inverse, which reverses the effector. We can also change the **Easing** - by default, Ease In & Out is selected. There are options for Linear, Ease In, Ease Out, Ease In & Out and Custom.

If **Custom Easing** is selected, use the settings here to tune the easing. It's worth playing with these settings to understand how they work. Imagine a graph similar to the Curves effect in After Effect - Ease In - X and Y moves the lower left point, Ease Out - X and Y moves the upper right point.

### Effector Property Controls

The second effect on the Effector null is the effector property controls, which control individual properties (position, scale, opacity, for example) within the effector.

If you have selected more than one property before clicking **Add Effector**, each property will have it's own effect controls here.

Each property has a type. It could be a 3D, 2D or 1D value, or a color value. For example, the position property is a 3D value (when the layer is 3D) and opacity is a 1D value. React will apply the relevant effector property control to a property.

With the exception of the Color effector controls, most of the controls have similar functionality and modifiers. However, there are some special cases - position, scale, rotation and color.

<span id="position-effector"></span>
#### React - Effector | Position

**Mode** allows you to select from the two modes within the position effector - Relative/Absolute and Attract/Repel.

In **Relative/Absolute** mode, use the corresponding dropdown to change the settings in X, Y and Z. You can set each dimension to be relative to the layer's current position or absolute position.

In **Attract/Repel** mode, use the corresponding dropdown to change the target (by default, it is set to the effector null). Change the **Attract/Repel** setting to either attract layers (negative values) to the target layer, or repel (positive values). You can also modify this per X and Y dimension by setting the **X - Multiplier** and **Y - Multiplier**.

#### React - Effector | Scale

**Uniform Scale** is enabled by default. Disable it to affect scale on individual dimensions.

Change the settings in X, Y and Z. You can set each dimension to be relative to the layer's current position or absolute position.

<span id="rotation-effector"></span>
#### React - Effector | Rotation

**Mode** allows you to select from the two modes within the rotation effector - Relative/Absolute and Look At.

In **Relative/Absolute** mode, use the corresponding dropdown to change the settings in X, Y and Z. You can set each dimension to be relative to the layer's current rotation or absolute rotation. The X and Y settings will only affect 3D layers.

In **Look At** mode, use the corresponding dropdown to change the target (by default, it is set to the effector null). Change the **Offset** setting to offset the rotation value.

<span id="color-effector"></span>
#### React - Effector | Color

**Color Mode** allows you to select from the three modes within the color effector - Single Color, HSL and Multiple Colors.

In **Single Color** mode, use the corresponding dropdown to set the effector color.

In **HSL** mode, use the corresponding dropdown to change the hue, saturation and lightness settings.

In **Multiple Colors** mode, use the corresponding dropdown to set how many colors to use by enabling the checkbox. You can use up to 10 different colors. Then, set the color. Use the **Order** dropdown to set color sorting - Iterate, Blend or Random. With Blend selected, use **Blend - Loop Length** to set the end point of the blend loop, based on the number of layers. With random selected, use **Random - Seed**, **Random - Evolution** and **Random - Evolution Step** to adjust the randomness of the colors.

---

<span id="modifiers"></span>
## Modifiers

With the exception of **React - Effector | Color**, each effector has the same four modifiers - Random, Step, Elastic and Sticky.

<span id="random-modifier"></span>
### Random Modifier

To add randomness to any effector:

1. Select the Effector null
2. In Effect Controls panel, expand the property section
3. Locate "Random" modifier and enable it
4. Adjust settings:
   - Amount: Set the maximum random variation
   - Seed: Change for different random patterns
   - Evolution: 0-360 degrees for animation
   - Evolution Steps: Reduce for fewer changes in loop
5. For perfect loops:
   - Set Evolution to 360
   - Adjust Evolution Steps (lower = fewer changes)

<span id="step-modifier"></span>
### Step Modifier

To create progressive changes based on layer order:

1. Select the Effector null
2. In Effect Controls, expand property section
3. Enable "Step" modifier
4. Adjust the Step value:
   - Positive: Increases effect with each layer
   - Negative: Decreases effect with each layer
5. Note: First layer (index 0) multiplies by 0, last layer by maximum index

<span id="sticky-modifier"></span>
### Sticky Modifier

To snap values to increments:

1. Select the Effector null
2. In Effect Controls, expand property section
3. Enable "Sticky" modifier
4. Set the increment value:
   - For rotation: 90 for right angles
   - For position: Whole numbers for grid alignment
   - For scale: Common percentages (like 100)

---

<span id="tracer-feature"></span>
## Tracer Feature

To add a tracer to repeated elements:

1. Select your React Repeater null
2. Click the Add Tracer button
3. A new shape layer "React Tracer 1" appears
4. In Effect Controls for the tracer:
   - Toggle "Close Path" for closed shapes
   - Adjust "Trim Paths" for animation
   - Set stroke color and width in layer properties

For Grid Controls:

1. Select the Tracer layer
2. In Effect Controls, find "Grid Controls"
3. Choose pattern type:
   - Grid: Standard grid pattern
   - Snake: Continuous line through grid
   - Zigzag: Alternating direction pattern
4. Adjust stroke settings in layer properties:
   - Color
   - Width
   - Dash patterns if desired

---

<span id="working-with-text-layers"></span>
## Working with Text Layers

To set up text repeaters:

1. Create or select a text layer
2. Click any repeater button (Grid, Linear, or Radial)
3. In the React Repeater effect controls:
4. Find "Text Source" dropdown
5. Choose splitting method:
   - Letters: Each character becomes separate
   - Letters excluding spaces: Ignores whitespace
   - Words: Splits at spaces
   - Lines: Splits at line breaks
6. The grid updates automatically while typing

To add effects to repeated text:

1. Must add repeater first
2. Select text property to affect
3. Click Add Effector
4. Adjust effects as normal

---

## Utility Functions

<span id="refresh-button"></span>
### Refresh Button

For Repeaters:

1. Select React Repeater null
2. Change amounts or arrangement
3. Click Refresh button
4. Choose "Refresh Repeater" if prompted
5. Wait for new layers to generate

For Effectors:

1. Select existing Effector null
2. Hold Ctrl/Cmd and select new properties
3. Click Refresh button
4. Choose "Refresh Effector" if prompted
5. New properties are added to effector

<span id="delete-button"></span>
### Delete Button

To bake current frame:

1. Select React Repeater or Effector null
2. Click Delete button
3. Choose "Current Frame Only"
4. Wait for processing
5. React elements are removed, current state is preserved

To bake animation:

1. Select React Repeater or Effector null
2. Click Delete button
3. Choose "Process Every Frame"
4. Wait for processing (may take time)
5. When finished:
   - React elements removed
   - Optimized keyframes created
   - Expressions converted to keyframes
   - Improved performance

---

We hope you enjoy using React 2!
