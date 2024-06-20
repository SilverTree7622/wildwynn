<template>
    <NuxtLayout
        name="tabcontent"
        :isPending="opt.isPending"
        :pageIsPending="page.isPending"
        :isOutOfContent="opt.isOutOfContent"
        :sName="'FootBall'"
        :tab="opt.tab"
        :result="opt.result"
    >
        <FootBallLiveMain
            v-if="opt.tab === 'live'"
            :result_league_list="list.sortedList"
        />
        <FootBallFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league_list="list.sortedList"
        />
        <FootBallOddsMain
            v-if="opt.tab === 'odds'"
            :result_league="list.sortedList"
        />
        <FootBallResultMain
            v-if="opt.tab === 'result'"
            :result_league_list="list.sortedList"
        />
        <FootBallLeagueMain
            v-if="opt.tab === 'league'"
        />
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { TFootBallFixtures } from '~/types/FootBall/fixtures';
import { ECommonSportValue } from '~/types/Common/sport';

const {
    ONE_DAY_MILLISECOND,
    MAX_PAGINATION_CONTENT,
} = useRuntimeConfig().public.CONSTANTS;
const filterStore = useFilterStore();
const dateStore = useDateStore();
const scrollStore = useScrollStore();
const cacheStore = useCacheStore();
const selectorStore = useSelectorStore();
const route = useRoute();

const scroll = reactive({
    key: <string> 'tab',
});

const opt = reactive({
    isBooting: <boolean> true,
    isPending: <boolean> true,
    tab: <string> route.query['tab'] as TCacheStoreTab ?? 'live',
    isOutOfContent: scrollStore.getIsOutOfContent(scroll.key) ?? false,
    result: {
        nav_code: 'S001',
    },
});

const list = reactive({
    // total list
    totalList: <TFootBallFixtures[]> [],
    // sorted list from total list (= visaulized list)
    sortedList: <TFootBallFixtures[]> [],
});

const page = reactive({
    isPending: <boolean> false,
    idx: <number> 0,
});

// tab changed event
watch(
    () => route.fullPath,
    async (p) => {
        opt.tab = route.query['tab'] as TCacheStoreTab;
        list.totalList = [];
        opt.isBooting = true;
        opt.isPending = true;
        init();
        await res();
    }
);

// date changed event
watch(
    () => dateStore.getDate(),
    async (p) => {
        if (opt.isBooting) return;
        init();
        opt.isPending = true;
        await callNextContents();
        opt.isPending = false;
    }
);

// ByTime toggled event
watch(
    () => filterStore.getTimeIsToggled(),
    async (p) => {
        await callNextContents(true);
    }
);

const init = () => {
    filterStore.init();
    scrollStore.setScroll2Top();
    page.idx = 0;
    list.sortedList = [];
    scrollStore.setIsOutOfContent(scroll.key, false);
};

/**
 * res from first page entrance
 */
const res = async () => {
    const res = await cacheStore.onMountedTab(
        'football', opt.tab, 'fixtures',
        {
            sid: ECommonSportValue['FootBall'],
            fromdate: dateStore.getDate().getTime(),
        }
    );
    list.totalList = res['data']['Body'];
    await callNextContents();
    opt.isPending = false;
    opt.isBooting = false;
};

/**
 * get paged list from total list (pagination)
 * @param isFilter 
 * @param list 
 */
const loadSortedContent = async (isFilter: boolean, list: any[]) => {
    if (list.length === 0) return list;
    if (isFilter) {
        return list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    }
    if (list.length < page.idx) {
        return list;
    }
    if (page.idx !== 0) page.isPending = true;
    page.idx++;
    const slicedList = list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    page.isPending = false;
    return slicedList;
    // return new Promise((res, rej) => {
    //     setTimeout(() => {
    //         const pagedList = list.slice(0, MAX_PAGINATION_CONTENT * page.idx);
    //         res(pagedList);
    //         page.isPending = false;
    //     }, (Math.random() + 1) * 1 * 1000);
    // }).then((itemList: any) => {
    //     return itemList;
    // });
};

/**
 * call next content (pagination)
 * @param isFilter 
 */
const callNextContents = async (isFilter: boolean = false): Promise<boolean> => {
    const pagedList = filterStore.sortList(
        list.totalList,
        dateStore.getDate(),
        {
            date: (item) => {
                return new Date(item.Fixture.StartDate);
            },
            league: (item) => {
                return item.Fixture.League.Id;
            }
        }
    );
    if ((pagedList.length === list.sortedList.length) && pagedList.length !== 0) {
        if (isFilter) list.sortedList = pagedList;
        opt.isOutOfContent = true;
        return opt.isOutOfContent;
    }
    list.sortedList = await loadSortedContent(isFilter, pagedList);
    opt.isOutOfContent = (pagedList.length === list.sortedList.length);
    return opt.isOutOfContent;
};

onMounted(async () => {
    opt.isPending = true;
    await nextTick();
    scrollStore.setScroll2Top();
    await res();
    scrollStore.register(scroll.key, callNextContents);
});

onBeforeUnmount(async () => {
    init();
    scrollStore.onBeforeUnmount(scroll.key);
    cacheStore.onBeforeUnmountTab();
});
</script>

<style scoped>

</style>