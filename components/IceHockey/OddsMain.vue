<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportOdds 
                    :idx="idx"
                    :isLast="chckIsLast(idx)"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TIceHockeyFixtures } from '~/types/IceHockey/fixtures';

const props = defineProps<{
    result_league_list: TIceHockeyFixtures[];
}>();

const chckIsLast = (idx: number) => {
    return idx === (props.result_league_list.length - 1);
};

</script>

<style scoped></style>