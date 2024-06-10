<template>
    <USelect
        v-model="time"
        variant="outline"
        :options="props.options"
        :class="`cursor-pointer`"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    options: string[];
}>();

const time = ref(props.options[0]);

</script>