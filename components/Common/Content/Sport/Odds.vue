<template>
    <CommonContentHeadDate
        :idx="props.idx"
        :title="contentStore.getLeagueName(props.league)"
        :hasLeagueTag="contentStore.setLeagueGroup(props.league)"
        :src="contentStore.getLeagueFlag(props.league)"
        :alt="contentStore.getLeagueAlt(props.league)"
    />
    <div class="live_-match">
        <CommonContentCountry :title="contentStore.getParticipantName(props.league, 0)" :src="contentStore.getParticipantSrc(props.league, 0)" />
        <CommonContentMatch :time="contentStore.getMatchTime(props.league)" />
        <CommonContentCountry :title="contentStore.getParticipantName(props.league, 1)" :src="contentStore.getParticipantSrc(props.league, 1)" />
        <CommonFavoriteStar
            :isToggled="false"
        />
    </div>
    <CommonContentOddsGrop
        :top="56"
        :draw="13.5"
        :low="1.05"
        :value="25"
    />
</template>

<script setup lang="ts">
import type { TFootBallSchedule } from "~/types/FootBall/schedule";

const props = defineProps<{
    idx: number;
    isLast?: boolean;
    league: TFootBallSchedule;
}>();

const contentStore = useContentStore();
</script>

<style scoped>
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css';

.frame-317 {
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--bggray);
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
  width: 100%;
}

.live_-match {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  padding: 0px 10px;
  position: relative;
  /* width: 100%; */
}

.line {
  align-self: stretch;
  height: 1px;
  object-fit: cover;
  position: relative;
  width: 100%;
}
</style>