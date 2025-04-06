# Nuxt 3 Landing Page Starter

A boilerplate project for quickly building beautiful and performant landing pages using Nuxt 3.

This starter includes:

*   **Nuxt 3:** The latest version of the intuitive Vue framework.
*   **Tailwind CSS:** Integrated via the `@nuxtjs/tailwindcss` module for rapid UI development.
*   **Image Optimization:** Using `@nuxt/image` for optimized image delivery.
*   **Internationalization (i18n):** Setup with `@nuxtjs/i18n` for multi-language support (EN/FR by default).
*   **Basic SEO:** Default meta tags (title, description) configured in `nuxt.config.js`.
*   **Robots.txt:** Managed via the `@nuxtjs/robots` module.
*   **Component Structure:** Pre-defined directories (`components/common`, `components/sections`) for organization.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Customization

*   **SEO:** Update default title, description, and language in the `app.head` section of `nuxt.config.js`.
*   **Styling:** Modify `tailwind.config.js` to customize your theme. Add global styles in `assets/css/main.css` (uncomment the `css` entry in `nuxt.config.js` if you create this file).
*   **Components:** Add reusable UI elements to `components/common` and page sections to `components/sections`.
*   **Translations:**
    *   Add/modify language files in the `locales/` directory (e.g., `en.json`, `fr.json`).
    *   Update the `locales` array in the `i18n` section of `nuxt.config.js`.
    *   Use the `$t('your.key')` function in your Vue templates/scripts to display translated strings.
*   **Robots.txt:** Configure rules in `nuxt.config.js` under the `robots` key if needed (refer to `@nuxtjs/robots` documentation).
*   **Images:** Place static images in the `public/` directory. Use `<NuxtImg>` or `<NuxtPicture>` components for optimized rendering (refer to `@nuxt/image` documentation).

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) and module documentation for more advanced configuration.
