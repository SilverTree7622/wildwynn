<template>
    <div class="">
        <MatchUpStatsMainStats v-if="props.selectedIdx === 0" />
        <MatchUpStatsMainMatchStats v-if="props.selectedIdx === 1" />
        <MatchUpStatsMainLastMatches v-if="props.selectedIdx === 2" />
        <MatchUpStatsMainTopPlayers v-if="props.selectedIdx === 3" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    selectedIdx: number;
}>();

</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>