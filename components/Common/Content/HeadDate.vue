<template>
    <div
        v-if="props.hasLeagueTag"
        :class="props.idx === 0 ? 'frame-384' : 'frame-17'"
        @click="goStore.go_league('home')" style="cursor: pointer"
    >
        <img v-if="props.src" class="flag_-circle_eng" :src="props.src" :alt="props.alt ?? props.title" />
        <div :class="props.src ? `premier-league-lE9kB9 premier-league headline2`: `x04092024-tue valign-text-middle headline2`">
            {{ props.title }}
        </div>
    </div>
    <img v-else class="line-1-head" src="/img/line-1@2x.png" alt="Line 1" />
</template>

<script setup lang="ts">
const props = defineProps<{
    idx: number;
    title: string;
    hasLeagueTag?: boolean;
    src?: string;
    alt?: string;
}>();

const goStore = useGoStore();

</script>

<style scoped>
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

.x04092024-tue {
    color: var(--bk);
    font-weight: 600;
    line-height: normal;
    position: relative;
    white-space: nowrap;
    width: fit-content;
}

.line-1-head {
  background-color: transparent;
  height: 1px;
  left: 6.94%;
  object-fit: cover;
  position: relative;
  /* top: 152px; */
  width: 86.67%;
}
</style>