# DESIGN.md — Duna-inspired Design System

version: alpha
name: duna-inspired-design-analysis
description: An AI-readable design system inspired by the public duna.com marketing site. It blends enterprise compliance credibility with soft, painterly natural scenery: clear black-on-white SaaS structure, calm landscape-derived accents, spacious editorial sections, and product UI framed as secure, auditable, revenue-driving infrastructure.

> Scope: This file is an interpretive design system based on publicly visible duna.com visual and content patterns. It is intended for building new interfaces with a similar aesthetic, not for reproducing Duna's proprietary brand assets, logo, illustrations, or exact site implementation.

---

## 1. Visual Theme & Atmosphere

Duna's surface reads as **calm enterprise trust**: high-contrast SaaS typography and CTAs sit against soft, atmospheric landscapes and compliance/product messaging. The result is not cyber-security dark mode or fintech neon; it is a premium compliance platform made approachable through sky, meadow, river, dusk, sand, and cloud tones.

Key characteristics:

- **Enterprise-clear hierarchy:** large declarative headlines, short supporting copy, strong CTAs, metrics, and product pillars.
- **Soft natural atmosphere:** painterly skies, fields, rivers, mountains, and sunset tints create emotional calm around a high-stakes compliance product.
- **Black / white structural core:** navigation, text, primary actions, and cards should remain crisp and minimally styled.
- **Muted landscape accents:** use warm peach, sand, meadow, river, dusk blue, and cloud tones for backgrounds, chips, illustrations, data accents, and product screenshots.
- **Trust-first UI:** surfaces should feel auditable, legible, low-friction, and secure. Avoid noisy dashboards or aggressive fintech gradients.
- **Long-form SaaS rhythm:** hero → logo wall → metrics → product pillars → trust/security → news/resources → footer.

Design mood words: `calm`, `auditable`, `premium`, `operational`, `low-friction`, `secure`, `atmospheric`, `enterprise SaaS`, `AI-native but not sci-fi`.

---

## 2. Color Palette & Roles

Use a white/ink system for the actual interface, then layer natural atmospheric accents. The accents should feel sampled from soft landscape illustrations rather than synthetic brand gradients.

### Core Colors

| Token | Hex | Role |
|---|---:|---|
| `{colors.canvas}` | `#FFFFFF` | Main page background. Default for marketing sections and app surfaces. |
| `{colors.canvas-warm}` | `#F6F3F0` | Warm cloud/off-white background for soft section bands. |
| `{colors.ink}` | `#111111` | Primary text, filled CTA background, icons. |
| `{colors.ink-soft}` | `#2A2A27` | Secondary dark text where pure black feels too sharp. |
| `{colors.muted}` | `#6F746D` | Body-muted copy, metadata, secondary nav links. |
| `{colors.hairline}` | `#E6E1DA` | Default borders and separators. |
| `{colors.hairline-strong}` | `#D6CEC3` | Card borders and emphasized dividers. |
| `{colors.surface-card}` | `#FAF8F5` | Warm card surface on white canvas. |
| `{colors.surface-blue}` | `#EEF5F6` | Sky-tinted section surface. |

### Brand & Atmospheric Accents

| Token | Hex | Role |
|---|---:|---|
| `{colors.accent-sky}` | `#A9CED6` | Soft sky tint for backgrounds, icons, product UI empty states. |
| `{colors.accent-river}` | `#46698D` | Blue river accent for charts, selected states, links when black is too heavy. |
| `{colors.accent-dusk}` | `#304F5E` | Deep blue-green for dark sections, footer, security bands. |
| `{colors.accent-meadow}` | `#69894F` | Success/compliance-ready state, verified markers. |
| `{colors.accent-olive}` | `#A09A36` | Low-saturation operational warning / pending state. |
| `{colors.accent-sand}` | `#E2AA55` | Highlight cards, metric emphasis, callouts. |
| `{colors.accent-peach}` | `#F5CCA7` | Warm hero atmosphere, soft promotional backgrounds. |
| `{colors.accent-coral}` | `#E7B599` | Human/customer story accent, testimonial surfaces. |
| `{colors.accent-stone}` | `#AF9C93` | Neutral illustration shadow, disabled warm elements. |

### Semantic Colors

| Token | Hex | Role |
|---|---:|---|
| `{colors.success}` | `#5F7952` | Approved, verified, complete. |
| `{colors.warning}` | `#D29C3A` | Needs review, pending, low-risk attention. |
| `{colors.danger}` | `#B85B4D` | High-risk, blocked, failed verification. Use sparingly. |
| `{colors.info}` | `#46698D` | Informational banners, provider routing, analytics. |
| `{colors.on-dark}` | `#FFFFFF` | Text on dusk/dark sections. |
| `{colors.on-dark-muted}` | `#C8D4D6` | Muted text on dusk/dark sections. |

### Color Usage Rules

- Default UI chrome is `{colors.canvas}` + `{colors.ink}` + `{colors.hairline}`.
- Use `{colors.accent-dusk}` for one major dark band only: footer, trust/security, or a premium product narrative section.
- Use accents as **tints and signals**, not as competing CTA colors.
- Primary CTA should be black/ink in light mode. Reserve blue/river for links or selected product states.
- Avoid saturated fintech blues, crypto purples, neon greens, and heavy red unless representing actual risk.

---

## 3. Typography Rules

The typography should feel like modern enterprise SaaS with editorial confidence. Use a high-quality geometric/grotesk sans. If no brand font is available, use Inter or Geist as the implementation default.

### Font Families

| Token | Font Stack | Role |
|---|---|---|
| `{fonts.sans}` | `Inter, Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | All UI, body, nav, forms, and marketing copy. |
| `{fonts.display}` | `Inter, Geist, ui-sans-serif, system-ui, sans-serif` | Hero and section headlines. Use tighter tracking. |
| `{fonts.mono}` | `"Geist Mono", "SFMono-Regular", Consolas, monospace` | Compliance codes, IDs, audit logs, small technical labels. |

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.hero}` | `76px` | `560` | `0.96` | `-2.2px` | Homepage hero, maximum marketing statement. |
| `{typography.display-lg}` | `56px` | `560` | `1.00` | `-1.5px` | Major section headline. |
| `{typography.display-md}` | `42px` | `560` | `1.08` | `-1.0px` | Product pillar heading. |
| `{typography.heading-xl}` | `32px` | `560` | `1.16` | `-0.6px` | Card cluster / modal header. |
| `{typography.heading-lg}` | `24px` | `560` | `1.24` | `-0.3px` | Feature card title. |
| `{typography.heading-md}` | `20px` | `560` | `1.32` | `-0.2px` | Form section / panel title. |
| `{typography.body-lg}` | `18px` | `400` | `1.56` | `0` | Lead paragraph below hero/section headings. |
| `{typography.body-md}` | `16px` | `400` | `1.55` | `0` | Default body text. |
| `{typography.body-sm}` | `14px` | `400` | `1.50` | `0` | Supporting UI text, helper copy. |
| `{typography.label}` | `13px` | `520` | `1.2` | `0.01em` | Form labels, nav labels. |
| `{typography.eyebrow}` | `12px` | `600` | `1.2` | `0.11em` | Uppercase section category labels. |
| `{typography.metric}` | `64px` | `560` | `0.95` | `-1.8px` | Marketing metric numerals. |
| `{typography.metric-label}` | `14px` | `500` | `1.35` | `0` | Metric descriptors. |
| `{typography.button}` | `15px` | `560` | `1` | `-0.01em` | Button labels. |
| `{typography.audit-mono}` | `12px` | `500` | `1.45` | `0.03em` | Audit trail rows, technical metadata. |

### Typography Rules

- Headlines should be short and declarative. Prefer 6–10 words.
- Hero display uses tight line height and negative tracking; body copy remains loose and legible.
- Avoid mixing serif type unless creating an editorial customer story block.
- Metrics should use the same sans as headings, not a decorative display font.
- Compliance and audit artifacts may use mono, but only in small labels or data tables.

---

## 4. Spacing, Layout & Grid

The system should feel spacious and conversion-oriented. Sections breathe; cards are precise.

### Spacing Tokens

| Token | Value | Use |
|---|---:|---|
| `{spacing.2xs}` | `4px` | Icon gaps, compact chips. |
| `{spacing.xs}` | `8px` | Badge padding, small gaps. |
| `{spacing.sm}` | `12px` | Button internal gap, form helper spacing. |
| `{spacing.md}` | `16px` | Default component padding. |
| `{spacing.lg}` | `24px` | Card inner padding, group gaps. |
| `{spacing.xl}` | `32px` | Large card padding. |
| `{spacing.2xl}` | `48px` | Section internal groups. |
| `{spacing.3xl}` | `72px` | Compact section vertical padding. |
| `{spacing.4xl}` | `104px` | Standard marketing section vertical padding. |
| `{spacing.5xl}` | `144px` | Hero and major narrative sections. |

### Layout Rules

- Max content width: `1200px`; hero text max width: `880px`; body text max width: `680px`.
- Use a 12-column desktop grid with `24px` gutters.
- Tablet: 8 columns; mobile: 4 columns.
- Section padding desktop: `104px 32px`; mobile: `64px 20px`.
- Product feature bands should use split layout: copy on one side, product UI or atmospheric image on the other.
- Long pages should alternate: white → warm canvas → product surface → dusk/security → white/news/footer.
- Use generous top spacing before headings and tighter spacing between heading and explanatory copy.

---

## 5. Radius, Borders & Elevation

Duna-inspired UI should be soft but not playful. Radius supports calmness; borders carry most of the structure.

### Radius Tokens

| Token | Value | Use |
|---|---:|---|
| `{rounded.xs}` | `4px` | Tiny badges, table status dots. |
| `{rounded.sm}` | `8px` | Inputs, small controls. |
| `{rounded.md}` | `12px` | Standard buttons and cards. |
| `{rounded.lg}` | `18px` | Feature cards, screenshot frames. |
| `{rounded.xl}` | `24px` | Hero panels, large product cards. |
| `{rounded.2xl}` | `32px` | Atmospheric image containers. |
| `{rounded.full}` | `9999px` | Pills, chips, status badges. |

### Border Tokens

| Token | Value | Use |
|---|---|---|
| `{borders.hairline}` | `1px solid #E6E1DA` | Default card/input/nav border. |
| `{borders.strong}` | `1px solid #D6CEC3` | Emphasized cards and product screenshot frames. |
| `{borders.dark}` | `1px solid rgba(255,255,255,0.16)` | Borders on dusk sections. |
| `{borders.focus}` | `2px solid #46698D` | Keyboard focus ring / selected input. |

### Shadows

| Token | Value | Use |
|---|---|---|
| `{shadow.none}` | `none` | Most flat marketing surfaces. |
| `{shadow.sm}` | `0 1px 2px rgba(17,17,17,0.06)` | Inputs, compact cards. |
| `{shadow.md}` | `0 12px 32px rgba(48,79,94,0.10)` | Product panels and modals. |
| `{shadow.lg}` | `0 24px 72px rgba(48,79,94,0.16)` | Hero screenshot / floating product UI. |
| `{shadow.atmospheric}` | `0 40px 120px rgba(70,105,141,0.18)` | Large landscape-backed panels only. |

Elevation rule: Prefer borders + whitespace. Use large shadows only when floating product UI above atmospheric imagery.

---

## 6. Component Styling

### `button-primary`

Primary filled CTA for homepage, hero, forms, and high-intent actions.

- `backgroundColor`: `{colors.ink}`
- `textColor`: `{colors.canvas}`
- `typography`: `{typography.button}`
- `rounded`: `{rounded.full}`
- `padding`: `12px 20px`
- `border`: `1px solid {colors.ink}`
- `hover`: `backgroundColor #2A2A27; transform translateY(-1px)`
- `active`: `transform translateY(0)`
- `focus`: `{borders.focus}` with `2px` offset

Use for: `Get started`, `Schedule a demo`, `Start onboarding`, `Request access`.

### `button-secondary`

Quiet outline CTA.

- `backgroundColor`: `{colors.canvas}`
- `textColor`: `{colors.ink}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.full}`
- `padding`: `12px 20px`
- `hover`: `{colors.surface-card}`

Use for: `Explore`, `Learn more`, secondary nav actions.

### `button-on-dark`

CTA for dusk/security/footer bands.

- `backgroundColor`: `{colors.canvas}`
- `textColor`: `{colors.ink}`
- `border`: `1px solid rgba(255,255,255,0.24)`
- `rounded`: `{rounded.full}`
- `padding`: `12px 20px`

### `nav-header`

Top navigation should be minimal and spacious.

- `height`: `72px`
- `backgroundColor`: `rgba(255,255,255,0.82)`
- `backdropFilter`: `blur(16px)`
- `borderBottom`: `1px solid rgba(230,225,218,0.72)`
- `layout`: logo left, product/customer/company/resources center, CTA right
- `linkTypography`: `{typography.label}`
- `linkColor`: `{colors.ink-soft}`
- `hoverColor`: `{colors.ink}`

### `hero-region`

The hero is a calm, high-trust opening with large declarative copy and a subtle atmospheric image.

- `backgroundColor`: `{colors.canvas}` or `{colors.canvas-warm}`
- `padding`: `{spacing.5xl} {spacing.xl} {spacing.4xl}`
- `headline`: `{typography.hero}`
- `copy`: `{typography.body-lg}` with `{colors.muted}`
- `CTA group`: primary + secondary, horizontal desktop, stacked mobile
- Optional image: painterly landscape, sky, river, meadow, or mountain; no literal stock business photography.

### `announcement-pill`

Small top-of-hero badge.

- `backgroundColor`: `{colors.surface-card}`
- `textColor`: `{colors.ink-soft}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.full}`
- `typography`: `{typography.label}`
- `padding`: `6px 10px`

### `metric-card`

Used for conversion, onboarding speed, analyst efficiency, automation impact.

- `backgroundColor`: `{colors.canvas}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.lg}`
- `padding`: `{spacing.xl}`
- `metricTypography`: `{typography.metric}`
- `metricColor`: `{colors.ink}`
- `labelTypography`: `{typography.metric-label}`
- `labelColor`: `{colors.muted}`
- Optional accent underline: `{colors.accent-sand}` or `{colors.accent-river}`

### `feature-card`

Default marketing feature card.

- `backgroundColor`: `{colors.surface-card}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.lg}`
- `padding`: `{spacing.xl}`
- `titleTypography`: `{typography.heading-lg}`
- `bodyTypography`: `{typography.body-md}`
- `iconContainer`: `40px`, `{rounded.md}`, muted accent tint background

### `product-pillar-card`

Large card for product families such as onboarding, case management, lifecycle, data platform.

- `backgroundColor`: `{colors.canvas}`
- `border`: `{borders.strong}`
- `rounded`: `{rounded.xl}`
- `padding`: `{spacing.2xl}`
- `shadow`: `{shadow.md}`
- `layout`: 2-column desktop, stacked mobile
- `label`: uppercase `{typography.eyebrow}`
- `headline`: `{typography.display-md}`
- `visual`: product UI screenshot or abstract compliance workflow panel

### `product-ui-frame`

Container for app screenshots, workflow diagrams, and case-management previews.

- `backgroundColor`: `{colors.canvas}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.xl}`
- `shadow`: `{shadow.lg}`
- `padding`: `{spacing.md}`
- `innerSurface`: `{colors.surface-card}`
- `chrome`: top bar with 3 muted dots, optional sidebar, table/list pattern

### `status-badge`

For compliance states.

Variants:

- `approved`: background `rgba(95,121,82,0.12)`, text `#4F6A44`, border `rgba(95,121,82,0.20)`
- `pending`: background `rgba(210,156,58,0.14)`, text `#8A6421`, border `rgba(210,156,58,0.24)`
- `review`: background `rgba(70,105,141,0.12)`, text `#365A7A`, border `rgba(70,105,141,0.22)`
- `blocked`: background `rgba(184,91,77,0.12)`, text `#8A3D34`, border `rgba(184,91,77,0.22)`

Base:

- `rounded`: `{rounded.full}`
- `padding`: `4px 9px`
- `typography`: `{typography.label}`

### `data-table`

For audit logs, case queues, provider routing, policy events.

- `backgroundColor`: `{colors.canvas}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.lg}`
- `headerBackground`: `{colors.surface-card}`
- `headerTypography`: `{typography.eyebrow}`
- `cellTypography`: `{typography.body-sm}`
- `cellPadding`: `14px 16px`
- `rowBorder`: `1px solid {colors.hairline}`
- `hoverRow`: `{colors.surface-card}`

### `audit-event-row`

Traceable event primitive.

- `layout`: icon/status dot left, event copy center, timestamp right
- `icon`: `8px` dot or `24px` icon cell
- `timestampTypography`: `{typography.audit-mono}`
- `timestampColor`: `{colors.muted}`
- `backgroundColor`: `transparent`
- `borderBottom`: `{borders.hairline}`

### `form-input`

For onboarding and business identity flows.

- `height`: `48px`
- `backgroundColor`: `{colors.canvas}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.md}`
- `padding`: `0 14px`
- `typography`: `{typography.body-md}`
- `placeholderColor`: `#9A9B94`
- `focus`: `{borders.focus}` and `box-shadow 0 0 0 4px rgba(70,105,141,0.12)`

### `testimonial-card`

Customer proof with calm enterprise tone.

- `backgroundColor`: `{colors.canvas}`
- `border`: `{borders.hairline}`
- `rounded`: `{rounded.xl}`
- `padding`: `{spacing.2xl}`
- `quoteTypography`: `{typography.heading-md}`
- `quoteColor`: `{colors.ink}`
- `metaTypography`: `{typography.body-sm}`
- Optional accent wash: `{colors.accent-peach}` at 16% opacity.

### `security-band`

Dark trust/security section.

- `backgroundColor`: `{colors.accent-dusk}`
- `textColor`: `{colors.on-dark}`
- `mutedText`: `{colors.on-dark-muted}`
- `padding`: `{spacing.4xl} {spacing.xl}`
- `rounded`: optional `{rounded.2xl}` if inset card; none if full-width band
- `border`: `{borders.dark}` for nested cards

### `footer`

- `backgroundColor`: `{colors.accent-dusk}` or `#263C43`
- `textColor`: `{colors.on-dark}`
- `mutedText`: `{colors.on-dark-muted}`
- `padding`: `{spacing.4xl} {spacing.xl}`
- `grid`: 4–6 columns desktop, stacked mobile
- `linkTypography`: `{typography.body-sm}`
- `headingTypography`: `{typography.label}`

---

## 7. Product UI Patterns

### Business Onboarding Flow

Use step-based progressive disclosure.

- Left: current step list / progress rail.
- Center: form or verification task.
- Right: contextual compliance explanation or document preview.
- Use verified/pending/review badges.
- Keep copy crisp and reassuring.

### Case Management Queue

Use a low-noise data table plus priority signals.

- Status badges should be visible but muted.
- Priority/risk should use semantic colors, not huge warning blocks.
- Provide audit details in expandable rows or side panels.

### Policy Engine View

Represent policies as readable rules, not dense code.

- Use grouped condition cards.
- Use mono sparingly for rule IDs, jurisdiction codes, and event IDs.
- Use `{colors.accent-river}` for selected rules and `{colors.accent-meadow}` for passing checks.

### Data Orchestration View

Show routing and provider fallback with calm diagrams.

- Nodes use soft surfaces and hairline borders.
- Lines use river/dusk colors at low opacity.
- Success/fallback paths should remain legible at small sizes.

---

## 8. Imagery & Illustration

### Direction

- Use painterly, atmospheric nature visuals: sky, clouds, meadow, river, mountain, dusk, sand, calm horizon.
- Images should feel like quiet editorial artwork, not generic AI sci-fi.
- Product UI may float over these backgrounds but must remain crisp.
- Use soft gradients only when they resemble light/weather, not synthetic neon.

### Image Treatment

- Container radius: `{rounded.2xl}`.
- Optional overlay: linear gradient from transparent to `{colors.canvas}` or `{colors.accent-dusk}`.
- Keep saturation low-to-medium.
- Avoid people-centric stock photography.
- Avoid literal surveillance/security imagery such as locks, shields, hackers, or server racks unless heavily abstracted.

---

## 9. Motion & Interaction

Motion should communicate confidence and reduced friction.

| Token | Value | Use |
|---|---|---|
| `{motion.fast}` | `120ms ease-out` | Button hover, row hover. |
| `{motion.base}` | `180ms cubic-bezier(.2,.8,.2,1)` | Cards, nav dropdowns, tabs. |
| `{motion.slow}` | `320ms cubic-bezier(.16,1,.3,1)` | Hero reveal, large panel transitions. |

Rules:

- Buttons lift by `-1px` on hover, not more.
- Cards can fade/translate `8px` on entrance.
- Avoid bouncy or playful easing.
- Product UI state changes should feel instant and operational.
- Use skeletons and inline progress for onboarding flows.

---

## 10. Content Voice

Voice: precise, enterprise-safe, outcome-oriented.

Preferred language:

- `accelerate onboarding`
- `automate manual review`
- `auditable decisions`
- `policy translated into workflows`
- `reduce friction`
- `increase conversion`
- `ongoing compliance`
- `secure, centralized, traceable`

Avoid:

- hype-heavy AI phrasing like `revolutionary`, `magical`, `10x everything` unless backed by a metric
- vague security claims without context
- cute microcopy in compliance-critical surfaces
- overly technical AML/KYB jargon in primary marketing headlines

CTA style:

- Primary: `Get started`, `Schedule a demo`, `Start onboarding`
- Secondary: `Explore`, `Learn more`, `View trust center`
- Product: `Review case`, `Approve`, `Request documents`, `Run checks`

---

## 11. Accessibility & Usability

- Body text contrast must meet WCAG AA minimum.
- Do not place small text directly over imagery without a solid or blurred surface.
- Every color-coded compliance status must include text labels.
- Keyboard focus must be visible using `{borders.focus}`.
- Tables must preserve row/column semantics.
- Inputs must include labels, helper text, and error text.
- Avoid using red as the only risk indicator.
- Dark sections should use `{colors.on-dark}` and `{colors.on-dark-muted}` only; avoid low-opacity white under 65% for body text.

---

## 12. Dark Mode Mapping

Duna's main marketing style is light-first. Dark mode should feel like the dusk/security band extended into the full UI, not pure black.

| Light Token | Dark Token | Dark Hex |
|---|---|---:|
| `{colors.canvas}` | `{colors.dark-canvas}` | `#263C43` |
| `{colors.canvas-warm}` | `{colors.dark-surface}` | `#304F5E` |
| `{colors.surface-card}` | `{colors.dark-card}` | `#2E4238` |
| `{colors.ink}` | `{colors.dark-ink}` | `#FFFFFF` |
| `{colors.muted}` | `{colors.dark-muted}` | `#C8D4D6` |
| `{colors.hairline}` | `{colors.dark-hairline}` | `rgba(255,255,255,0.14)` |
| `{colors.accent-sky}` | `{colors.dark-sky}` | `#596F89` |
| `{colors.accent-peach}` | `{colors.dark-peach}` | `#897567` |

Dark mode rules:

- Use deep blue-green, not pure black.
- Keep product cards slightly lighter than the background.
- Primary CTA can become white-filled with dark text.
- Accent colors should be desaturated and used sparingly.

---

## 13. Do's and Don'ts

### Do

- Use large, confident, concise headlines.
- Keep CTAs pill-shaped and high contrast.
- Use soft natural accents as atmosphere, not decoration overload.
- Use hairline borders and spacious sections.
- Show product UI as clean workflows, queues, policy rules, audit logs, and data routing.
- Use metrics prominently when telling performance stories.
- Use dark dusk sections for security/trust emphasis.

### Don't

- Don't use neon AI gradients or cyberpunk styling.
- Don't make compliance screens visually alarming unless showing a genuine high-risk state.
- Don't over-round everything into a consumer-app aesthetic.
- Don't use playful icons, emoji, or cartoon illustrations.
- Don't use many CTA colors. Primary remains ink/black.
- Don't crowd tables with heavy borders and dense typography.
- Don't place primary body copy over busy landscape imagery.

---

## 14. Implementation Starter Tokens

```css
:root {
  --color-canvas: #ffffff;
  --color-canvas-warm: #f6f3f0;
  --color-ink: #111111;
  --color-ink-soft: #2a2a27;
  --color-muted: #6f746d;
  --color-hairline: #e6e1da;
  --color-surface-card: #faf8f5;
  --color-accent-sky: #a9ced6;
  --color-accent-river: #46698d;
  --color-accent-dusk: #304f5e;
  --color-accent-meadow: #69894f;
  --color-accent-sand: #e2aa55;
  --color-accent-peach: #f5cca7;

  --font-sans: Inter, Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "Geist Mono", "SFMono-Regular", Consolas, monospace;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgba(17, 17, 17, 0.06);
  --shadow-md: 0 12px 32px rgba(48, 79, 94, 0.10);
  --shadow-lg: 0 24px 72px rgba(48, 79, 94, 0.16);
}
```

---

## 15. Agent Prompt Guide

When using this DESIGN.md with an AI coding/design agent, instruct it as follows:

> Build the UI using the Duna-inspired design system in `DESIGN.md`. Prioritize calm enterprise SaaS hierarchy, white/ink structure, pill CTAs, warm hairline cards, large editorial headings, and muted natural accents. For compliance/product screens, show auditable workflows, status badges, case queues, policy rules, and data routing with restrained color. Do not use neon gradients, playful illustrations, or generic dashboard styling.

Default component choices:

- Hero: `hero-region` + `announcement-pill` + `button-primary` + atmospheric image.
- Marketing proof: `metric-card` grid.
- Product section: `product-pillar-card` + `product-ui-frame`.
- Compliance app UI: `data-table`, `status-badge`, `audit-event-row`, `form-input`.
- Trust section: `security-band`.
- Footer: dark dusk multi-column footer.
