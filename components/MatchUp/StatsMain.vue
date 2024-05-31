<template>
    <div class="">
        <MatchUpStatsMainTab :selectedIdx="opt.selectedIdx" />
        <MatchUpStatsMainStats v-if="opt.selectedIdx === 0" />
        <MatchUpStatsMainMatchStats v-if="opt.selectedIdx === 1" />
    </div>
</template>

<script setup lang="ts">
const opt = reactive({
    selectedIdx: <number> 0,
});
</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>