<template>
    <div class="frmu95mobileu95matchup">
        <div class="frame-492 mb-[12px]">
            <article class="btn-1">
                <div class="frame-container">
                    <div class="frame-376">
                        <div class="text-6 body">STATS</div>
                    </div>
                    <div v-show="props.selectedIdx !== 0" class="frame-375" @click="clickTab(0)">
                        <div class="text-6 body">STATS</div>
                    </div>
                </div>
            </article>
            <article class="btn-1">
                <div class="frame-container">
                    <div class="frame-376">
                        <div class="text-6 body">MATCH STATS</div>
                    </div>
                    <div v-show="props.selectedIdx !== 1" class="frame-375" @click="clickTab(1)">
                        <div class="text-6 body">
                            MATCH STATS
                        </div>
                    </div>
                </div>
            </article>
            <article class="btn_-round-square">
                <div class="frame-container">
                    <div class="frame-376-1">
                        <div class="text-8 body">LAST MATCHES</div>
                    </div>
                    <div v-show="props.selectedIdx !== 2" class="frame-375-1" @click="clickTab(2)">
                        <div class="text-8 body">
                            LAST MATCHES
                        </div>
                    </div>
                </div>
            </article>
            <article class="btn-1">
                <div class="frame-container">
                    <div class="frame-376">
                        <div class="text-6 body">TOP PLAYERS</div>
                    </div>
                    <div v-show="props.selectedIdx !== 3" class="frame-375" @click="clickTab(3)">
                        <div class="text-9 body">
                            TOP PLAYERS
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    selectedIdx: number;
}>();

const emit = defineEmits<{
  (e: 'selectTab', idx: number): void
}>();

const clickTab = (idx: number) => {
    console.log('idx: ', idx);
    if (props.selectedIdx === idx) return;
    emit('selectTab', idx);
};

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
@import '@/public/css/frmu95mobileu95matchup.css';
</style>