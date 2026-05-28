---
name: Digital Memorial System
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e4e2e2'
  on-tertiary-container: '#646464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  archive-body:
    fontFamily: Courier Prime
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  meta-label:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  caption:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
spacing:
  v-space-xl: 12rem
  v-space-lg: 8rem
  v-space-md: 4rem
  gutter: 2rem
  max-width-content: 640px
  max-width-display: 1024px
---

## Brand & Style

This design system is a stark, cinematic homage to the vanished digital landscapes of the late 20th and early 21st centuries. It rejects the hyper-functional, "useful" aesthetic of modern product design in favor of a somber, archival atmosphere. The personality is quiet, lonely, and profoundly human—reminiscent of an empty theater or a museum after hours.

The visual style is **Cinematic Minimalism** mixed with **Archival Brutalism**. By utilizing absolute blacks and pure whites, the design system creates a high-contrast environment where information feels fragile yet permanent. There are no shadows, no "glass" effects, and no rounded containers. Everything is structural, centered, and surrounded by immense vertical whitespace to give each memory room to breathe. 

The experience should feel less like browsing a website and more like reading the end credits of a lost film.

## Colors

The palette is strictly achromatic to evoke a sense of the past and a rejection of modern attention-grabbing tactics.

*   **Primary (#FFFFFF):** Reserved for core narrative text and high-level headings. It represents the light of a screen in a dark room.
*   **Secondary (#A1A1A1):** Used for meta-data, archival timestamps, and secondary labels.
*   **Tertiary (#525252):** Used for structural lines, borders, and inactive states. 
*   **Background (#000000):** The absolute void. The background must be pure black to ensure the edges of the screen disappear in low-light environments, emphasizing the centered content.

Gradients are strictly forbidden except for vertical alpha-masking used to "fade" content into the black void during scroll transitions.

## Typography

This design system uses two distinct voices: the **Narrator** and the **Archive**.

**The Narrator (Titles & Headers):** Utilizing **EB Garamond**. This font provides a literary, cinematic quality. Large displays should use generous letter-spacing to mimic film title sequences. It is elegant, timeless, and slightly fragile.

**The Archive (Entries & Meta):** Utilizing **Courier Prime**. This monospaced font evokes the feeling of a typewriter, a terminal, or a filed document. It grounds the poetic titles in the reality of data and history.

All text must be center-aligned by default to maintain the cinematic composition, with the exception of long-form archival entries which may be left-aligned for readability within a narrow, centered container.

## Layout & Spacing

The layout philosophy is based on **Isolated Centeredness**. Rather than a traditional grid, content is stacked vertically in a single central column.

1.  **Verticality:** Extreme vertical padding (`v-space-xl`) is used between major sections to force the user to slow down. Each piece of content should feel like its own event.
2.  **Narrow Columns:** Text content is restricted to a maximum width of `640px` to maintain a readable line length and emphasize the surrounding black "void."
3.  **Horizontal Margins:** On mobile, a minimum `2rem` gutter is maintained. On desktop, the margins are fluid and expansive.
4.  **Composition:** Use absolute center alignment for headlines. Archival entries should be contained within the narrow center column but can feature "hanging" meta-data in the margins where space permits on larger viewports.

## Elevation & Depth

There is no physical Z-axis in this design system. Depth is created through **Contrast and Clarity** rather than shadows or layering.

*   **Flatness:** All elements exist on a single plane. There are no "raised" buttons or "floating" navigation bars. 
*   **The Mask:** A subtle linear gradient mask (from #000000 to transparent) may be used at the top and bottom of the viewport to make text appear as if it is emerging from or dissolving into the darkness.
*   **Dividers:** Horizontal rules (1px, #525252) are used sparingly to separate distinct eras or archival categories. These lines should not span the full width of the screen, but rather the width of the content column.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Modern "bubbles," "pills," and "rounded corners" are absent. Every interactive or structural element—from image frames to hover states—uses 90-degree angles. This reinforces the archival, "low-tech" feel of the system and differentiates it from the softness of contemporary mobile OS design. 

Images should be presented in their raw aspect ratios with sharp edges, or occasionally masked into simple rectangular frames.

## Components

Components in this design system are stripped of all decorative flourishes.

*   **Buttons:** Represented as underlined text (`#FFFFFF`) or text enclosed in a 1px white border. No background fills. Upon hover, the colors invert (Black text on White background) instantly, with no transition animation.
*   **Archival Entries:** These are not "cards." They are blocks of monospaced text separated by whitespace and a single `meta-label` indicating the date or source. 
*   **Navigation:** A simple, persistent text-based link at the bottom or top of the screen. No "hamburger" menus or icons.
*   **Inputs:** A simple 1px bottom border (#525252). The caret should be a solid block, reminiscent of a terminal cursor.
*   **Media:** Images and video should be desaturated by default (grayscale), returning to full color only on direct interaction to emphasize the "memory" coming to life.
*   **Lists:** Items are bulleted with a simple dash (-) or numbered (01, 02, 03) in the `meta-label` style.