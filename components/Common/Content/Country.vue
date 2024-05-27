<template>
    <div class="frame-3">
        <img class="aston-villa-1 aston-villa-6" :src="props.src" />
        <div class="aston-villa valign-text-middle body2">{{ props.title }}</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    src: string;
}>();

</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';

.frame-3 {
  height: 108px;
  position: relative;
  width: 71px;
}

.aston-villa-1 {
  height: 44px;
  left: 13px;
  position: absolute;
  top: 25px;
  width: 44px;
}

.aston-villa {
  color: var(--bk);
  font-weight: 600;
  height: 28px;
  left: 4px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 71px;
  width: 62px;
}

.aston-villa-6 {
  /* background-image: url(../img/astonvilla@2x.png); */
  background-size: 100% 100%;
}

</style>