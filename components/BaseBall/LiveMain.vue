<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="(league, idx) in props.result_league_list">
                <CommonContentSportLive
                    :idx="idx"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TBaseBallFixtures } from '~/types/BaseBall/fixtures';

const props = defineProps<{
    result_league_list: TBaseBallFixtures[];
}>();

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>

</style>