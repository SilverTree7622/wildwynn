<template>
    <div class="w-[97%] mb-2">
        <div class="mb-2">
            Language
        </div>
        <USelect 
            v-model="lang"
            variant="outline"
            :options="props.options"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    options: string[];
}>();

const lang = ref(props.options[0]);

</script>