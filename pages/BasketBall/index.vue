<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :sName="'BasketBall'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <BasketBallLiveMain
            v-if="opt.tab === 'live'"
            :result_league="list.sortedLeagueList"
        />
        <BasketBallFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league="list.sortedLeagueList"
        />
        <BasketBallOddsMain
            v-if="opt.tab === 'odds'"
            :result_league="list.sortedLeagueList"
        />
        <BasketBallResultMain
            v-if="opt.tab === 'result'"
            :result_league="list.sortedLeagueList"
        />
        <BasketBallLeagueMain
            v-if="opt.tab === 'league'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">

const filterStore = useFilterStore();
const dateStore = useDateStore();
const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: route.query['tab'] as string ?? 'live',
    result: <any> {
        nav_code: 'S003',
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
};

const res = async () => {
    setTimeout(() => {
        // tmp for dummies
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
        opt.isPending = false;
    }, Math.random() * 1 * 1000);
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    await res();
});

onBeforeUnmount(async () => {
    // TODO: save to localstorage for 
    filterStore.init();
});
</script>

<style scoped>

</style>