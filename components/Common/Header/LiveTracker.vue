<template>
    <div class="w-full h-[404px] overflow-hidden p-0 m-0">
        <iframe
            :src="opt.src" frameborder="0" width="100%" height="404" scrolling="no"
            class="p-0 m-0"
        ></iframe>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    match_id: string;
}>();

const opt = reactive({
    src: <string> '',
});
onMounted(async () => {
    await nextTick();
    opt.src = `https://widgets.thesports01.com/en/3d/football?profile=q66hjngdk6xswun&uuid=${ props.match_id }`;
});
</script>