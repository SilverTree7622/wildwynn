<template>
    <div class="contents_-football">
        <template v-for="(league, idx) of props.result_league">
            <CommonContentLeagueOdds :idx="idx" :date="league.date" :isLast="chckIsLast(idx)" />
        </template>
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

<style>
.contents_-football {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    padding: 0px 10px 8px;
    position: relative;
    width: 100%;
}
</style>