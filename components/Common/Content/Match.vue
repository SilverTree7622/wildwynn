<template>
    <div class="frame-386">
        <div class="flex-col">
            <div class="text-match headline">{{ props.time }}</div>
            <div class="vs-2 headline">VS</div>
            <div class="overlap-group-1">
                <div class="matchup-match valign-text-middle body2">MATCHUP</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    time: string;
}>();

</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';

.text-match {
  color: var(--bk);
  font-weight: 600;
  line-height: normal;
  margin-left: 3.0px;
  min-height: 20px;
  text-align: center;
  width: 51px;
}

.frame-386 {
  height: 65px;
  position: relative;
  width: 83px;
}

.vs-2 {
  color: var(--bk);
  font-weight: 600;
  line-height: normal;
  margin-left: 1.0px;
  min-height: 13px;
  text-align: center;
  white-space: nowrap;
  width: 23px;
}

.overlap-group-1 {
  align-items: flex-start;
  background-image: url(../img/btn-roundsquare2@2x.png);
  background-size: 100% 100%;
  display: flex;
  height: 20px;
  margin-top: 13px;
  min-width: 72px;
  padding: 2.0px 7px;
}

.matchup-match {
  color: var(--bk);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  min-width: 58px;
  text-align: center;
  white-space: nowrap;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 5px;
  min-height: 66px;
  position: relative;
  width: 72px;
}
</style>