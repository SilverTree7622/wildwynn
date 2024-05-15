<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :sName="'Tennis'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <TennisLiveMain
            v-if="opt.tab === 'live'"
            :result_league="opt.result.league"
        />
        <TennisFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league="opt.result.league"
        />
        <TennisOddsMain
            v-if="opt.tab === 'odds'"
            :result_league="opt.result.league"
        />
        <TennisResultMain
            v-if="opt.tab === 'result'"
            :result_league="opt.result.league"
        />
        <TennisLeagueMain
            v-if="opt.tab === 'league'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: <string> 'live',
    result: <any> {
        nav_code: 'S006',
        sName: 'dummy_sName',
        league: [],
    },
});
opt.tab = route.query['tab'] as string ?? 'live';

onMounted(async () => {
    opt.isPending = true;
    await nextTick();

    setTimeout(() => {
        opt.result.league.push(
            { lg_name: 'dummy_lg_name' },
            { lg_name: 'dummy_lg_name2' },
            { lg_name: 'dummy_lg_name3' },
            { lg_name: 'dummy_lg_name4' },
            { lg_name: 'dummy_lg_name5' },
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