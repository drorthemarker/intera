Here is your **Ultimate Antigravity IDE Mega-Prompt**. It includes all exact file paths, the update from 4 to 5 catalogs, the exact logic for images, and the strict instructions to use your seed file.

### Copy everything below this line and paste it into Google Antigravity IDE:

***

**System Role:** You are an elite Senior Full-Stack Web Developer and UX Architect. You are building a high-end, premium B2B architectural website for "INTERA CABINET DOORS" targeting the US market. The design must be minimalist, light-mode, and load lightning fast. 

**CRITICAL INSTRUCTION - THE DESIGN SEED FILE:**
I have provided an `index.html` file in the workspace. **This file is the Master Design System.** You must extract all CSS variables, typography (`Inter`), responsive `@media` queries, padding math, and ADA-compliant focus states from this file. Do NOT alter the visual aesthetic, the alternating `#fff` / `#f9f9f9` section backgrounds, or the `<style>` block rules established in this file. Extend this exact CSS to all new pages.

**Data & Asset Mapping (Local File Structure):**
You must pull all copy, images, and videos from the exact local directories specified below. 
*   **General Copy Guide:** `C:\Users\dror_\Desktop\interetz site\INTERA_Content_Master.docx`
*   **Brand Assets:** `C:\Users\dror_\Desktop\interetz site\logo and favicon` (Use for header logo and site favicon).

**Global Technical Directives:**
1.  **Mobile-First & Art Direction:** The site MUST look flawless on mobile. Use the HTML5 `<picture>` element to serve optimized dimensions (Desktop: wide/vertical, Mobile: square/horizontal). Implement the Vanilla JS Hamburger menu.
2.  **ADA WCAG 2.2 AA Compliance Natively:** Include `aria-labels`, semantic HTML, and `tabindex`. 
3.  **US B2B SEO Strategy:** Target keywords: `"Luxury custom cabinet fronts"`, `"Cabinet doors B2B USA"`. Include the B2B IKEA pivot: *"Precision-engineered for European frameless cabinetry, offering seamless compatibility with the IKEA SEKTION system."*

**Execution Plan (Divide output into the following 8 Tasks):**

**TASK 1: Update the Homepage (`index.html`)**
Using the provided seed file, make the following dynamic data connections:
*   **Hero JS Auto-Slider (4 Images):** Link to:
    1. `C:\Users\dror_\Desktop\interetz site\product\SHAKER\ANCHO\Reconstructed Walnut Veneer ANCHO (2).png`
    2. `C:\Users\dror_\Desktop\interetz site\product\METAL\Rusted Iron (2).png`
    3. `C:\Users\dror_\Desktop\interetz site\product\HANDELS\H3730ST10 FINO (2).jpg`
    4. `C:\Users\dror_\Desktop\interetz site\product\flat\H1385ST40 FLAT.jpg`
*   **Products Teaser:** Pull images from `C:\Users\dror_\Desktop\interetz site\product` ending in `_main`.
*   **Catalog Teaser (CRITICAL UPDATE):** Update the UI from 4 catalogs to **5 catalogs**. Update the CSS grid (e.g., `.grid-5`) to fit 5 items. Pull data from `C:\Users\dror_\Desktop\interetz site\catalog\[Category]\main`. The main image displays first; the 4 JS hover-slider swatches underneath are pulled from `\sub main`, with text from the accompanying `.txt` file.

**TASK 2: Generate PRODUCTS Pages (4 Main + Inner Routing)**
*   **Source:** `C:\Users\dror_\Desktop\interetz site\product`. Note: `shaker` contains subfolders. 
*   **Logic:** Generate individual pages for Flat, Shaker, Handles, and Specials. Use the `_text.txt` file in each folder for the copy. 
*   **Design:** 50vh macro-image header. Technical copy. A grid of the inner products.

**TASK 3: Generate CATALOG Pages (5 Pages)**
*   **Source:** `C:\Users\dror_\Desktop\interetz site\catalog`
*   **Logic:** Create 5 separate material library pages. 
*   **UX Feature:** Render a CSS Grid of swatches. Clicking a swatch MUST open a Vanilla JS "Quick View" Lightbox modal showing the high-res image. Do not route to a new page for individual colors.

**TASK 4: Generate OUR APPLICATION Page (`application-page.html`)**
*   **Source:** `C:\Users\dror_\Desktop\interetz site\app`
*   **Header:** "Intelligent Application for Precision Ordering".
*   **Layout:** Vertical workflow using specific images and translated text:
    1. `color picker.png` - Text: "Color Selection by Advanced Parameters"
    2. `order table.png` - Text: "Front Ordering to Exact Specifications"
    3. `hinges.png` - Text: "Precise Hinge Boring Selection"
    4. `drawers.png` - Text: "Precise Drawer Drilling Selection"
    5. `claps.png` - Text: "Precise Lift-System (Flap) Drilling Selection"

**TASK 5: Generate PROJECTS Pages (Main Gallery + Inner Pages)**
*   **Source:** `C:\Users\dror_\Desktop\interetz site\projects`.
*   **Logic:** The main `projects.html` page is a high-end masonry gallery. Pull ONLY the images ending with `_main` from each subfolder. 
*   **Inner Pages:** Clicking a `_main` image opens a dedicated inner project page containing the rest of the images from that folder, using the `.txt` file matching the project name as the description.

**TASK 6: Generate OUR STORY Page (`story-page.html`)**
*   **Source:** `C:\Users\dror_\Desktop\interetz site\our story`. (Videos and matching `.txt` files for titles).
*   **Performance Logic:** Do NOT load `<video>` elements on initial page load. Display static thumbnail images with a CSS play button overlay. Clicking the image opens an ADA-compliant modal containing the `<video>` element set to `autoplay` and `controls`. This ensures maximum site efficiency.

**TASK 7: Generate ABOUT & CONTACT Pages**
*   **Source:** `C:\Users\dror_\Desktop\interetz site\about` (Team images and text).
*   **About Page Layout:** Team image header + text. **Requirement:** Build a modular CSS grid placeholder section specifically designed to easily accommodate future management/staff headshots. 
*   **Contact Page Layout:** A B2B "Smart Form" with a `<select>` asking "I am a..." (Architect/Contractor).

**TASK 8: Generate Legal / ADA Pages**
*   **Accessibility Statement (`accessibility.html`):** Draft a formal statement confirming WCAG 2.2 AA and ADA Title III compliance based on the native HTML semantics and ARIA tags used in the site build.
*   **Privacy Policy:** Draft standard US CCPA cookie collection policies.

**Initiate execution sequentially. Start by confirming ingestion of the seed `index.html` design system.**


### Translations for the App Page (B2B English):
Before generating the prompt, here are the professional architectural translations for your Hebrew text. The AI will use these:
*   *Header:* "Intelligent Application for Precision Ordering"
*   *Img 1:* "Color Selection by Advanced Parameters"
*   *Img 2:* "Front Ordering to Exact Specifications"
*   *Img 3:* "Precise Hinge Boring Selection"
*   *Img 4:* "Precise Drawer Drilling Selection"
*   *Img 5:* "Precise Lift-System (Flap) Drilling Selection"

---