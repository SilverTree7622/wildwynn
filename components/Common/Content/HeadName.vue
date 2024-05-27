<template>
	<div :class="props.idx === 0 ? 'frame-384' : 'frame-17'">
		<div class="flag_-circle_br"></div>
		<div class="premier-league valign-text-middle">
			{{ props.name }}
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	idx: number;
	name: string;
}>();

const dateStore = useDateStore();

</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';

.flag_-circle_br {
	background-image: url(../img/flag-circle-br@2x.png);
	background-size: 100% 100%;
	height: 25px;
	position: relative;
	width: 25px;
}

.premier-league {
  color: var(--bk);
  font-weight: 600;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.frame-384 {
	align-items: center;
	align-self: stretch;
	background-color: var(--ctgray);
	border-radius: 10px 10px 0px 0px;
	display: flex;
	gap: 6px;
	height: 34px;
	padding: 4px 13px;
	position: relative;
	width: 100%;
}

.frame-17 {
	align-items: center;
	align-self: stretch;
	background-color: var(--ctgray);
	display: flex;
	gap: 6px;
	height: 34px;
	padding: 4px 13px;
	position: relative;
	width: 100%;
}
</style>
