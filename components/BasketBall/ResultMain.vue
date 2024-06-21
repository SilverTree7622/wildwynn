<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportResult
                    :idx="idx"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TBasketBallFixtures } from '~/types/BasketBall/fixtures';

const props = defineProps<{
    result_league_list: TBasketBallFixtures[];
}>();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
</style>