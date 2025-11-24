# Kids Choice INC

A modern marketing and contact portal site built for a wheelchair-accessible transportation company in New Jersey.  
This project delivers a clean public experience with practical, production-ready functionality. Visitors can learn about services, submit contact forms, or apply for driving positions, and those submissions go directly to the team’s inbox.

---

## Overview

Accessible Journeys INC is a multi-page React app that focuses on accessibility, trust, and clarity.  
The design tells a clear brand story while keeping everything responsive and easy to use.

- Pages include Home, Fleet, Services, About, Careers, and Contact.  
- The interface uses gradients, subtle motion, and photography to stay engaging without sacrificing readability.  
- Deployment is handled through **Vercel**, and serverless email functions make sure messages reach the right people instantly.

---

## Features

- **Wheelchair and School Transport Pages:** Explain safety protocols, vehicle accessibility, and what families and schools can expect.  
- **Validated Contact Form:** Uses `react-hook-form` and `zod` for strong validation with toast notifications for success and errors.  
- **Driver Application Form:** Supports file uploads, collects experience details through dialogs, and validates data before sending.  
- **Service Area Map:** Embedded Google Map to show coverage and quick-call options for urgent bookings.  
- **Consistent Design System:** Built with `shadcn/ui` and Tailwind CSS for a unified look and accessible components.

---

## How It’s Built

The site uses a **React + Vite** setup with a focus on performance, maintainability, and accessibility.

| Area | Tools | Purpose |
|------|-------|----------|
| **Front-End** | React 18, Vite | Fast, modular single-page architecture |
| **Styling** | Tailwind CSS, shadcn/ui, Radix UI | Accessible and consistent design |
| **Routing** | React Router | Simple and predictable navigation |
| **Forms and Validation** | React Hook Form, Zod | Schema-based validation for clean submissions |
| **Backend** | Vercel Serverless Functions, Nodemailer | Handles emails and file uploads securely |

---

## Local Setup

```bash
# install dependencies
npm install

# start development
npm run dev

# build for production
npm run build

# preview the production build
npm run preview
