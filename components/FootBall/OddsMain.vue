<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league">
                <CommonContentSportOdds :idx="idx" :date="league.date" :isLast="chckIsLast(idx)" :league="league"/>
            </template>
        </div>
    </div>
</template>


<script setup lang="ts">
const props = defineProps<{
    result_league;
}>();

const chckIsLast = (idx: number) => {
    return idx === (props.result_league.length - 1);
};

</script>

<style scoped></style>