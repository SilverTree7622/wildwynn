<template>
    <div class="flex flex-row mb-3 ml-3">
        <CommonSelectorTime :options="options.time" class="mr-2" />
        <CommonSelectorOdds :options="options.odds" />
    </div>
</template>

<script setup lang="ts">
const selectorStore = useSelectorStore();

const getTimeFormat = (date: Date): string => {
    return date.toString();
};

const options = reactive({
    time: <string[]> [ getTimeFormat(new Date()), ],
    odds: <string[]> [ `EU Odds (1.50)`, `UK Odds (1/2)`, `US Odds (-200)`, ],
});


</script>