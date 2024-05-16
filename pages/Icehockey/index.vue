<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :sName="'IceHockey'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <IceHockeyLiveMain
            v-if="opt.tab === 'live'"
            :result_league="opt.result.league"
        />
        <IceHockeyFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league="opt.result.league"
        />
        <IceHockeyOddsMain
            v-if="opt.tab === 'odds'"
            :result_league="opt.result.league"
        />
        <IceHockeyResultMain
            v-if="opt.tab === 'result'"
            :result_league="opt.result.league"
        />
        <IceHockeyLeagueMain
            v-if="opt.tab === 'league'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: <string> route.query['tab'] as string ?? 'live',
    result: <any> {
        nav_code: 'S007',
        sName: 'dummy_sName',
        league: [],
    },
});

watch(
    () => route.fullPath,
    async (p) => {
        opt.tab = route.query['tab'] as string;
        opt.result.league = [];
        opt.isPending = true;
        await res();
    }
);

const res = async () => {
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
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    await res();
});

onBeforeUnmount(async () => {
    // TODO: save to localstorage for 
});

</script>

<style scoped>

</style>