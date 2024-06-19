<template>
	<Html>
		<Head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
			<Link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
			<meta name="og:type" content="website" />
			<meta name="twitter:card" content="photo" />
			<Script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></Script>
			<Script defer src="https://animaapp.s3.amazonaws.com/launchpad-static/launchpad.js"></Script>
		</Head>

		<Body :style="'margin: 0; background-color: #001226'">
			<NuxtLoadingIndicator />
			<input type="hidden" id="anPageName" name="page" value="frmu95mobile" />
			<NuxtPage />
			<CommonLeftMain />
		</Body>
		<SignModal />
	</Html>
</template>

<script lang="ts" setup>
import initDataJson from '~/dummy/initData.json';
import type { TInitData } from "~/types";

const {
	INIT_DATA,
} = useRuntimeConfig().public.CONSTANTS;

const selectorStore = useSelectorStore();
const cacheStore = useCacheStore();

const getInitData = async () => {
	let initData: TInitData | {} = JSON.parse(localStorage.getItem(INIT_DATA) ?? '{}');
	// if (!Object.keys(initData).length) {
	// 	const res = await useApiFetch<TInitData>(
	// 		'loading',
	// 		{ method: 'GET', },
	// 	);
	// 	initData = res.data['data'] ?? {};
	// }
	// localStorage.setItem(INIT_DATA, JSON.stringify(initData));
	const res = await useApiFetch<TInitData>(
		'loading',
		{ method: 'GET', },
	);
	initData = res.data['data'] ?? {};
	selectorStore.onMounted(
		initData['st_time'] ?? [],
		initData['st_odds'] ?? [],
		initData['st_sports'] ?? [],
	);
};

onMounted(async () => {
	await getInitData();
	await nextTick();
	cacheStore.onMountedBased();
});

onBeforeUnmount(() => {
	cacheStore.onBeforeUnmountBased();
});
</script>

<style>
@import '@/public/css/left.css';
@import '@/public/css/frmu95mobile.css';
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';
</style>