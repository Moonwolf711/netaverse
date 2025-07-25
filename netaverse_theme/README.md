# netaverse_theme

This repository contains a Shopify Online Store 2.0 theme with a Three.js hero section and optional galaxy effects.

## Setup

1. Install dependencies:

1. Install dependencies:

```bash
npm install
```

2. Build assets:

```bash
npm run build
```

3. Preview the theme locally:

```bash
shopify theme dev --path netaverse_theme
```

4. Push the theme to your store:

```bash
shopify theme push --path netaverse_theme
```

5. Deploy the Cloudflare worker:

```bash
cd serverless/cloudflare
wrangler publish
```

Copy `.env.example` to `.env` and fill in your credentials. GitHub Actions will deploy on every push to `main`.
