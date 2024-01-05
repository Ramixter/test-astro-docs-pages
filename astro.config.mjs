import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Para generar un mapa del sitio
	site: 'https://ramixter.github.io',
	base: '/test-astro-docs-pages',
	integrations: [
		starlight({
			title: 'GitLab - Ramiro Torres G',
			logo: {
				// PARA CAMBIAR EL LOGO EN MODO OSCURO/CLARO:
				light: './src/assets/1650555363100.jpg',
				dark: './src/assets/1650555363100.jpg',
			},
			social: {
				// discord: 'https://astro.build/chat',
				github: 'https://github.com/Ramixter',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
						{ label: 'Test', link: '/guides/example-2/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
