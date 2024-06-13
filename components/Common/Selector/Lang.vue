<template>
    <div class="w-[97%] mb-2">
        <div class="mb-2">
            Language
        </div>
        <USelect 
            v-model="lang"
            variant="outline"
            :options="opt.options"
            :class="`cursor-pointer`"
            @change="change"
        />
    </div>
</template>

<script setup lang="ts">
import type { TSelectorLang } from '~/types/Selector';

const selectorStore = useSelectorStore();

const opt = reactive({
    options: <string[]> selectorStore.getLang(),
    idx: <number> 0,
    list: <TSelectorLang[]> selectorStore.getLang(),
});

const lang = ref(opt.options[0] ?? '');

watch(
    () => selectorStore.getLang(),
    async (p) => {
        opt.options = p;
        lang.value = opt.options[0];
        opt.idx = 0;
        opt.list = p;
    }
);

const change = (value: string) => {
    const selectedIdx = opt.list.findIndex((item) => item === value);
    if (selectedIdx < 0) return;
    opt.idx = selectedIdx;
    
};

</script>