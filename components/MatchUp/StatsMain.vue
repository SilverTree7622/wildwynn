<template>
    <div class="">
        <MatchUpStatsMainTab
            :selectedIdx="opt.selectedIdx"
            @selectTab="clickTab"
        />
        <MatchUpStatsMainStats v-if="opt.selectedIdx === 0" />
        <MatchUpStatsMainMatchStats v-if="opt.selectedIdx === 1" />
        <MatchUpStatsMainLastMatches v-if="opt.selectedIdx === 2" />
        <MatchUpStatsMainTopPlayers v-if="opt.selectedIdx === 3" />
    </div>
</template>

<script setup lang="ts">
const opt = reactive({
    selectedIdx: <number> 0,
});

const clickTab = (idx: number) => {
    opt.selectedIdx = idx;
};
</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>