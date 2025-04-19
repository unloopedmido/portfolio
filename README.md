# My Portfolio

This is my personal portfolio site, built with Next.js and TailwindCSS.
It showcases my projects, skills, and includes a contact form.

## Live Demo

<https://thelooped.tech/>

## Tech Stack

- Next.js 15.3.0 (App Router)  
- React & TypeScript
- TailwindCSS  

## Features

- Hero section with code‑style intro  
- Projects gallery (dynamically loaded from `data.json`)  
- Contact form (server action → Discord webhook)  
- Minimal spam protection via honeypot & rate‑limit  

## Getting Started

```bash
git clone https://github.com/unloopedmido/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open <http://localhost:3000> in your browser.

## Environment Variables

Create a `.env.local`:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/…
```

## Build & Deploy

```bash
pnpm build
pnpm start
```

_Vercel will pick this up automatically if you link the repo._
