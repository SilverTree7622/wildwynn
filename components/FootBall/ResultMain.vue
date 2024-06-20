<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="league in props.result_league_list">
                <!-- set group tag or border line -->
                <div v-if="setLeagueGroup(league)" class="group-17" @click="goStore.go_league()"
                    style="cursor: pointer">
                    <div class="rectangle-28-lE9kB9 rectangle-28"></div>
                    <img class="flag_-circle_eng" :src="getLeagueFlag(league)" :alt="getLeagueAlt(league)" />
                    <div class="premier-league-lE9kB9 premier-league headline2">{{ getLeagueName(league) }}</div>
                </div>
                <img v-else class="line-1" src="/img/line-1@2x.png" alt="Line 1" />
                <!-- match content -->
                <div class="live_-match" @click="goStore.go_matchup('home')">
                    <div class="live-match-Y6utjY live-match">
                        <div class="group-5-Z7bohL group-5">
                            <img class="aston-villa-1xcxXp aston-villa" src="/img/astonvilla.png" alt="AstonVilla" />
                            <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ getParticipantName(league, 0) }}</div>
                        </div>
                        <div class="flex-col-result">
                            <div class="overlap-group">
                                <img class="vector" src="~/public/img/vector@2x.png" alt="Vector" />
                                <img class="vector-1" src="~/public/img/vector-1@2x.png" alt="Vector" />
                                <div class="text text-center text-xs">{{ getLeagueTime(league) }}</div>
                                <div class="ft-4 text-xs">FT</div>
                                <div class="number number-2 pretendard-semi-bold-black-20px">0</div>
                                <div class="number-1 number-2 pretendard-semi-bold-black-20px">0</div>
                            </div>
                            <div class="btn_-statistics text-[13px]">
                                <div class="statistics">STATISTICS</div>
                            </div>
                        </div>
                        <div class="group-6-Z7bohL group-6">
                            <img class="arsenal-xEfJsb arsenal" src="/img/arsenal.png" alt="Arsenal" />
                            <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">{{ getParticipantName(league, 1) }}</div>
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
        </div>
    </div>
</template>


<script setup lang="ts">
import UtilDate from "~/utils/date";
import { ECommonCountry } from '~/types/Common/country';
import type { TFootBallFixtures } from '~/types/FootBall/fixtures';

const props = defineProps<{
    result_league_list: TFootBallFixtures[];
}>();

const dateStore = useDateStore();
const goStore = useGoStore();

const setLeagueGroup = (league): boolean => {
    return league.hasLeagueTag ?? false;
};

const getLeagueFlag = (league: TFootBallFixtures): string => {
    return `/img/${ECommonCountry[league.Fixture.Location.Name]}.png`;
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

onMounted(async () => {
    await nextTick();
});
</script>

<style scoped>
.flex-col-result {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1px;
    margin-top: 24.0px;
}

.overlap-group1 {
    align-items: center;
    display: flex;
    gap: 4px;
    height: 108px;
    left: 74px;
    min-width: 209px;
    position: relative;
    top: 0;
}

.overlap-group {
    height: 42px;
    position: absolute;
    width: 132px;
}

.vector {
    height: 28px;
    left: 0;
    position: absolute;
    top: 14px;
    width: 132px;
}

.vector-1 {
    height: 19px;
    left: 45px;
    position: absolute;
    top: 16px;
    width: 41px;
}

.text {
    color: var(--bk);
    font-weight: 600;
    left: 50px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 0;
    width: 33px;
}

.number {
    left: 90px;
    top: 16px;
}

.number-1 {
    left: 3px;
    top: 15px;
}

.btn_-statistics {
    display: flex;
    margin-right: 1.0px;
    width: 67px;
    top: 66px;
}

/* .statistics {
    color: var(--bk);
    font-weight: 600;
    height: 14px;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    width: 67px;
} */

.ft-4 {
    color: var(--bk);
    font-weight: 600;
    left: 54px;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 17px;
    white-space: nowrap;
    width: 25px;
}

.number-2 {
    letter-spacing: -0.60px;
    line-height: normal;
    position: absolute;
    text-align: center;
    white-space: nowrap;
    width: 38px;
}
</style>