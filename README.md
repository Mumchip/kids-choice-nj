# Accessible Journeys INC

Modern marketing and operations site for a New Jersey–based wheelchair-accessible transportation company. The project blends a polished public-facing experience with production-ready forms that deliver leads and driver applications straight to the team’s inbox.

## Overview

- Multi-page React app that tells the brand story (home, fleet, services, about, careers, and contact).
- Real-world focus on accessibility, trust, and conversion with prominent calls to action and ADA language.
- Responsive UI with layered gradients, motion, and photography to keep the experience lively without sacrificing clarity.
- Built to deploy on Vercel with serverless email handlers so form submissions reach the right people instantly.

## Feature Highlights

- **Wheelchair + School Services:** Dedicated pages outlining vehicle capabilities, safety protocols, and FAQs so families and districts know what to expect.
- **Contact Form with Validation:** React Hook Form + Zod enforce clean submissions; success/errors are surfaced via toast notifications.
- **Driver Application Workflow:** File-upload-ready form for licenses and abstracts, dynamic dialogs for experience details, and server-side validation before emails are sent.
- **Service Area Map:** Embedded Google Map clarifies geographic coverage, plus quick-call CTAs for urgent bookings.
- **Reusable Theme System:** shadcn/ui + Tailwind design tokens keep colors, typography, and glassmorphism effects consistent across pages.

## Architecture

- **Front-end:** Vite + React Router manage a traditional marketing site experience while staying snappy with code-splitting and Tailwind utility classes.
- **Design System:** Radix primitives + shadcn/ui components (buttons, dialogs, form fields) provide accessible, keyboard-friendly interactions.
- **Forms & Validation:** `react-hook-form` with `zod` schemas mirrors production onboarding flows and prevents bad data.
- **Serverless API:** Vercel Functions (`api/contact.ts`, `api/driver.ts`) parse multipart form data with Formidable, attach uploads, and dispatch emails via Nodemailer.
- **Email Layer:** `_mailer.ts` centralizes SMTP configuration (Porkbun Mail) and caches the transporter for performance.

## Tech Stack

- React 18 + TypeScript
- Vite build tooling
- Tailwind CSS with custom theme tokens
- shadcn/ui & Radix UI component primitives
- React Router DOM for navigation
- React Hook Form + Zod validation schemas
- Nodemailer on Vercel serverless functions

## Local Development

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

> Bun is also supported (`bun install` / `bun run dev`) thanks to the existing `bun.lockb`.

## Environment Variables

Create a `.env` (or Vercel project environment) with:

| Name | Purpose |
| --- | --- |
| `PORKBUN_SMTP_HOST` | SMTP host for outgoing mail. |
| `PORKBUN_SMTP_PORT` | SMTP port (465 for SSL, 587 for TLS). |
| `PORKBUN_SMTP_USER` | Auth user / from address. |
| `PORKBUN_SMTP_PASS` | Auth password or app-specific token. |
| `CONTACT_TO` | Destination email for the public contact form. |
| `DRIVER_TO` | Destination email for driver/job applications. |

Both serverless handlers reject requests if these values are missing, preventing silent failures in production.

## Project Structure

```
accessible-journeys-inc/
├── api/                 # Vercel serverless functions for contact + driver forms
├── public/              # Favicon, static assets, SEO metadata
├── src/
│   ├── assets/          # Marketing imagery used across pages
│   ├── components/      # Navbar, footer, cards, scroll manager, shadcn UI exports
│   ├── hooks/           # Toast + responsive helpers
│   ├── lib/             # Utility helpers
│   └── pages/           # Route components (home, services, contact, careers, etc.)
├── tailwind.config.ts   # Theme tokens and design system
├── vite.config.ts       # Vite + path aliases
└── vercel.json          # Deployment config for serverless routes
```

## Deployment Notes

- Designed for Vercel. Static assets are pre-built with `vite build`, while `/api/*` routes stay dynamic.
- `vercel.json` exposes the serverless endpoints, so publishing is as simple as connecting the repo and setting env vars.
- Form submissions send rich HTML emails (with text fallbacks) and clean up uploaded files once dispatch succeeds.

## Portfolio Talking Points

- Demonstrates the ability to ship a full-stack marketing site—design system, animations, validation, and serverless integration included.
- Highlights care for accessibility (ADA statements, wheelchair-first messaging, keyboard-friendly UI).
- Shows experience working with third-party SMTP and file uploads inside a serverless environment.
- Clear conversion strategy with multiple CTAs, testimonials, and trust signals tailored to real passengers and districts.

## Next Steps

- Add analytics + form conversion tracking via Vercel Analytics or Plausible.
- Layer in automated tests (React Testing Library) for critical forms and API handlers.
- Extend the driver workflow with an applicant dashboard or CRM integration.
- Localize the content for Spanish-speaking families in New Jersey.
