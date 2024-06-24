<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain :result_nav_code="props.result.nav_code" />

        <div ref="$headerSticky" class="sticky top-0 z-[1]">
            <CommonHeaderMatchUp v-show="!opt.isSticky" :match_id="info.match_id" />
        </div>
        
        <div class="sticky top-0 z-[1] p-0 m-0">
            <CommonHeaderMatchUpSticky v-show="opt.isSticky" />
            <CommonHeaderLiveTracker v-show="!opt.isSticky" :match_id="info.match_id" />
            <CommonHeaderTabMatchUp :sName="props.sName" :tab="props.tab" />
            <MatchUpStatsMainTab v-if="props.tab === 'stats'" :selectedIdx="opt.selectedIdx" @selectTab="clickTab" />
        </div>
        
        <LoadingSpinner v-show="props.isPending" style="margin-top: 30px; margin-bottom: 50px;" />
        <div ref="$content" class="">
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

const scrollStore = useScrollStore();
const route = useRoute();

const emit = defineEmits<{
    (e: 'clickTab', idx: number): void;
}>();

const opt = reactive({
    isSticky: <boolean>false,
    stickyStandardValue: <number>180,
    selectedIdx: <number>0,
    scrollPosition: <number>0,
    observer: <IntersectionObserver | undefined> undefined,
});

const info = reactive({
    match_id: <string> '',
});

const $headerSticky = ref();
const $content = ref();

const clickTab = (idx: number) => {
    opt.selectedIdx = idx;
    emit('clickTab', opt.selectedIdx);
};

onMounted(async () => {
    await nextTick();
    scrollStore.setScroll2Top();
    info.match_id = route.query['tab'] as string;
    if ($headerSticky.value) {
        opt.observer = undefined;
        opt.observer = new IntersectionObserver(
            ([ e ]) => {
                console.log('e: ', e);
                if (!e.isIntersecting) {
                    opt.isSticky = true;
                } else {
                    opt.isSticky = false;
                }
            },
            {
                threshold: [ 1 ],
                rootMargin: "-4% 0px 0px 0px"
                // rootMargin: " 0px 0px 0px"
            }
        );
        opt.observer.observe($headerSticky.value);
    }
});

onBeforeUnmount(() => {
    if (opt.observer) {
        opt.observer.unobserve($headerSticky.value);
        opt.observer.disconnect();
    }
});
</script>

<style scoped></style>