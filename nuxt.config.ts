// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	components: true,

	css: ['@/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	nitro: {
		preset: 'github-pages'
	},
	modules: [
		'@pinia/nuxt',
		'@nuxt/ui',
	],

	runtimeConfig: {
		public: {
			CONSTANTS: {
				ONE_DAY_MILLISECOND: 24 * 60 * 60 * 1000,
			},
		},
	},
});
