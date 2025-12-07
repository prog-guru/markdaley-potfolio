# Mark Daley - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern, minimal design inspired by Vercel/Linear/Stripe
- 🌙 Dark mode support with system preference detection
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Smooth animations with Framer Motion
- 🔍 SEO-friendly with proper meta tags
- 🎯 Type-safe with TypeScript
- 🚀 Built with Next.js 14 App Router

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── about/             # About page
│   ├── education/         # Education page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── Section.tsx        # Section wrapper
│   ├── ExperienceCard.tsx # Experience card component
│   ├── ProjectCard.tsx    # Project card component
│   ├── SkillGroup.tsx     # Skills group component
│   ├── EducationCard.tsx  # Education card component
│   └── StatsRow.tsx       # Stats display component
├── data/                  # Data models and content
│   ├── experience.ts      # Work experience data
│   ├── projects.ts        # Projects data
│   ├── skills.ts          # Skills data
│   ├── education.ts       # Education data
│   └── contact.ts         # Contact information
└── public/                # Static assets
```

## Customization

### Update Content

Edit the data files in the `data/` directory:

- `data/experience.ts` - Update work experience
- `data/projects.ts` - Update projects
- `data/skills.ts` - Update skills
- `data/education.ts` - Update education
- `data/contact.ts` - Update contact information

### Styling

The project uses TailwindCSS. Customize colors, fonts, and spacing in:

- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles

### Theme

Dark mode is implemented using a custom ThemeProvider. The theme preference is stored in localStorage and respects system preferences.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and proprietary.
