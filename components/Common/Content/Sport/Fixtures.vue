
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
        <div class="live-match-Y6utjY live-match">
            <div class="group-5-Z7bohL group-5">
                <img class="aston-villa-1xcxXp aston-villa" src="/img/astonvilla.png" alt="AstonVilla" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ getParticipantName(props.league, 0) }}</div>
            </div>
            <div class="vs-Z7bohL vs">
                <div class="x19-30 headline">{{ getLeagueTime(props.league) }}</div>
                <div class="vs-ij0TdP vs headline">VS</div>
            </div>
            <div class="frame-303-Z7bohL frame-303">
                <img class="btn_-round-square2-qGs8vj btn_-round-square2"
                    src="/img/btn-roundsquare2-2@2x.png" alt="Btn_RoundSquare2" />
                <div class="matchup valign-text-middle body2">MATCHUP</div>
            </div>
            <div class="group-6-Z7bohL group-6">
                <img class="arsenal-xEfJsb arsenal" src="/img/arsenal.png" alt="Arsenal" />
                <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ getParticipantName(props.league, 1) }}</div>
            </div>
        </div>
        <div class="btn_-favorite_-check">
            <div class="group-28"><img class="star" src="/img/star-23@2x.png" alt="Star" /></div>
            <div class="group-29-rplUIj smart-layers-pointers">
                <img class="star" src="/img/star-24@2x.png" alt="Star" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UtilDate from "~/utils/date";
import { ECommonCountry } from '~/types/Common/country';
import type { TFootBallSchedule } from "~/types/FootBall/schedule";

const props = defineProps<{
    idx: number;
    league: TFootBallSchedule;
}>();

const dateStore = useDateStore();
const goStore = useGoStore();

const setLeagueGroup = (league): boolean => {
    return league.hasLeagueTag ?? false;
};

const getLeagueFlag = (league: TFootBallSchedule): string => {
    return `/img/${ ECommonCountry[ league.Fixture.Location.Name ] }.png`;
};

const getLeagueAlt = (league: TFootBallSchedule): string => {
    return league.Fixture.Location.Name;
};

const getLeagueName = (league: TFootBallSchedule): string => {
    return league.Fixture.League.Name;
};

const getLeagueTime = (league: TFootBallSchedule): string => {
    const date = new Date(league.Fixture.StartDate);
    const time = `${UtilDate.syncDigit(date.getHours())}:${UtilDate.syncDigit(date.getMinutes())}`;
    return time;
};

// const getParticipantSrc = (league: TFootBallSchedule, position: number = 1): string => {
//     return league.Fixture.Participants[position].Id;
// };

const getParticipantName = (league: TFootBallSchedule, position: number = 0): string => {
    return league.Fixture.Participants[position].Name;
};
</script>