<template>
    <div class="frame-384">
        <div class="x04092024-tue valign-text-middle headline2">
            {{ dateStore.getLeagueFormat(props.date, false) }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    date: Date;
}>();

const dateStore = useDateStore();

</script>

<style scoped>

</style>