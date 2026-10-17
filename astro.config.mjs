// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: set `site` to the production domain once it is known
	// (needed for absolute canonical/hreflang URLs and a future sitemap).
	i18n: {
		defaultLocale: 'de',
		locales: ['de', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
