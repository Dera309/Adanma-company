# Design System Specification: The Golden Standard

## 1. Overview & Creative North Star
This design system is built for a software engineering firm that balances high-performance logic with a premium, artisanal aesthetic. 

**Creative North Star: "The Digital Alchemist"**
The visual identity moves away from the sterile, "flat-white" tech look. Instead, it adopts an editorial, high-contrast atmosphere that feels like a premium luxury brand. We leverage the deep blacks and lustrous golds of the brand's identity to create a "Dark-Mode First" experience. The layout strategy breaks the rigid 12-column grid by using **Intentional Asymmetry**—where large-scale typography overlaps with high-depth containers, and breathing room is prioritized over information density.

---

## 2. Colors: Tonal Depth & Liquid Gold

The palette is not just a set of hex codes; it is a system of light and shadow.

### The Palette
*   **Background (Primary Void):** `#131313` (Surface)
*   **The Gold Core:** `#f2ca50` (Primary) for focus; `#d4af37` (Primary Container) for weight.
*   **The Tonal Grays:** `#353534` (Surface Variant) for secondary information.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for defining sections. Borders feel like "cages" and cheapen the premium tech feel. Boundaries must be defined by **Background Color Shifts**. For example, a `surface-container-low` section should sit directly against a `surface` background to denote a change in content without a hard line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers.
*   **Base:** `surface` (#131313)
*   **Level 1 (Sections):** `surface-container-low` (#1c1b1b)
*   **Level 2 (Cards):** `surface-container` (#201f1f)
*   **Level 3 (Pop-overs):** `surface-container-high` (#2a2a2a)

### The Glass & Gradient Rule
To give the "tech-forward" feel, use **Glassmorphism** for floating headers or navigation. Use the `surface` color at 70% opacity with a `20px` backdrop-blur. For primary CTAs, apply a subtle linear gradient from `primary` (#f2ca50) to `primary-container` (#d4af37) at a 135-degree angle to simulate the shimmer of real gold.

---

## 3. Typography: Editorial Authority

We use a dual-font approach to create a sophisticated, tech-forward hierarchy.

*   **Display & Headlines (Manrope):** This is our "signature" font. It is used for `display-lg` through `headline-sm`. It should be set with tight letter-spacing (-0.02em) to feel authoritative and modern. 
*   **Body & Labels (Inter):** The workhorse. Inter provides maximum legibility for technical descriptions. Use `body-lg` for lead paragraphs to maintain a premium feel.

**The Hierarchy Goal:** Use a massive scale contrast. A `display-lg` headline should tower over `body-md` text to create a sense of scale and importance common in high-end design journals.

---

## 4. Elevation & Depth: Tonal Layering

We avoid traditional "shadow-heavy" UI. Depth is achieved through **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Instead of a drop shadow, elevate an element by placing a `surface-container-highest` card on top of a `surface-container-low` background. The subtle shift in gray creates a natural "lift."
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be huge and soft. 
    *   *Blur:* 40px-60px
    *   *Opacity:* 6% 
    *   *Color:* Use a tinted gold-black (e.g., `#000000` mixed with a hint of `#f2ca50`).
*   **The "Ghost Border" Fallback:** If a border is required for accessibility on an input, use `outline-variant` (#4d4635) at 20% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons: The Kinetic Gold
*   **Primary (Gold):** Roundedness: `md` (0.375rem). Use the gold gradient mentioned in Section 2. Text should be `on-primary` (#3c2f00) and bold.
*   **Secondary:** Ghost style. No background, `primary` text, and a `Ghost Border` (10% opacity gold outline).
*   **Contact on WhatsApp:** This is a specialized Action CTA. Use a `surface-container-highest` background with a small, high-vibrancy green dot next to the WhatsApp icon to signify "Live Presence."

### Service Cards: The Inset Frame
*   **Style:** No borders. Use `surface-container-low`. 
*   **Interaction:** On hover, the card should transition to `surface-container-high` and the icon (in `primary` gold) should scale up by 5%.
*   **Spacing:** Large internal padding (2rem) to allow the technical copy to "breathe."

### Client Testimonials: The Quote Overlay
*   **Layout:** Use an asymmetrical layout. The quote text in `headline-sm` (Manrope) should be large, while the client name and "Software Engineer" title are small `label-md` (Inter).
*   **Visual Mark:** A large, 10% opacity Gold quotation mark as a background element behind the text.

### Inputs & Text Areas
*   **Style:** `surface-container-lowest` backgrounds. 
*   **States:** On focus, the `Ghost Border` increases to 50% opacity in `primary` gold. 

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins (e.g., a wider left margin than right) for hero sections to create a custom, editorial feel.
*   **Do** use "Gold Accents"—limit the use of `#f2ca50` to high-value interaction points (CTAs, Icons, Active States).
*   **Do** leverage high-quality photography with low-key lighting (dark backgrounds) to match the UI palette.

### Don't:
*   **Don't** use 100% white (#FFFFFF). Use `on-surface` (#e5e2e1) to prevent eye strain against the dark background.
*   **Don't** use standard dividers or horizontal rules. Use vertical space (e.g., 80px or 120px gaps) to separate sections.
*   **Don't** use rounded corners larger than `xl` (0.75rem) for cards; we want the system to feel sophisticated and "architectural," not bubbly.