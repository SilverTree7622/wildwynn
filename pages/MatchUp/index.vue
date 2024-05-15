<template>
    <NuxtLayout
        name="matchupcontent"
        :isPending="opt.isPending"
        :sName="'MatchUp'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <MatchUpStatsMain
            v-if="opt.tab === 'stats'"
        />
        <MatchUpNavitalkMain
            v-if="opt.tab === 'navitalk'"
        />
        <MatchUpOddsMain
            v-if="opt.tab === 'odds'"
        />
        <MatchUpLineUpMain
            v-if="opt.tab === 'lineup'"
        />
        <MatchUpH2hMain
            v-if="opt.tab === 'h2h'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: <string> 'stats',
    result: <any> {
        nav_code: '',
        sName: 'dummy_sName',
        league: [],
    },
});
opt.tab = route.query['tab'] as string ?? 'stats';

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
definePageMeta({ layout: false });
</script>

<style scoped>

</style>