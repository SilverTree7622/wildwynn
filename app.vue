<template>
	<Html>
		<Head>
			<meta charset="utf-8" />
			<!--<meta name=description content="This site was generated with Anima. www.animaapp.com"/>-->
			<!-- <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> -->
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
			<NuxtLayout :name="'page'">
				<NuxtPage :key="$route.fullPath" />
			</NuxtLayout>
			<CommonLeftMain />
		</Body>
	</Html>
</template>

<script lang="ts" setup>

</script>

<style>
@import '@/public/css/left.css';
@import '@/public/css/frmu95mobile.css';
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';
</style>