---
name: Mapping the Future with STEM
description: Serious youth-led STEM brand system for MTFS.
colors:
  deep-civic-purple: "#2b0339"
  purple-panel: "#360746"
  lab-cyan: "#5ec9f0"
  warm-white: "#fffefa"
  deep-ink: "#09060b"
  civic-lavender: "#6b4e73"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 5.7rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 900
    letterSpacing: "0.08em"
rounded:
  sm: "12px"
  md: "16px"
  hero: "30px"
  pill: "999px"
spacing:
  xs: "10px"
  sm: "16px"
  md: "24px"
  lg: "34px"
  xl: "52px"
  section: "clamp(104px, 12vw, 168px)"
components:
  button-primary:
    backgroundColor: "{colors.deep-civic-purple}"
    textColor: "{colors.lab-cyan}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 24px"
    height: "52px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.lab-cyan}"
    rounded: "{rounded.pill}"
    padding: "0 23px"
    height: "52px"
  project-card:
    backgroundColor: "rgba(255, 254, 250, 0.04)"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.md}"
    padding: "clamp(44px, 6vw, 76px)"
  nav-pill:
    backgroundColor: "rgba(43, 3, 57, 0.94)"
    textColor: "{colors.lab-cyan}"
    rounded: "{rounded.pill}"
    height: "70px"
---

# Design System: Mapping the Future with STEM

## 1. Overview

**Creative North Star: "The Serious Youth Lab"**

This system should feel like a focused youth-led STEM organization with real projects, real people, and a clear invitation to join. It is professional, clean, capable, welcoming, and community-built. The visual language should give new visitors confidence that MTFS is serious about its work while still making students, volunteers, partners, and sponsors feel that they can become part of the MTFS community.

The current identity is purple-dominant with Lab Cyan as a precise signal color. Typography is bold and direct, with Archivo carrying the public voice and DM Sans carrying readable explanations. Layouts use large type, structured borders, framed project surfaces, and deliberate spacing instead of startup-style decorative sections.

The system explicitly rejects generic tech-startup patterns, childish school-club styling, stiff corporate NGO presentation, inflated claims, random homepage content, and decorative sections that do not explain MTFS work.

**Key Characteristics:**
- Purple-dominant brand surface with cyan used sparingly for action, focus, and structure.
- Strong display typography with short, grounded copy.
- Mostly flat depth: borders, tonal panels, and rare hard shadows.
- Homepage as brand orientation, not a full archive.
- Project detail belongs on the Projects page.

## 2. Colors

The palette is a committed civic-lab system: Deep Civic Purple owns the brand atmosphere, Lab Cyan marks action and structure, and Warm White appears only where a focused text panel needs strong contrast.

### Primary
- **Deep Civic Purple**: The dominant page background and brand field. Use for the body, hero field, dark sections, primary buttons, and nav-on-scroll surfaces.
- **Lab Cyan**: The active signal color. Use for calls to action, focus outlines, short labels, dividers, accents, and current-state emphasis. It must stay rare enough to feel intentional.

### Secondary
- **Purple Panel**: A deeper panel layer for project visuals, staff photo frames, and framed media wells.
- **Civic Lavender**: Supporting text on light hero cards and secondary emphasis where pure purple would be too heavy.

### Neutral
- **Warm White**: High-contrast card and text surface. Use for the hero inner text card, partner logo cards, and small light panels only.
- **Deep Ink**: Text and hover contrast on Warm White surfaces.

### Named Rules

**The Purple Field Rule.** The hero is purple-dominant. The hero bubble takes the full available space, and the inner text card is the only capped element.

**The Cyan Signal Rule.** Lab Cyan is for action, focus, structural rules, and selected emphasis. Do not spread cyan across inactive decoration.

**The No White Pricing Layout Rule.** The Join section should stay dark purple and brand-led. Do not turn it into a white pricing-card layout.

## 3. Typography

**Display Font:** Archivo, with system-ui fallback  
**Body Font:** DM Sans, with system-ui fallback  
**Label/Mono Font:** none

**Character:** Archivo gives MTFS a firm, public, youth-lab voice without becoming corporate. DM Sans keeps paragraphs approachable and readable, but it should not become the visual identity by itself.

### Hierarchy
- **Display** (900, `clamp(3rem, 6vw, 6rem)`, 0.98): Page headlines and major route introductions. Never exceed 6rem.
- **Headline** (900, `clamp(2.5rem, 5vw, 5.7rem)`, 0.95): Homepage section headings and large brand statements.
- **Title** (900, `1.35rem` to `clamp(2rem, 4vw, 4.2rem)`, 1.04): Cards, project names, staff names, and focused content blocks.
- **Body** (400 to 500, `1rem` to `1.1rem`, 1.72 to 1.8): Explanatory copy. Keep prose grounded in actual MTFS work and cap long reading lines near 65 to 75 characters.
- **Label** (800 to 900, `0.78rem`, 0.08em, uppercase allowed only for short labels): Kicker labels, metadata pills, and compact nav supporting text.

### Named Rules

**The Grounded Copy Rule.** Every homepage and page sentence must be based on MTFS programs, people, outcomes, or invitations. Do not write random startup claims.

**The No Shouting Rule.** Display type is strong, but not oversized. Keep hero headlines at or below 6rem and letter spacing no tighter than -0.04em in new work.

## 4. Elevation

The system is mostly flat and structured. Depth comes from borders, tonal panels, color contrast, grid lines, and spacing. Shadows are rare and should feel deliberate, not generic SaaS softness.

### Shadow Vocabulary
- **Hero Hard Shelf** (`box-shadow: 0 10px 0 rgba(0, 0, 0, 0.08)`): Only for the hero inner text card or a similarly deliberate brand object.
- **Sticky Nav Ambient** (`box-shadow: 0 18px 46px rgba(0, 0, 0, 0.24)`): Only for the fixed navigation after it separates from the hero.

### Named Rules

**The Flat Structure Rule.** Use borders and tonal panels first. Soft wide card shadows are forbidden unless there is a clear state or navigation reason.

## 5. Components

### Buttons
- **Shape:** Confident pill actions (`999px`) with a minimum height of 52px.
- **Primary:** Deep Civic Purple background with Lab Cyan text and a compact circular arrow cell. Padding is `0 8px 0 24px`.
- **Hover / Focus:** Hover lifts by 1 to 2px and darkens or lightly tints the surface. Focus uses a 3px Lab Cyan outline with a 3px offset.
- **Secondary / Ghost:** Transparent or lightly tinted pill with a 1px border. Use for supporting actions only.

### Button Surface Variants

- On Warm White surfaces: primary buttons use Deep Civic Purple with Lab Cyan text.
- On Deep Civic Purple surfaces: primary buttons use Lab Cyan with Deep Civic Purple text.
- Secondary buttons should adapt to their surface: Deep Ink on Warm White, Warm White or Lab Cyan on dark purple.

### Chips
- **Style:** Metadata pills use 1px cyan-tinted borders, rounded pill shape, compact horizontal padding, and white text on purple.
- **State:** Chips are informational, not decoration. Use for project labels, status, and compact categorization.

### Cards / Containers
- **Corner Style:** Project and staff containers use clean framed corners (`16px`). Inner media frames use `14px`; smaller join cards use `12px`.
- **Background:** Dark cards use `rgba(255, 254, 250, 0.04)` over Deep Civic Purple. Light cards use Warm White only for focused reading or logo surfaces.
- **Shadow Strategy:** Flat by default. Use borders and tonal contrast. Do not pair a decorative 1px border with a soft wide shadow.
- **Border:** Cyan-tinted borders define structure: `rgba(94, 201, 240, 0.18)` or stronger variants for focus.
- **Internal Padding:** Use generous padding, typically `clamp(44px, 6vw, 76px)` for major content surfaces and 24 to 30px for compact cards.

### Inputs / Fields
- **Style:** No full input system exists yet. Future inputs should use dark purple fields, 1px cyan-tinted borders, 12px to 16px radius, readable labels, and clear focus outlines.
- **Focus:** Lab Cyan border or outline. Do not rely on color alone for errors.
- **Error / Disabled:** Error states should be explicit text plus color. Disabled states should reduce contrast without becoming unreadable.

### Navigation
- **Style:** Fixed pill navigation with logo mark, short brand copy, compact nav links, and a primary volunteer action.
- **Typography:** Strong DM Sans labels, no decorative font changes.
- **States:** Transparent on hero, structured purple surface after scrolling. Mobile hides center links and keeps the brand plus action.
- **Z-index:** Navigation is the top persistent layer and should not be hidden behind hero or page effects.

### Hero
- **Structure:** The hero is purple-dominant. The outer hero and bubble take full available viewport space. The inner text card is the only capped element.
- **Image Rule:** No hero photo and no side logo block. The hero should lead with brand name, short truth-based copy, and clear actions.
- **Sizing:** Keep the hero spacious without turning the whole page into a centered card.

### Project Surfaces
- **Role:** Projects page holds full project details. Homepage project sections should preview and route, not archive.
- **Visuals:** Use clean framed media wells, project logos, status metadata, and grounded summaries.
- **Rhythm:** Alternate or structured layouts are acceptable, but repeated identical generic cards should be avoided.

### Join Section
- **Role:** The Join section is a brand invitation, not pricing or sales.
- **Color:** It should stay dark purple and connected to the main brand field.
- **Content:** Use clear paths such as volunteer, mentor, and partner. Keep copy direct and true.

## 6. Do's and Don'ts

### Do:
- **Do** keep the hero purple-dominant, with the hero bubble taking full available space and the inner text card as the only capped element.
- **Do** keep the homepage neat and selective. It introduces MTFS and routes people to project detail.
- **Do** put full project details on the Projects page.
- **Do** use Deep Civic Purple, Lab Cyan, Warm White, and Deep Ink as the core brand vocabulary.
- **Do** use confident pill actions, clean framed project surfaces, strong typography, and purposeful spacing.
- **Do** write copy from actual MTFS programs, people, outcomes, and invitations.
- **Do** preserve visible focus states, readable contrast, and reduced-motion support.

### Don't:
- **Don't** make the site feel like a generic tech startup.
- **Don't** make it feel like a childish school club or a stiff corporate NGO.
- **Don't** use vague innovation copy, inflated metrics, decorative gradients, startup buzzwords, or random homepage content.
- **Don't** add a hero photo.
- **Don't** add a side logo block in the hero.
- **Don't** turn the homepage into a full archive.
- **Don't** turn the Join section into a white pricing-card layout.
- **Don't** use soft generic SaaS shadows everywhere.
- **Don't** add random decorative sections that do not explain MTFS work.
- **Don't** repeat tiny uppercase section labels as the whole page structure unless a specific label earns its place.
