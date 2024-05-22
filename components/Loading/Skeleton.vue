<template>
    <div
        class="
            flex items-center space-x-4
            w-[315px] mx-auto mt-[2px] mb-[50px]
        "
    >
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2">
            <USkeleton class="h-4 w-[250px]" />
            <USkeleton class="h-4 w-[200px]" />
        </div>
    </div>
</template>

<script setup lang="ts">
// {
//   base: 'animate-pulse',
//   background: 'bg-gray-100 dark:bg-gray-800',
//   rounded: 'rounded-md',
// }
</script>