# PromptForge — AWS SBG
## MVP Requirements Document

> **Working name:** PromptForge  
> **Purpose:** A fast, organization-specific prompt library for the AWS Student Builder Group (AWS SBG), designed to help members discover, understand, customize, and copy high-quality prompts for recurring AI-assisted tasks.

---

## 1. Product Overview

PromptForge is a React-based static web application that provides AWS SBG members with a curated collection of reusable AI prompt templates.

The MVP focuses on **prompt discovery and reuse**, not AI execution.

A user should be able to:

1. Open the website.
2. Quickly identify the type of task they want to perform.
3. Find the appropriate prompt.
4. Understand what the prompt does and when to use it.
5. See an example of the prompt being used.
6. Select their preferred LLM.
7. View the LLM-specific version of the prompt.
8. Replace the required placeholders.
9. Copy the final prompt.
10. Paste it into ChatGPT or Gemini.

The application should minimize the amount of thinking, searching, navigation, and typing required before a user can start using a prompt.

---

# 2. MVP Goals

## Primary Goals

- Make prompt discovery extremely fast.
- Reduce repetitive prompt-writing effort.
- Standardize commonly used AI prompts across AWS SBG.
- Provide clear instructions for using each prompt.
- Provide realistic examples for every prompt.
- Support ChatGPT and Gemini prompt variants.
- Provide an excellent, polished UI/UX.
- Make the system easy enough for a new AWS SBG member to understand without training.
- Keep the application static and inexpensive to deploy.
- Establish an architecture that can later support additional organizations and LLMs.

## Secondary Goals

- Make frequently used prompts easy to access.
- Allow users to search prompts using natural keywords.
- Help users understand which prompt is appropriate for a task.
- Encourage prompt reuse rather than repeated prompt engineering.
- Collect no unnecessary personal data in the MVP.

## Explicit Non-Goals for MVP

The MVP will NOT include:

- Direct ChatGPT API integration.
- Direct Gemini API integration.
- AI-generated prompt recommendations.
- User accounts.
- Backend services.
- Database.
- Organization administration dashboard.
- User-specific prompt libraries.
- Prompt analytics.
- Prompt execution inside the website.
- Automatic context retrieval.
- Automated workflows.
- LLM API billing/management.

These can be considered in future phases.

---

# 3. Target Users

## Primary User

AWS SBG members who regularly use LLMs for:

- Event planning
- Communication
- Emails
- WhatsApp messages
- LinkedIn posts
- Social media content
- PPT planning
- PPT content
- Poster content
- Creative ideas
- Technical problem solving
- Coding
- Debugging
- Architecture planning
- AWS-related tasks
- Documentation
- Deployment
- Research
- Resume-related tasks

## Secondary User

New AWS SBG members who may not yet know:

- How to write effective prompts.
- Which information an LLM needs.
- Which prompt is appropriate for a particular task.
- How to structure a request.

The UX should therefore support both experienced and inexperienced users.

---

# 4. Core Product Principle

The application should not make users think:

> "Which prompt should I use?"

It should make them think:

> "What am I trying to accomplish?"

The navigation and information architecture should therefore be **task-oriented rather than prompt-oriented**.

Example:

Instead of:

> Prompt #27 — LinkedIn v3

Use:

> **Create a LinkedIn Post**

Then show:

- What it does
- When to use it
- Required information
- Example
- ChatGPT version
- Gemini version
- Copy action

---

# 5. Proposed Information Architecture

```text
PromptForge
│
├── Home
│
├── Explore
│   ├── Communication
│   ├── Content & Social Media
│   ├── Events
│   ├── Presentations
│   ├── Design & Creatives
│   ├── Technical
│   ├── AWS & Cloud
│   └── Career
│
├── Search
│
├── Favorites
│
└── Prompt Detail
    ├── Overview
    ├── How to Use
    ├── Required Inputs
    ├── Example
    ├── ChatGPT
    └── Gemini
```

Favorites may be implemented in MVP using localStorage rather than accounts.

---

# 6. Landing Page Requirements

The landing page is the most important entry point.

The user should be able to reach a relevant prompt within a few interactions.

## 6.1 Hero Section

The hero should communicate:

- What PromptForge is.
- That it is built for AWS SBG.
- That users can find ready-to-use prompts quickly.
- That it supports multiple LLMs.

Example messaging:

> **Your AI Prompt Toolkit for AWS SBG**

Supporting text:

> Find, understand, customize, and copy prompts built for the work AWS SBG members do every day.

Primary CTA:

> Explore Prompts

Secondary CTA:

> How It Works

---

# 7. Fast Prompt Discovery

This is a critical MVP requirement.

The landing page should provide at least three discovery mechanisms.

## 7.1 Search

A prominent search input:

> "What are you trying to do?"

Search examples:

- "Write a LinkedIn post"
- "Create an event plan"
- "Debug React code"
- "Prepare a PPT"
- "Draft an email"
- "Create a poster"

Search should match:

- Prompt title
- Description
- Category
- Tags
- Keywords

---

## 7.2 Category Navigation

Show major task categories as visually distinct cards.

Initial categories:

### Communication
- Emails
- WhatsApp messages
- Formal letters
- Announcements

### Content & Social Media
- LinkedIn posts
- Instagram captions
- Event descriptions
- Promotional content

### Events
- Event planning
- Agendas
- Reports
- Invitations

### Presentations
- PPT planning
- Slide content
- Speaker notes

### Design & Creatives
- Poster ideas
- Creative concepts
- Image-generation prompts

### Technical
- Coding
- Debugging
- Code review
- Architecture
- Documentation

### AWS & Cloud
- AWS architecture
- Deployment
- Cloud troubleshooting
- AWS explanations

### Career
- Resume analysis
- Resume improvement
- Job descriptions
- Interview preparation

---

## 7.3 Popular / Frequently Used Prompts

The homepage should show a small collection of high-value prompts.

Examples:

- Draft Professional Email
- Create LinkedIn Post
- Plan an AWS SBG Event
- Generate PPT Content
- Debug Code
- Create Poster Concept
- Analyze Resume

For MVP, popularity can be manually configured rather than analytics-driven.

---

# 8. Prompt Cards

Each prompt should appear as a concise card.

A card should contain:

- Prompt title
- Short description
- Category
- LLM availability
- Tags
- Favorite button
- Open prompt action

Example:

```text
┌─────────────────────────────────┐
│ ✉ Communication                │
│                                 │
│ Draft Professional Email        │
│                                 │
│ Create a clear and professional │
│ email for institutional or      │
│ organizational communication.   │
│                                 │
│ ChatGPT   Gemini                │
│                                 │
│              View Prompt →      │
└─────────────────────────────────┘
```

The card should NOT contain the full prompt.

---

# 9. Prompt Detail Page

This is the core product screen.

The page should clearly communicate:

1. What this prompt does.
2. When to use it.
3. How to use it.
4. What information the user needs.
5. A complete example.
6. LLM-specific prompt versions.
7. Copy action.

---

# 10. Prompt Detail Layout

Recommended structure:

```text
← Back to prompts

CATEGORY
Draft Professional Email

Short description

[ ChatGPT ] [ Gemini ]

────────────────────────────

What does this prompt do?

...

When should I use it?

...

How to use it

1. Copy the prompt.
2. Replace placeholders.
3. Select the appropriate LLM.
4. Paste it into the LLM.
5. Review the generated output.

────────────────────────────

Required Information

Recipient:
[ example ]

Purpose:
[ example ]

Context:
[ example ]

Tone:
[ example ]

────────────────────────────

Example

INPUT
...

PROMPT
...

EXPECTED USE
...

────────────────────────────

Prompt

[ LLM selector ]

┌─────────────────────────────┐
│ Full prompt                 │
│                             │
│ {{EVENT_NAME}}              │
│ {{DATE}}                    │
│ ...                         │
└─────────────────────────────┘

[ Copy Prompt ]

```

---

# 11. Placeholder System

Prompts should use a consistent placeholder syntax.

Recommended:

```text
{{PLACEHOLDER_NAME}}
```

Examples:

```text
{{EVENT_NAME}}
{{EVENT_DATE}}
{{VENUE}}
{{AUDIENCE}}
{{PURPOSE}}
{{ADDITIONAL_CONTEXT}}
```

Placeholders should be visually distinguishable from the rest of the prompt.

The MVP should allow users to manually replace placeholders.

Future versions may provide interactive input forms.

---

# 12. Example Section

Every prompt must have at least one complete example.

An example should contain:

### Scenario

What the user is trying to accomplish.

### Input

The information that would be supplied.

### Completed Prompt

The actual prompt after replacing placeholders.

### Expected Result

A brief description of the type of output the LLM should produce.

The example should be realistic and representative.

---

# 13. How-To-Use Section

Every prompt must include simple instructions.

The instructions should be written for someone who has never used the prompt before.

Standard flow:

```text
1. Read the prompt description.
2. Check the required information.
3. Replace all {{PLACEHOLDERS}}.
4. Select ChatGPT or Gemini.
5. Copy the prompt.
6. Paste it into the selected LLM.
7. Review and refine the result if necessary.
```

Prompt-specific instructions may add additional steps.

---

# 14. LLM Support

The MVP supports:

- ChatGPT
- Gemini

Each prompt may have:

```text
ChatGPT Version
Gemini Version
```

The UI should make switching between them effortless.

Recommended control:

```text
[ ChatGPT ] [ Gemini ]
```

The selected version should control the prompt displayed in the copy area.

---

# 15. LLM-Specific Prompt Requirements

Prompts should not simply be duplicated blindly.

Each LLM version should be reviewed for:

- Instruction clarity
- Formatting
- Output requirements
- Context handling
- Role/instruction structure
- Compatibility with the respective model

The application should treat the two versions as separate content fields even when they are identical.

Example data model:

```ts
interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  instructions: string[];
  inputs: PromptInput[];
  examples: PromptExample[];
  llms: {
    chatgpt: string;
    gemini: string;
  };
}
```

---

# 16. Copy Interaction

The copy button is a primary action.

Requirements:

- Copy the currently selected LLM prompt.
- Display immediate feedback.
- Avoid navigating away from the page.
- Preserve line breaks and formatting.
- Work on desktop and mobile.

Example feedback:

> ✓ Prompt copied

The feedback should disappear automatically.

---

# 17. Prompt Preview

The prompt should be displayed in a dedicated code-like/text area.

Requirements:

- Good readability.
- Monospace or carefully selected readable font.
- Horizontal scrolling only when unavoidable.
- Preserved line breaks.
- Easy scanning.
- Copy button always accessible.

The prompt should not look like raw developer code; it should feel like a polished document/tool.

---

# 18. Search Requirements

Search should be fast and client-side.

Search across:

- Title
- Description
- Category
- Tags
- Keywords

Examples:

Searching:

> LinkedIn

should return:

- LinkedIn Post
- Event Announcement
- Achievement Post
- AWS SBG Activity Post

Searching:

> debug

should return:

- Debug Code
- Debug React
- Debug AWS Lambda
- Explain Error

---

# 19. Favorites

MVP favorites should use browser localStorage.

Users should be able to:

- Favorite a prompt.
- Remove a favorite.
- View favorites.

No account is required.

If localStorage is unavailable, the feature should fail gracefully.

---

# 20. Recently Viewed

The MVP may store a small list of recently opened prompts in localStorage.

Recommended limit:

```text
5–10 prompts
```

This is valuable because users frequently repeat the same tasks.

---

# 21. Navigation Requirements

Navigation should remain simple.

Desktop:

```text
Logo | Explore | Categories | Favorites | Search
```

Mobile:

```text
Logo | Search | Menu
```

The UI should avoid excessive navigation levels.

The user should always know:

- Where they are.
- What category they are in.
- How to return.
- How to search again.

---

# 22. Visual Design Direction

The visual identity should feel:

- Modern
- Technical
- Professional
- Premium
- Developer-friendly
- AWS-SBG-oriented without attempting to imitate AWS branding

Avoid:

- Generic AI neon aesthetics.
- Excessive gradients.
- Overly flashy animations.
- Cluttered dashboards.
- Excessive glassmorphism.
- Corporate-looking legacy UI.

---

# 23. Theme

Recommended initial direction:

## Dark-first

Background:

- Very dark neutral / blue-black.

Surface:

- Slightly lighter dark cards.

Primary accent:

- Warm orange/amber inspired by cloud/build/energy themes.

Secondary accent:

- Cool blue/cyan used sparingly.

The design should remain visually distinct from official AWS branding and should not imply that the tool is an official AWS product.

---

# 24. Typography

Recommended font:

### Inter

Use:

- Semibold/bold for headings.
- Medium for labels.
- Regular for body content.

For prompt text, consider:

### JetBrains Mono

or another highly readable monospace font.

Typography should prioritize readability over decorative styling.

---

# 25. Animation & Interaction

Animations should support usability rather than distract.

Recommended:

- Page transition fade/slide.
- Card hover elevation/translation.
- Search result transitions.
- Category card hover.
- Copy button success animation.
- Favorite heart/star animation.
- Smooth tab transitions.
- Expand/collapse sections.

Avoid:

- Continuous background animation.
- Large animated hero illustrations.
- Long loading animations.
- Excessive motion.

Animation duration should generally be approximately:

```text
150ms–300ms
```

for micro-interactions.

---

# 26. Responsive Design

The application must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Desktop is the primary target.

Mobile must still support:

- Search
- Category navigation
- Prompt reading
- LLM switching
- Copying prompts
- Favorites

---

# 27. Accessibility

MVP requirements:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Sufficient color contrast.
- Accessible button labels.
- Tooltips where icons are not self-explanatory.
- No functionality dependent solely on hover.
- Reduced-motion support where practical.

---

# 28. Technical Requirements

## Frontend

Recommended:

- React
- TypeScript
- Vite

## Styling

Recommended:

- Tailwind CSS

## Icons

Recommended:

- Lucide React

## State

Use React state initially.

Use localStorage for:

- Favorites
- Recently viewed
- User UI preferences if needed

Avoid Zustand unless the application state becomes sufficiently complex.

---

# 29. Data Architecture

The MVP should be static-data driven.

Recommended structure:

```text
src/
├── data/
│   ├── categories.ts
│   └── prompts/
│       ├── communication.ts
│       ├── content.ts
│       ├── events.ts
│       ├── presentations.ts
│       ├── creatives.ts
│       ├── technical.ts
│       ├── aws.ts
│       └── career.ts
│
├── components/
├── pages/
├── hooks/
├── lib/
└── types/
```

Alternatively, prompt data may be stored as JSON/Markdown files if content volume increases.

The architecture should keep content separate from UI code.

---

# 30. Suggested Prompt Data Model

```ts
interface PromptInput {
  id: string;
  label: string;
  description?: string;
  example?: string;
  required: boolean;
}

interface PromptExample {
  scenario: string;
  inputs: Record<string, string>;
  completedPrompt: string;
  expectedResult: string;
}

interface PromptTemplate {
  id: string;
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  tags: string[];
  difficulty?: "beginner" | "intermediate" | "advanced";

  instructions: string[];

  inputs: PromptInput[];

  examples: PromptExample[];

  llms: {
    chatgpt: string;
    gemini: string;
  };

  featured?: boolean;
}
```

---

# 31. Initial MVP Prompt Set

The first release should NOT attempt to contain every possible prompt.

Target:

## 20–30 high-value prompts.

Suggested starting set:

### Communication

1. Draft Professional Email
2. Draft Formal Permission Letter
3. Draft WhatsApp Announcement
4. Draft Student Notice

### Content

5. Create LinkedIn Post
6. Create Event Announcement
7. Rewrite Content Professionally
8. Summarize Information

### Events

9. Plan Technical Event
10. Create Event Agenda
11. Create Event Report
12. Generate Event Ideas

### Presentations

13. Plan PPT
14. Generate Slide Content
15. Generate Speaker Notes

### Creatives

16. Generate Poster Concept
17. Generate Image-Generation Prompt
18. Generate Social Media Creative Ideas

### Technical

19. Generate Code
20. Debug Code
21. Explain Technical Error
22. Review Code
23. Design Software Architecture
24. Create Technical Documentation

### AWS

25. Plan AWS Architecture
26. Troubleshoot AWS Deployment
27. Design AWS Infrastructure
28. Explain AWS Service/Concept

### Career

29. Analyze Resume
30. Improve Resume

---

# 32. Landing Page Conversion Flow

The desired user journey is:

```text
Landing Page
     ↓
"What do you want to do?"
     ↓
Search / Category
     ↓
Prompt Results
     ↓
Prompt Detail
     ↓
Understand
     ↓
Select LLM
     ↓
Replace placeholders
     ↓
Copy
     ↓
Use in LLM
```

The number of unnecessary clicks should be minimized.

---

# 33. Empty States

Every empty state should be useful.

Examples:

### No Search Results

> We couldn't find a matching prompt.

Show:

- Search suggestions.
- Popular prompts.
- Browse categories.

### No Favorites

> You haven't saved any prompts yet.

CTA:

> Explore Prompts

---

# 34. Error Handling

The application should gracefully handle:

- Missing prompt data.
- Invalid prompt IDs.
- Clipboard permission failure.
- Missing localStorage.
- Unknown categories.
- Invalid URLs.

If clipboard access fails, provide a fallback such as selectable prompt text.

---

# 35. URL Structure

Prompt pages should have readable URLs.

Example:

```text
/prompts/draft-professional-email
/prompts/linkedin-post
/prompts/debug-code
/prompts/aws-architecture
```

Categories:

```text
/category/communication
/category/technical
/category/aws
```

This also makes individual prompts shareable.

---

# 36. Shareability

Every prompt should be directly shareable through its URL.

Example:

A team member can send:

> "Use this prompt for LinkedIn posts."

and share the prompt page.

The recipient should land directly on the relevant prompt without navigating from the homepage.

---

# 37. SEO / Metadata

Even though the application is primarily for an organization, basic metadata should exist.

Each prompt page should have:

- Page title.
- Description.
- Open Graph metadata where practical.
- Favicon.
- Application name.

---

# 38. Performance Requirements

The application should be extremely lightweight.

Targets:

- Fast initial load.
- Client-side search should feel instantaneous.
- No unnecessary API requests.
- Images should be optimized.
- Animations should not cause layout jank.
- Avoid large JavaScript dependencies unless justified.

The application should work well even on average college/student devices and connections.

---

# 39. Security / Privacy

Since the MVP is static:

- No sensitive user information should be stored.
- No prompt content should be sent to a backend.
- No API keys should be included.
- No LLM credentials should be stored.
- No personal information should be collected.

Clipboard operations happen locally in the browser.

---

# 40. Deployment

Recommended MVP deployment:

```text
React Build
    ↓
Static Hosting
    ↓
CloudFront / CDN
```

Possible hosting:

- Amazon S3 + CloudFront
- Cloudflare Pages
- Vercel
- Netlify

AWS S3 + CloudFront is a natural choice if the project is intended to align with the AWS SBG ecosystem.

---

# 41. Content Governance

Although the MVP is static, the prompt content should be treated as organizational content.

Every prompt should eventually support metadata such as:

```text
Author
Version
Last Updated
Status
```

Possible statuses:

```text
draft
published
deprecated
```

For MVP, these can simply exist in the data model without requiring an administration interface.

---

# 42. Future Extensibility

The architecture should make it possible to later add:

## More LLMs

- Claude
- Microsoft Copilot
- Perplexity
- Open-source models

## Prompt Builder

Allow users to create prompts from structured fields.

## Authentication

Organization login.

## Admin Dashboard

- Create prompts.
- Edit prompts.
- Publish prompts.
- Archive prompts.

## Analytics

- Most-used prompts.
- Most-used categories.
- Search queries.
- Copy frequency.

## Organization Workspaces

```text
AWS SBG
AWS Academy
Oracle Academy
Red Hat Academy
MHSSCE
```

## AI Workflow Automation

Eventually:

```text
Template
+
Context
+
LLM
+
Tools
=
Workflow
```

---

# 43. MVP Success Metrics

The MVP should be evaluated based on productivity, not number of prompts.

Track manually during initial testing:

### Discovery Time

How long does it take a user to find the required prompt?

Target:

> Under 30 seconds for common tasks.

### Prompt Preparation Time

How long does it take to prepare a prompt?

Target:

> Under 1–2 minutes for common templates.

### Usability

A new AWS SBG member should be able to use a prompt without external explanation.

### Repeat Usage

Users should naturally return to prompts they frequently need.

### Adoption

Measure:

- Number of active users during pilot.
- Frequently used prompts.
- Repeated prompt usage.

---

# 44. MVP Definition of Done

The MVP is ready when:

- [ ] Landing page is polished.
- [ ] User can search prompts.
- [ ] User can browse categories.
- [ ] 20–30 prompts are available.
- [ ] Every prompt has a clear description.
- [ ] Every prompt explains how to use it.
- [ ] Every prompt contains at least one example.
- [ ] ChatGPT and Gemini versions are available.
- [ ] User can switch between LLM versions.
- [ ] User can copy a prompt.
- [ ] Copy feedback is visible.
- [ ] Placeholders are clearly identifiable.
- [ ] Favorites work using localStorage.
- [ ] Recently viewed prompts work.
- [ ] Prompt URLs are directly shareable.
- [ ] Responsive design works on mobile and desktop.
- [ ] Keyboard navigation works.
- [ ] Empty/error states are handled.
- [ ] No backend is required.
- [ ] Production build succeeds.
- [ ] Application is deployed as a static site.

---

# 45. Recommended MVP Development Order

Do not start by creating all 30 prompts.

Build the product skeleton first.

## Phase 1 — Foundation

- React + TypeScript + Vite
- Tailwind CSS
- Routing
- Theme
- Typography
- Design tokens
- Core layout

## Phase 2 — Discovery UX

- Landing page
- Search
- Categories
- Prompt cards
- Results page

## Phase 3 — Prompt Experience

- Prompt detail page
- How-to-use section
- Required information
- Example section
- LLM switcher
- Prompt viewer
- Copy interaction

## Phase 4 — Personal Convenience

- Favorites
- Recently viewed
- LocalStorage

## Phase 5 — Content

- Populate 20–30 carefully designed prompts.
- Review ChatGPT versions.
- Review Gemini versions.
- Add examples.

## Phase 6 — Polish

- Animations
- Transitions
- Responsive behavior
- Accessibility
- Empty states
- Error handling
- SEO metadata

## Phase 7 — Deployment

- Production build
- Static hosting
- CDN
- Custom domain if desired
- Final testing

---

# 46. Design Philosophy

The application should follow one central principle:

> **Don't make users learn prompt engineering. Make prompt engineering reusable.**

The product should feel like a combination of:

- A searchable toolkit
- A documentation system
- A prompt library
- A lightweight productivity application

It should NOT feel like:

- A generic AI chatbot
- A complicated dashboard
- A prompt marketplace
- An AI-generated content platform

The value is in **speed, clarity, consistency, and reuse**.

---

# 47. Working Product Name

## PromptForge

**Tagline:**

> **Build once. Prompt better. Reuse everywhere.**

Alternative taglines:

> **The AI Prompt Toolkit for AWS SBG.**

> **Find it. Fill it. Copy it. Create.**

> **Your team's reusable AI toolkit.**

The name should remain independent from AWS trademarks and should not imply official AWS ownership or endorsement.

---

# 48. Recommended MVP Product Identity

**Product:** PromptForge

**Organization:** AWS Student Builder Group

**Primary purpose:** Reusable organizational AI prompt library

**Frontend:** React + TypeScript + Vite

**Styling:** Tailwind CSS

**Primary theme:** Dark, technical, premium

**Primary font:** Inter

**Prompt font:** JetBrains Mono

**LLMs:** ChatGPT + Gemini

**Backend:** None

**Storage:** Static prompt data + localStorage

**Deployment:** Static hosting + CDN

**Initial prompt count:** 20–30

**Primary success metric:** Time saved finding and preparing prompts

