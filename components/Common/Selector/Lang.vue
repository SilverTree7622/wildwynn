<template>
    <USelect 
        v-model="lang"
        variant="outline"
        :options="props.options"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    options: string[];
}>();

const lang = ref(props.options[0]);

</script>