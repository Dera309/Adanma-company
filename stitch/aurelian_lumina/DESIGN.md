# Design System Specification: The Engineering of Light

## 1. Overview & Creative North Star: "The Architectural Atelier"
This design system is a departure from the generic, card-heavy "SaaS" look. Our Creative North Star is **The Architectural Atelier**. We are designing a digital environment that feels like a high-end engineering firm’s physical office: expansive white surfaces, technical precision, and the warmth of premium materials.

We achieve this by breaking the "template" look through:
*   **Intentional Asymmetry:** Avoid perfectly centered layouts. Use wide margins and offset headers to create an editorial, high-end feel.
*   **Tonal Presence:** We replace lines with light. By using a sophisticated palette of greys and whites, we define space through "weight" rather than "containers."
*   **The Gold Thread:** The signature gold (#D4AF37) is never used for background fills of large areas. It is a precision tool—a "gold thread" that highlights critical actions and data points against the high-contrast light background.

---

## 2. Colors: Tonal Engineering
In this system, color is used to denote structural hierarchy. We move beyond "background vs. foreground" into a multi-layered light environment.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. Boundaries must be defined solely through background color shifts. A `surface-container-low` section sitting on a `surface` background is our primary method of separation.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tokens to create "nested" depth:
*   **Base Layer:** `surface` (#f7f9ff) – The primary canvas.
*   **Submerged:** `surface-container-low` (#f1f4f9) – For secondary content areas or sidebars.
*   **Elevated Card:** `surface-container-lowest` (#ffffff) – This provides the highest contrast against the off-white base, creating a natural "pop."
*   **Interaction Layer:** `surface-container-high` (#e6e8ee) – For elements that need to feel physically closer to the user.

### The "Glass & Gold" Rule
For floating elements (modals, dropdowns), use **Glassmorphism**. Apply a semi-transparent `surface` color with a `20px` backdrop-blur. 
*   **Signature Textures:** For Hero CTAs, use a subtle linear gradient: `primary` (#735c00) to `primary-container` (#d4af37) at a 135-degree angle. This prevents the gold from looking "flat" and adds a metallic, machined luster.

---

## 3. Typography: Technical Elegance
We use **Manrope** exclusively. It is a geometric sans-serif that feels both human and engineered.

| Level | Size | Weight | Role |
| :--- | :--- | :--- | :--- |
| **display-lg** | 3.5rem | 800 | Large editorial statements. Use sparingly. |
| **headline-md** | 1.75rem | 700 | Section entry points. |
| **title-lg** | 1.375rem | 600 | Item titles and card headers. |
| **body-lg** | 1rem | 400 | Primary reading text. Increased line-height (1.6). |
| **label-md** | 0.75rem | 700 | Technical metadata. Always Uppercase with 0.05em tracking. |

**Hierarchy Note:** Use `on-surface-variant` (#4d4635) for secondary text and `on-surface` (#181c20) for primary headings to maintain a sophisticated, low-fatigue contrast ratio.

---

## 4. Elevation & Depth: Tonal Layering
We reject the heavy drop-shadows of the early 2010s. Depth is achieved through "stacking" and "ambient light."

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural lift without a single pixel of shadow.
*   **Ambient Shadows:** For floating menus, use a "Cloud Shadow": 
    *   `box-shadow: 0 24px 48px -12px rgba(24, 28, 32, 0.06);`
    *   The shadow is never black; it is a tinted version of `on-surface`.
*   **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use `outline-variant` (#d0c5af) at **15% opacity**. It should be felt, not seen.

---

## 5. Components: The Signature Kit

### Buttons (The Precision Tool)
*   **Primary:** Fill with the Gold Gradient (`primary` to `primary-container`). Text is `on-primary` (#ffffff). Shape: `Round Four` (1rem).
*   **Secondary:** Ghost style. No fill. `outline` (#7f7663) at 20% opacity. Text is `on-surface`.
*   **Tertiary:** Text-only. `label-md` styling. The icon (if present) uses `primary`.

### Cards & Lists
*   **Forbid dividers.** Use `32px` of vertical white space to separate list items. 
*   **Interactive Cards:** On hover, do not use a shadow. Instead, shift the background color from `surface-container-lowest` to `surface-container-highest`.

### Input Fields
*   **The Technical Field:** Use `surface-container-low` as the fill. No border. On focus, a 2px bottom-border of `primary` (#735c00) slides in from the center. This mimics a professional drafting table aesthetic.

### Additional Component: The "Data Blueprint" (Table/Grid)
*   When displaying engineering data, use `label-sm` for all values. Use a `surface-variant` (#e0e2e8) vertical strip (2px wide) to the left of active rows rather than highlighting the whole row background.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace negative space. If a layout feels "empty," it is likely working.
*   **Do** use asymmetrical margins (e.g., 10% left margin, 5% right margin) for editorial pages.
*   **Do** use `primary-fixed-dim` (#e9c349) for subtle highlights in technical charts.

### Don't:
*   **Don't** use 1px solid black or dark grey borders. This destroys the premium feel.
*   **Don't** use pure #000000 for text. Use `on-surface` (#181c20).
*   **Don't** use standard Material Design "elevated" FABs. Keep elements grounded in the surface hierarchy.
*   **Don't** use "Safety Orange" or "Blue" for links. Use the Gold Primary for all interactive calls to action.