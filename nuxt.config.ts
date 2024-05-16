// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,
	components: true,

	nitro : {
		preset : 'github-pages' 
	},
	modules: [
		'@pinia/nuxt',
	],
});
