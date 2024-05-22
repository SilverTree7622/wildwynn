<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <!-- <KeepAlive> -->
            <CommonHeaderMain :result_nav_code="props.result.nav_code" />
        <!-- </KeepAlive> -->
        <CommonHeaderTabMain :sName="props.sName" :tab="opt.tab" />

        <div class="sub-tap-Mzx5SR">
            <div class="rectangle-38-rkUyvw"></div>
            <div class="frame-279-rkUyvw">
                <CommonFilterFavorite />
                <CommonFilterByTime />
                <CommonFilterDate ref="$date" :date="new Date()" @next-tab="nextTab" />
            </div>
        </div>

        <div class="live-Mzx5SR live headline2">&nbsp;</div>

        <!-- init content loading skeletons -->
        <LoadingSkeleton v-show="props.isPending" />
        <LoadingSkeleton v-show="props.isPending" />
        <LoadingSkeleton v-show="props.isPending" />

        <div class="">
            <slot v-if="!props.isPending"></slot>
            <!-- center content loading -->
            <LoadingSpinner v-show="props.centerIsPending" />
        </div>

        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    isPending: boolean;
    centerIsPending: boolean;
    sName: string;
    tab: string;
    result: any;
}>();

const opt = reactive({
    tab: <string> props.tab,
});

const filterStore = useFilterStore();
const route = useRoute();

const $date = ref();

watch(
    () => route.fullPath,
    async (p) => {
        filterStore.init();
        $date.value.init();
        opt.tab = route.query['tab'] as string;
    }
);

const nextTab = () => {
    const tab = route.query['tab'];
    let resultTab = 'live';
    if (tab === 'live' || tab === undefined) resultTab = 'fixtures';
    if (tab === 'fixtures') resultTab = 'odds';
    if (tab === 'odds') resultTab = 'result';
    if (tab === 'result') resultTab = 'league';
    if (tab === 'league') resultTab = 'live';
    navigateTo({
        path: `/${ props.sName }`,
        query: {
            tab: resultTab,
        }
    });
};

</script>

<style scoped></style>