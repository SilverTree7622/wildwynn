<template>
    <div class="w-[97%] mb-2">
        <div class="mb-2">
            Odds
        </div>
        <USelect 
            v-model="odds"
            variant="outline"
            :options="props.options"
            :class="`cursor-pointer`"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    options: string[];
}>();

const odds = ref(props.options[0]);

</script>