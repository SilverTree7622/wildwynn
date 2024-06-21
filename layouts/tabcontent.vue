<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain
            :result_nav_code="props.result.nav_code"
        />
        <CommonHeaderTabMain :sName="props.sName" :tab="opt.tab" />

        <div class="sub-tap-Mzx5SR">
            <div class="rectangle-38-rkUyvw"></div>
            <div class="frame-279-rkUyvw">
                <CommonFilterFavorite />
                <CommonFilterByTime />
                <CommonFilterDate
                    ref="$date"
                    :date="new Date()"
                    @prev-tab="prevTab"
                    @next-tab="nextTab"
                />
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
            <div v-show="props.pageIsPending" class="mt-10">
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </div>
            <div
                v-show="!props.isOutOfContent && !props.isPending && !props.pageIsPending"
                class="mx-auto my-4"
            >
                <svg
                    data-slot="icon" data-darkreader-inline-stroke="" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    class="mx-auto h-8 w-8 text-gray-500"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"></path>
                </svg>
            </div>
        </div>

        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
import UtilDate from '~/utils/date';

const props = defineProps<{
    isPending: boolean;
    pageIsPending: boolean;
    isOutOfContent: boolean;
    sName: string;
    tab: string;
    result: any;
}>();

const opt = reactive({
    tab: <string> props.tab,
    useInitForChangingTab: <boolean> true,
});

const filterStore = useFilterStore();
const route = useRoute();

const $date = ref();

watch(
    () => route.fullPath,
    async (p) => {
        filterStore.init();
        if (opt.useInitForChangingTab) {
            $date.value.init();
        } else {
            opt.useInitForChangingTab = true;
        }
        opt.tab = route.query['tab'] as string;
    }
);

const prevTab = (date: Date) => {
    const getNow = new Date(Date.now());
    const getDate = new Date(date);
    if (getNow.getTime() < getDate.getTime()) {
        return;
    }
    const tab = route.query['tab'];
    let targetTab = '';
    if (
        tab === 'live' ||
        tab === 'fixtures'
    ) targetTab = 'result';
    // exception conditions
    if (!targetTab) return;
    if (tab === 'fixtures' && UtilDate.chckDateIsToday(date)) {
        return;
    }
    // change tab
    if (UtilDate.chckDateIsToday(date)) {
        opt.useInitForChangingTab = false;
    }
    navigateTo({
        path: `/${ props.sName }`,
        query: {
            tab: targetTab,
        }
    });
};

const nextTab = (date: Date) => {
    const getNow = new Date(Date.now());
    const getDate = new Date(date);
    if (getNow.getTime() > getDate.getTime()) {
        return;
    }
    const tab = route.query['tab'];
    let targetTab = '';
    if (
        tab === undefined ||
        tab === 'live' ||
        tab === 'result'
    ) targetTab = 'fixtures';
    if (!targetTab) return;
    // change tab
    if (UtilDate.chckDateIsToday(date)) {
        opt.useInitForChangingTab = false;   
    }
    navigateTo({
        path: `/${ props.sName }`,
        query: {
            tab: targetTab,
        }
    });
};

</script>

<style scoped></style>