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
                <CommonFilterDate :date="new Date()" @next-tab="nextTab" />
            </div>
        </div>

        <div class="live-Mzx5SR live headline2">&nbsp;</div>

        <LoadingSpinner v-show="props.isPending" style="margin-top: 2px; margin-bottom: 50px;" />

        <div>
            <slot v-if="!props.isPending"></slot>
        </div>

        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    isPending: boolean;
    sName: string;
    tab: string;
    result: any;
}>();

const opt = reactive({
    tab: <string> props.tab,
});

const route = useRoute();

watch(
    () => route.fullPath,
    async (p) => {
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