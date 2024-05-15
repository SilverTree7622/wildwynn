<template>
    <NuxtLayout
        name="leaguecontent"
        :isPending="opt.isPending"
        :sName="'League'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <LeagueMatchUpMain
            v-if="opt.tab == 'matchup'"
            :result_dateList="opt.result.dateList"
        />
        <LeagueTableMain
            v-if="opt.tab == 'table'"
        />
        <LeagueOddsMain
            v-if="opt.tab == 'odds'"
            :result_dateList="opt.result.dateList"
        />
        <LeagueResultMain
            v-if="opt.tab == 'result'"
            :result_dateList="opt.result.dateList"
        />
        <LeaguePlayersMain
            v-if="opt.tab == 'players'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: <string> 'matchup',
    result: <any> {
        nav_code: '',
        sName: 'dummy_sName',
        league: [],
        dateList: [],
    },
});
opt.tab = route.query['tab'] as string ?? 'matchup';

onMounted(async () => {
    opt.isPending = true;
    await nextTick();

    setTimeout(() => {
        opt.result.dateList.push(
            '04/09/2024, Tue',
            '04/08/2024, Mon'
        );
        opt.isPending = false;
    }, Math.random() * 3 * 1000);
});

onBeforeUnmount(async () => {
    // TODO: save to localstorage for 
});

</script>

<style scoped>

</style>