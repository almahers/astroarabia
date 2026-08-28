# AstroArabia

[🇸🇦 العربية](./README.md) | [🇬🇧 English](./README.en.md)

[![License: MIT](https://img.shields.io/badge/license-MIT-1f6b58?style=flat-square)](./LICENSE)
![Lighthouse 100](https://img.shields.io/badge/Lighthouse-100-16a34a?style=flat-square)
![RTL-first](https://img.shields.io/badge/RTL-first-1f6b58?style=flat-square)
![Zero JS](https://img.shields.io/badge/Zero-JS-102a2b?style=flat-square)

<img src="./public/og-default.svg" alt="AstroArabia template preview" width="1200" />

AstroArabia is an open-source, Arabic-first Astro starter for the Saudi and wider Arabic technical community. It gives teams a fast, clear path to launch company sites, digital products, portfolios, and campaign pages with native RTL support and minimal client-side JavaScript.

## Highlights

- Built with Astro for fast, static-first output.
- Integrated with Tailwind CSS v4 and a centralized color, spacing, and typography system.
- RTL-first layouts, logical spacing, and direction-aware interactions.
- Dark mode powered by the Tailwind `dark:` variant, with visitor preference persisted locally.
- SEO-ready defaults including canonical URLs, Open Graph metadata, and generated sitemaps.
- Five production-ready routes: agency, SaaS, documentation, portfolio, and landing page.
- Reusable CVA-powered UI primitives for buttons and cards.

## Quick Start

```bash
npm create astro@latest -- --template https://github.com/example/astroarabia
```

Then install dependencies and start the local server:

```bash
cd astroarabia
npm install
npm run dev
```

## Project Structure

```text
src/
├── components/
│   ├── ui/                 # CVA-powered Button and Card primitives
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   └── QuoteForm.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro         # Home page
│   ├── agency/             # Agency and services preset
│   ├── saas/               # SaaS preset
│   ├── docs/               # Documentation preset
│   ├── portfolio/          # Portfolio preset
│   └── landing/            # Landing page preset
└── styles/
    └── global.css
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist` |
| `npm run check` | Validate Astro components and types |
| `npm test` | Run the project test suite |
| `npm run lint` | Run code-quality checks |

## Brand Customization

Update `tailwind.config.mjs` to change the visual identity from one place: colors, fonts, and spacing. The project ships IBM Plex Sans Arabic locally for body text and Alexandria for headings.

## Template Settings

Copy `.env.example` to `.env`, then set `PUBLIC_WHATSAPP_NUMBER` to your project’s WhatsApp number using digits only and without the `+` prefix. The bundled number is intentionally a placeholder so the template never points to a personal number.

The quote form is a ready-to-customize interface only: it does not submit data and does not require a particular provider. Connect it to the approach that suits your project, such as Cloudflare Pages Functions, a Worker, or an external form provider, with appropriate validation and protection.

AstroArabia is free for the Arabic web community under the [MIT License](./LICENSE). Replace the example links and content with your project identity before a public launch.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/example/astroarabia)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/example/astroarabia)

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy%20to-Cloudflare%20Pages-f38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://dash.cloudflare.com/?to=/:account/pages/new/provider/github)

For manual deployment, use the following build command and publish the `dist` directory:

```bash
npm run build
```

## Contributing and License

Contributions that improve the Arabic web experience are welcome. Read the [contribution guide](./CONTRIBUTING.md) before opening a pull request.

Released under the [MIT License](./LICENSE).
