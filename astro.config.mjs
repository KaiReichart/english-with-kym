// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages project site (no custom domain yet). To move to a custom
	// domain later: remove `base` and change `site` to the new domain.
	site: 'https://kaireichart.github.io',
	base: '/english-with-kym',
	i18n: {
		defaultLocale: 'de',
		locales: ['de', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
