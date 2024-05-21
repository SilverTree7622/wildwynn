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
            :result_league="list.sortedLeagueList"
        />
        <LeagueTableMain
            v-if="opt.tab == 'table'"
        />
        <LeagueOddsMain
            v-if="opt.tab == 'odds'"
            :result_league="list.sortedLeagueList"
        />
        <LeagueResultMain
            v-if="opt.tab == 'result'"
            :result_league="list.sortedLeagueList"
        />
        <LeaguePlayersMain
            v-if="opt.tab == 'players'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const filterStore = useFilterStore();
const dateStore = useDateStore();
const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: <string> route.query['tab'] as string ?? 'matchup',
    result: <any> {
        nav_code: '',
        sName: 'dummy_sName',
        league: [],
    },
});

const list = reactive({
    sortedLeagueList: <any[]> [],
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

watch(
    () => dateStore.getDate(),
    async (p) => {
        sort();
    }
);

watch(
    () => filterStore.getTimeIsToggled(),
    async (p) => {
        sort();
    }
);

const sort = () => {
    list.sortedLeagueList = filterStore.sortList(opt.result.league, dateStore.getDate());
    console.log('list.sortedLeagueList: ', list.sortedLeagueList);
};

const res = async () => {
    setTimeout(() => {
        const getTime = (day: number) => {
            const tmpDate = new Date(new Date().getTime() - (day * 24 * 60 * 60 * 1000));
            tmpDate.setTime(tmpDate.getTime() + (Math.random() * 5 * 60 * 1000));
            return tmpDate;
        };
        opt.result.league.push(
            { lg_name: 'dummy_lg_name1-1', date: getTime(0) },
            { lg_name: 'dummy_lg_name1-2', date: getTime(0) },
            { lg_name: 'dummy_lg_name1-3', date: getTime(0) },
            
            { lg_name: 'dummy_lg_name2-1', date: getTime(1) },
            { lg_name: 'dummy_lg_name2-2', date: getTime(1) },
            { lg_name: 'dummy_lg_name2-3', date: getTime(1) },
            
            { lg_name: 'dummy_lg_name3-1', date: getTime(2) },
            { lg_name: 'dummy_lg_name3-2', date: getTime(2) },
            { lg_name: 'dummy_lg_name3-3', date: getTime(2) },

            { lg_name: 'dummy_lg_name4-1', date: getTime(3) },
            { lg_name: 'dummy_lg_name4-2', date: getTime(3) },
            { lg_name: 'dummy_lg_name4-3', date: getTime(3) },
            
            { lg_name: 'dummy_lg_name5-1', date: getTime(4) },
            { lg_name: 'dummy_lg_name5-2', date: getTime(4) },
            { lg_name: 'dummy_lg_name5-3', date: getTime(4) },
        );
        sort();
        // opt.result.dateList.push(
        //     '04/09/2024, Tue',
        //     '04/08/2024, Mon'
        // );
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