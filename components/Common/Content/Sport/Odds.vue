<template>
    <CommonContentHeadDate
        :idx="props.idx"
        :title="getLeagueName(props.league)"
        :hasLeagueTag="setLeagueGroup(props.league)"
        :src="getLeagueFlag(props.league)"
        :alt="getLeagueAlt(props.league)"
    />
    <div class="live_-match">
        <CommonContentCountry :title="getParticipantName(props.league, 0)" :src="'/img/astonvilla@2x.png'" />
        <CommonContentMatch :time="getLeagueTime(props.league)" />
        <CommonContentCountry :title="getParticipantName(props.league, 1)" :src="'/img/arsenal@2x.png'" />
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
import UtilDate from "~/utils/date";
import { ECommonCountry } from '~/types/Common/country';
import type { TFootBallFixtures } from '~/types/FootBall/fixtures';

const props = defineProps<{
    idx: number;
    isLast?: boolean;
    league;
}>();

const setLeagueGroup = (league): boolean => {
    return league.hasLeagueTag ?? false;
};

const getLeagueFlag = (league: TFootBallFixtures): string => {
    return `/img/${ ECommonCountry[ league.Fixture.Location.Name ] }.png`;
};

const getLeagueAlt = (league: TFootBallFixtures): string => {
    return league.Fixture.Location.Name;
};

const getLeagueName = (league: TFootBallFixtures): string => {
    return league.Fixture.League.Name;
};

const getLeagueTime = (league: TFootBallFixtures): string => {
    const date = new Date(league.Fixture.StartDate);
    const time = `${UtilDate.syncDigit(date.getHours())}:${UtilDate.syncDigit(date.getMinutes())}`;
    return time;
};

// const getParticipantSrc = (league: TFootBallFixtures, position: number = 1): string => {
//     return league.Fixture.Participants[position].Id;
// };

const getParticipantName = (league: TFootBallFixtures, position: number = 0): string => {
    return league.Fixture.Participants[position].Name;
};

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