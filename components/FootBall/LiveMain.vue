<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template
                v-for="(league, idx) in props.result_league_list"
                :key="`${ idx }-0`"
            >
                <CommonContentSportLive
                    ref="$live"
                    :idx="idx"
                    :league="league"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonLiveRealTime } from "~/types/Common/Live";
import type { TFootBallSchedule } from "~/types/FootBall/schedule";

const props = defineProps<{
    result_league_list: TFootBallSchedule[];
}>();

const $live = ref();

const update = (idx: number, newLeague: TCommonLiveRealTime) => {
    $live.value[idx].update(newLeague);
};

onMounted(async () => {
    await nextTick();
});

onBeforeUnmount(() => {

});

defineExpose({
    update,
});
</script>

<style scoped>

</style>