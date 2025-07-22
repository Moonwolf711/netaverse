# netaverse_theme

This repository contains a Shopify Online Store 2.0 theme with a Three.js hero section and optional galaxy effects.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build assets:

   ```bash
   npm run build
   ```

3. Push the theme:

   ```bash
   shopify theme push --path netaverse_theme
   ```

4. Deploy the Cloudflare worker:

   ```bash
   cd serverless/cloudflare
   wrangler publish
   ```

Copy `.env.example` to `.env` and fill in your credentials.  
GitHub Actions will deploy on every push to `main`.
