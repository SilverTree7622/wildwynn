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
	modules: ['@pinia/nuxt', '@nuxt/ui', "@nuxtjs/i18n"],

	i18n: {
		strategy: 'prefix_except_default',
		defaultLocale: 'en',
	},
	
	runtimeConfig: {
		public: {
			apiURL: '',
			CONSTANTS: {
				INIT_DATA: 'WILDWYNN_INIT_DATA',
				FETCH_TRIAL_MAX_CNT: 3,
				ONE_DAY_MILLISECOND: 24 * 60 * 60 * 1000,
				MAX_PAGINATION_CONTENT: 10,
			},
		},
	},
});