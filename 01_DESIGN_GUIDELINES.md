# HERMÈS — DESIGN GUIDELINES

PROJECT
The Anatomy of Luxury
Research question: What makes luxury desirable?
Hermès case study: The Architecture of Desire
Period: 1837–Present

AUDIENCE
Primary: fashion enthusiasts; designers interested in branding, visual identity and brand evolution; luxury enthusiasts.
Secondary: general audiences curious about luxury.
Design sophisticated enough for designers, but understandable without prior luxury knowledge.

EXPERIENCE
Editorial + tactile + cinematic + refined + contemporary + equestrian + archival.
The site should feel like entering a luxury house, not reading a database.
Core rhythm: IMAGE → STORY → DATA → INTERACTION → INSIGHT.

DEFAULT
Light mode.

COLOUR
Hermès Orange #F37021 — working digital approximation, not an official published guideline value.
Warm Ivory #F7F3ED
Paper Beige #EDE5D9
Deep Brown #4A2415
Black #000000
White #FFFFFF
Use orange strategically as an accent, never as the entire background.

TYPOGRAPHY
Headings: high-contrast editorial serif, Didot/Bodoni direction.
Body/data/navigation: clean sans serif such as Inter or Manrope.
Rule: SERIF = STORY; SANS = INFORMATION.

LAYOUT
Desktop: 12-column editorial grid, 24–32px gutters, 5–8vw margins.
Tablet: 8 columns.
Mobile: 4 columns, 16–20px margins.
Allow images to break the grid. Prefer asymmetry and editorial compositions.

IMAGE DIRECTION
Prioritize authentic archival photography, product photography, craftsmanship close-ups, people, architecture, packaging, editorial/cultural imagery and material details.
Avoid generic stock luxury photography.
Never present AI-generated historical reconstructions as documentary evidence.

MOTION
Slow, deliberate and controlled.
Use GSAP/ScrollTrigger for scroll choreography and parallax; Framer Motion for micro-interactions; D3.js for data visualisation; Three.js only when genuinely useful.
Respect prefers-reduced-motion.
Avoid bouncing, excessive particles, constant movement and gratuitous 3D.

INTERACTION
Every interaction must help understanding.
Examples: timeline hover/tap reveals event; product hover/tap reveals story; map hover/tap reveals regional data; métier hover/tap reveals process; network nodes reveal relationships.

NAVIGATION
Common: THE ANATOMY OF LUXURY / HOUSES / STORY / DATA / ABOUT
Hermès: HERMÈS / ORIGIN / TIMELINE / CRAFT / ICONS / CULTURE / BUSINESS / DESIRE
Keep a route to other houses.

ACCESSIBILITY
Semantic HTML, alt text, keyboard navigation, visible focus, sufficient contrast, reduced motion, captions/transcripts where appropriate, accessible chart summaries.

PERFORMANCE
Lazy-load images, prefer AVIF/WebP, responsive image sizes, lazy-load video, preload only critical hero assets, animate transforms/opacity.

CONTENT
Keep copy concise. No invented facts, dates, prices or statistics. Use “Data not publicly disclosed” when necessary.

RESEARCH CLASSIFICATION
FACT = directly sourced.
INTERPRETATION = analysis of facts.
INFERENCE = proposed conclusion.
The TIME / CRAFT / CONTROL / HERITAGE / SCARCITY / CULTURE / CONSISTENCY → DESIRE model is the project's interpretation, not an official Hermès formula.
