// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	components: true,

    postcss: {
        plugins: {
            // tailwindcss: {},
            // autoprefixer: {}
        },
    },
	modules: [
		'@pinia/nuxt',
		// '@ant-design-vue/nuxt',
	],
});
