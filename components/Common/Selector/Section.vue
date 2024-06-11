<template>
    <div class="flex flex-col mt-2">
        <CommonSelectorLang :options="options.lang" />
        <CommonSelectorTime :options="options.time" class="mr-2" />
        <CommonSelectorOdds :options="options.odds" />
    </div>
</template>

<script setup lang="ts">
const selectorStore = useSelectorStore();

const options = reactive({
    lang: <string[]> [
        'EN', 'KR', 'CN', 'FR',
    ],
    time: <string[]> [
        'Africa/Abidjan',
        'America/Bogota',
        'Asia/Dili'
    ].map( item => selectorStore.setTimeFormat(item) ),
    odds: <string[]> [
        `EU Odds (1.50)`, `UK Odds (1/2)`, `US Odds (-200)`,
    ],
});


</script>