<template>
    <div class="w-[97%] mb-2">
        <div class="mb-2">
            Odds
        </div>
        <USelect 
            v-model="odds"
            variant="outline"
            :options="opt.options"
            :class="`cursor-pointer`"
            @change="change"
        />
    </div>
</template>

<script setup lang="ts">
import type { TSelectorOdds } from '~/types/Selector';

const selectorStore = useSelectorStore();

const opt = reactive({
    options: <string[]> [],
    idx: <number> 0,
    list: <TSelectorOdds[]> [],
});

const odds = ref(opt.options[0] ?? '');

watch(
    () => selectorStore.getOdds(),
    async (p) => {
        opt.options = p.map( item => `${ item.sp_view }` );
        odds.value = opt.options[0];
        opt.idx = 0;
        opt.list = p;
    }
);

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item.sp_view === value );
    if (selectedIdx < 0) return;
    opt.idx = selectedIdx;
};

</script>