<template>
    <div class="w-[97%] mb-2">
        <div class="mb-2">
            Time
        </div>
        <USelect 
            v-model="time"
            variant="outline"
            :options="props.options"
            :class="`cursor-pointer`"
        />
    </div>
</template>

<script setup lang="ts">
import moment from 'moment-timezone';

const props = defineProps<{
    options: string[];
}>();

const time = ref(props.options[0]);

</script>