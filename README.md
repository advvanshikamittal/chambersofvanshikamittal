# Lawyer Website (Next.js + Azure Static Web Apps) + Gmail Contact Form

## Features
- Next.js App Router pages: Home, Practice Areas, Blog (placeholder), Contact
- Contact form posts to /api/contact
- Server route sends email via Gmail SMTP using an App Password (2-Step Verification required)

## Local setup
1) Install deps
   npm install

2) Create .env (copy from .env.example)
   cp .env.example .env

3) Run
   npm run dev

Open http://localhost:3000

## Gmail configuration
- Use Google account 2-Step Verification and generate an App Password (16-digit code).
- Put it in .env as GMAIL_APP_PASS.

## Deploy to Azure Static Web Apps
Azure Static Web Apps supports deploying Next.js sites (including hybrid Next.js support as documented by Microsoft Learn).
See Microsoft Learn for Next.js on Azure Static Web Apps:
- Next.js support overview: https://learn.microsoft.com/en-us/azure/static-web-apps/nextjs
- Deploy hybrid Next.js tutorial: https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid
- Deploy static export tutorial: https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-static-export

In Azure Static Web Apps configuration, set these environment variables:
- GMAIL_USER
- GMAIL_APP_PASS
- CONTACT_TO
- CONTACT_SUBJECT_PREFIX (optional)

## Next steps (optional)
- Add a headless CMS (Sanity/Contentful/Strapi) for real blog publishing workflow
- Add spam protection: CAPTCHA and/or rate limiting
- Add SEO metadata + sitemap + structured data