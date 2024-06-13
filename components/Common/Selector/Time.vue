<template>
    <div class="w-[97%] mb-2">
        <div class="mb-2">
            Time
        </div>
        <USelect 
            v-model="time"
            variant="outline"
            :options="opt.options"
            :class="`cursor-pointer`"
            @change="change"
        />
    </div>
</template>

<script setup lang="ts">
import type { TSelectorTime } from '~/types/Selector';

const selectorStore = useSelectorStore();

const opt = reactive({
    options: <string[]> [],
    idx: <number> 0,
    list: <TSelectorTime[]> [],
});

const time = ref(opt.options[0] ?? '');

watch(
    () => selectorStore.getTime(),
    async (p) => {
        opt.options = p.map( item => `${ item.sp_name } ${ item.sp_timestamp_view }` );
        time.value = opt.options[0];
        opt.idx = 0;
        opt.list = p;
    }
);

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item.sp_name === value.split(' ')[0]);
    if (selectedIdx < 0) return;
    opt.idx = selectedIdx;
};

</script>