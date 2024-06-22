
<template>
    <!-- set group tag or border line -->
    <CommonContentHeadDate
        :idx="props.idx"
        :title="getLeagueName(props.league)"
        :hasLeagueTag="setLeagueGroup(props.league)"
        :src="getLeagueFlag(props.league)"
        :alt="getLeagueAlt(props.league)"
    />
    <!-- match content -->
    <div class="live_-match" @click="goStore.go_matchup('home')">
        <div class="live-match-Jbo1mR live-match">
            <div class="group-5-AKR3e5 group-5">
                <img class="aston-villa-oDU2Nu aston-villa" :src="getParticipantSrc(props.league, 0)" :alt="getParticipantName(props.league, 0)" />
                <div class="aston-villa-ADr9KY valign-text-middle aston-villa body2">{{ getParticipantName(props.league, 0) }}</div>
            </div>
            <div class="score-AKR3e5 score">
                <img class="vector-eyBPRK vector" src="/img/vector-27@2x.png" alt="Vector" />
                <img class="vector-n1oFur vector" src="/img/vector-28@2x.png" alt="Vector" />
                <img class="vector-z3kuGS vector" src="/img/vector-29@2x.png" alt="Vector" />
                <div class="txt-live !text-[10px] mt-[1px]">LIVE</div>
                <div class="x100new pretendard-semi-bold-black-12px">
                    <span class="span0-TpclY9 body2">100</span><span
                        class="span1-TpclY9 pretendard-semi-bold-black-14px">’</span>
                </div>
                <div class="x000-eyBPRK x000 pretendard-semi-bold-black-20px">{{ getLeagueScore(props.league, 0) }}</div>
                <div class="x000-n1oFur x000 pretendard-semi-bold-black-20px">{{ getLeagueScore(props.league, 1) }}</div>
            </div>
            <div class="group-6-AKR3e5 group-6">
                <img class="arsenal-x4WW4Z arsenal" :src="getParticipantSrc(props.league, 1)" :alt="getParticipantName(props.league, 1)" />
                <div class="arsenal-tGhDC5 valign-text-middle arsenal body2 !text-center !h-[24px]">{{ getParticipantName(props.league, 1) }}</div>
            </div>
        </div>
        <CommonFavoriteStar :isToggled="false" />
        <div class="live-tracker">
            <a href="javascript:;" @click="goStore.go_livetraker()">
                <img class="btn_-live-tracker" src="/img/btn-livetracker-9@2x.png" alt="Btn_LiveTracker" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import UtilDate from "~/utils/date";
import type { TFootBallSchedule } from "~/types/FootBall/schedule";

const props = defineProps<{
    idx: number;
    league: TFootBallSchedule;
}>();

const goStore = useGoStore();

const setLeagueGroup = (league): boolean => {
    return league.hasLeagueTag ?? false;
};

const getLeagueFlag = (league: TFootBallSchedule): string => {
    return league.ai_competition_img;
};

const getLeagueAlt = (league: TFootBallSchedule): string => {
    return league.ai_competition_short_name;
};

const getLeagueName = (league: TFootBallSchedule): string => {
    return league.ai_competition_name;
};

const getLeagueTime = (league: TFootBallSchedule): string => {
    const date = new Date(league.ai_match_time);
    const time = `${UtilDate.syncDigit(date.getHours())}:${UtilDate.syncDigit(date.getMinutes())}`;
    return time;
};

const getLeagueScore = (league: TFootBallSchedule, position: number = 0): string => {
    const prefix = goStore.go_prefix_via_position(position);
    return league[`ai_${ prefix }_scores`][0];
};

const getParticipantName = (league: TFootBallSchedule, position: number = 0): string => {
    const prefix = goStore.go_prefix_via_position(position);
    return league[`ai_${ prefix }_team_name`];
};

const getParticipantSrc = (league: TFootBallSchedule, position: number = 0): string => {
    const prefix = goStore.go_prefix_via_position(position);
    return league[`ai_${ prefix }_team_img`];
};

onMounted(async () => {
    await nextTick();
});
</script>