# Design Ideas for Allison Cassing UXR Portfolio

## Context
UX Researcher portfolio. The PDF uses a dark navy left panel + white right panel split layout with a warm beige diagonal accent line, serif headings, and clean sans-serif body text. The site should feel professional, analytical, and human — not flashy.

---

<response>
<text>

## Idea A — Editorial Rigor (Probability: 0.08)

**Design Movement:** Swiss International Typographic Style meets editorial journalism

**Core Principles:**
1. Text as the primary visual element — typography does the heavy lifting
2. Strict vertical rhythm and baseline grid
3. Contrast through weight and scale, not color
4. Restraint: every element earns its place

**Color Philosophy:**
Near-monochromatic. Off-white (#F7F5F0) background, near-black (#1A1A1A) text, a single warm sand accent (#C9A96E) used sparingly for rules, labels, and hover states. The warmth of the sand echoes the PDF's diagonal accent line and signals human-centered work without being decorative.

**Layout Paradigm:**
Asymmetric editorial grid. A narrow left column (20%) holds section labels and metadata in small caps, while the main content occupies the remaining 80%. Projects are listed as numbered entries in a dense, scannable table-of-contents style, expanding inline on click.

**Signature Elements:**
- Thin horizontal rules (1px) in sand color separating sections
- Section labels in small-caps, letter-spaced, at 11px — a nod to academic citation style
- Large display numerals (01, 02, 03…) in a light weight as project counters

**Interaction Philosophy:**
Minimal. Hover reveals a subtle underline. Project cards expand in-place (accordion) rather than navigating away. No decorative animations — only functional transitions (200ms ease-out).

**Animation:**
Fade-in on scroll for each section (opacity 0→1, translateY 12px→0, 400ms). No parallax, no bounce.

**Typography System:**
- Display/Headings: Playfair Display, Bold — for project titles and hero name
- Body: DM Sans, Regular/Medium — clean, slightly geometric, pairs well with Playfair
- Labels/Meta: DM Sans, 11px, letter-spacing 0.12em, uppercase

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Idea B — Warm Research Studio (Probability: 0.07)

**Design Movement:** Contemporary research studio aesthetic — think IDEO, Frog Design, or a thoughtful academic lab

**Core Principles:**
1. Warmth and approachability without sacrificing rigor
2. Generous whitespace as a signal of confidence
3. The diagonal motif from the PDF becomes a structural device
4. Content hierarchy through spatial separation, not visual noise

**Color Philosophy:**
Warm off-white (#FAF8F4) background. Deep navy (#2C3A52) as the primary dark tone — directly from the PDF. Warm sand/tan (#C4A882) as the accent — the diagonal line color from the PDF. Muted slate (#6B7A8D) for secondary text. This palette feels considered and trustworthy.

**Layout Paradigm:**
Full-width sections with alternating light/dark backgrounds. The hero uses the navy-left / white-right split from the PDF. Projects are displayed as large horizontal cards with a dark left strip (navy) containing the title and a light right area with details — mirroring the PDF slide layout directly.

**Signature Elements:**
- The diagonal line motif (thin, sand-colored, angled ~15°) as a decorative separator between hero sections
- Project cards that echo the PDF's split-panel layout
- A subtle dot-grid texture on the navy sections (very low opacity) for depth

**Interaction Philosophy:**
Purposeful hover states: project cards lift slightly (box-shadow) and the left navy strip darkens. Smooth scroll navigation. A sticky top nav that transitions from transparent to navy on scroll.

**Animation:**
Entrance animations on scroll: cards slide in from the left (translateX -24px → 0, 500ms ease-out). Section headings fade up. The diagonal line draws itself on first load (SVG stroke-dashoffset animation).

**Typography System:**
- Display: Cormorant Garamond, SemiBold — elegant serif for name and section titles
- Body: Source Sans 3, Regular — highly readable, neutral, professional
- Accent labels: Source Sans 3, 600 weight, navy color

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Idea C — Analytical Clarity (Probability: 0.06)

**Design Movement:** Data-informed minimalism — the aesthetic of a well-designed research report

**Core Principles:**
1. Information architecture is the design
2. Structured scanning: users should be able to skim and dive
3. Subtle data-visualization motifs (grids, axes, annotations) as decoration
4. Professional credibility over personality

**Color Philosophy:**
Crisp white (#FFFFFF) with a cool light gray (#F2F4F7) for alternating section backgrounds. Deep slate-blue (#2E3A59 — from PDF) for headings and nav. A warm amber (#D4A853) as the single accent for highlights, tags, and CTAs. The amber creates energy without warmth-overload.

**Layout Paradigm:**
Three-column grid on desktop. Projects displayed as cards in a 2-up grid. The case study gets a full-width treatment with a timeline/phase visualization. A persistent left sidebar on the case study page shows section navigation.

**Signature Elements:**
- Thin grid lines (0.5px, very light gray) as a background texture on hero section — suggests data and rigor
- Phase indicators (Phase 1, Phase 2, Phase 3) styled as labeled axis markers
- Tags/chips for research methods (Qualitative, Quantitative, Usability Testing, etc.)

**Interaction Philosophy:**
Functional and fast. Hover on project cards shows a brief excerpt. Tags are filterable. The case study has a reading progress bar at the top.

**Animation:**
Counter animations for any numbers (e.g., "20 interviews", "25 participants"). Subtle stagger on card grid entrance. Progress bar fills on scroll.

**Typography System:**
- Headings: Libre Baskerville, Bold — authoritative serif
- Body: IBM Plex Sans, Regular — technical, clean, slightly clinical in a good way
- Code/data labels: IBM Plex Mono, for phase labels and method tags

</text>
<probability>0.06</probability>
</response>

---

## Selected Approach: **Idea B — Warm Research Studio**

This approach most faithfully translates the PDF's visual language into a web experience. The navy/white split, the diagonal accent, and the warm sand palette are all drawn directly from the source material, giving Allison's site a sense of intentional continuity with her existing work. The layout paradigm of horizontal project cards mirroring the PDF slide format creates immediate visual recognition.
