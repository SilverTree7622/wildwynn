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
	// app: {
		// pageTransition: {
		// 	name: 'page',
		// 	mode: 'out-in',
		// 	onBeforeEnter(el) {
		// 		console.log('el from onBeforeEnter: ', el);
		// 		el['style'].opacity = 0
		// 	},
		// 	onEnter(el, done) {
		// 		console.log('el from onEnter: ', el);
		// 		setTimeout(() => {
		// 			el['style'].opacity = 1
		// 			done()
		// 			console.log('el from onEnter done: ', el);
		// 		}, 300)
		// 	},
		// 	onLeave(el, done) {
		// 		console.log('el from onLeave: ', el);
		// 		el['style'].opacity = 0
		// 		setTimeout(
		// 			() => {
		// 				done()
		// 				console.log('el from onEnter done: ', el);
		// 			},
		// 		300)
		// 	}
		// }
		// layoutTransition: {
		// 	// css: false,
		// 	name: 'tabcontent',
		// 	mode: 'out-in',
		// },
		// viewTransition: false,
	// },
	modules: [
		'@pinia/nuxt',
	],
});
