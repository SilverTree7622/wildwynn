<template>
    <USelect
        v-model="odds"
        variant="outline"
        :options="props.options"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    options: string[];
}>();

const odds = ref(props.options[0]);

</script>