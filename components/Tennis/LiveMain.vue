<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="league in props.result_league">
                <div class="group-17" @click="goStore.go_league('home')" style="cursor: pointer">
                    <div class="rectangle-28-lE9kB9 rectangle-28"></div>
                    <img class="flag_-circle_eng" src="/img/flag-circle-eng@2x.png" alt="Flag_Circle_ENG" />
                    <div class="premier-league-lE9kB9 premier-league headline2">{{ league['lg_name'] }}</div>
                    <div style="color: black;">{{ dateStore.getLeagueFormat(league.date) }}</div>
                </div>
                <div class="live_-match" @click="goStore.go_matchup('home')">
                    <div class="live-match-Jbo1mR live-match">
                        <div class="group-5-AKR3e5 group-5">
                            <img class="aston-villa-oDU2Nu aston-villa" src="/img/astonvilla.png" alt="AstonVilla" />
                            <div class="aston-villa-ADr9KY valign-text-middle aston-villa body2">ASTON VILLA</div>
                        </div>
                        <div class="score-AKR3e5 score">
                            <img class="vector-eyBPRK vector" src="/img/vector-27@2x.png" alt="Vector" />
                            <img class="vector-n1oFur vector" src="/img/vector-28@2x.png" alt="Vector" />
                            <img class="vector-z3kuGS vector" src="/img/vector-29@2x.png" alt="Vector" />
                            <div class="txt-live">LIVE</div>
                            <div class="x100new pretendard-semi-bold-black-12px">
                                <span class="span0-TpclY9 body2">100</span><span
                                    class="span1-TpclY9 pretendard-semi-bold-black-14px">’</span>
                            </div>
                            <div class="x000-eyBPRK x000 pretendard-semi-bold-black-20px">000</div>
                            <div class="x000-n1oFur x000 pretendard-semi-bold-black-20px">000</div>
                        </div>
                        <div class="group-6-AKR3e5 group-6">
                            <img class="arsenal-x4WW4Z arsenal" src="/img/arsenal.png" alt="Arsenal" />
                            <div class="arsenal-tGhDC5 valign-text-middle arsenal body2">ARSENAL</div>
                        </div>
                    </div>
                    <div class="btn_-favorite_-check">
                        <div class="group-28"><img class="star" src="/img/star-2@2x.png" alt="Star" /></div>
                        <div class="group-29-cDzWbx smart-layers-pointers">
                            <img class="star" src="/img/star-4@2x.png" alt="Star" />
                        </div>
                    </div>
                    <div class="live-tracker">
                        <a href="javascript:;" @click="goStore.go_livetraker()">
                            <img class="btn_-live-tracker" src="/img/btn-livetracker-9@2x.png" alt="Btn_LiveTracker" />
                        </a>
                    </div>
                </div>
                <img class="line-1" src="/img/line-1@2x.png" alt="Line 1" />
                <div class="live_-match">
                    <div class="live-match-Jbo1mR live-match">
                        <div class="group-5-AKR3e5 group-5">
                            <img class="aston-villa-oDU2Nu aston-villa" src="/img/astonvilla.png" alt="AstonVilla" />
                            <div class="aston-villa-ADr9KY valign-text-middle aston-villa body2">ASTON VILLA</div>
                        </div>
                        <div class="score-AKR3e5 score">
                            <img class="vector-eyBPRK vector" src="/img/vector-27@2x.png" alt="Vector" />
                            <img class="vector-n1oFur vector" src="/img/vector-28@2x.png" alt="Vector" />
                            <img class="vector-z3kuGS vector" src="/img/vector-29@2x.png" alt="Vector" />
                            <div class="txt-live">LIVE</div>
                            <div class="x100new pretendard-semi-bold-black-12px">
                                <span class="span0-TpclY9 body2">100</span><span
                                    class="span1-TpclY9 pretendard-semi-bold-black-14px">’</span>
                            </div>
                            <div class="x000-eyBPRK x000 pretendard-semi-bold-black-20px">000</div>
                            <div class="x000-n1oFur x000 pretendard-semi-bold-black-20px">000</div>
                        </div>
                        <div class="group-6-AKR3e5 group-6">
                            <img class="arsenal-x4WW4Z arsenal" src="/img/arsenal.png" alt="Arsenal" />
                            <div class="arsenal-tGhDC5 valign-text-middle arsenal body2">ARSENAL</div>
                        </div>
                    </div>
                    <div class="btn_-favorite_-check">
                        <div class="group-28"><img class="star" src="/img/star-2@2x.png" alt="Star" /></div>
                        <div class="group-29-cDzWbx smart-layers-pointers">
                            <img class="star" src="/img/star-4@2x.png" alt="Star" />
                        </div>
                    </div>
                    <div class="live-tracker">
                        <a href="/LiveTrack" target="_blank"><img class="btn_-live-tracker"
                                src="/img/btn-livetracker-9@2x.png" alt="Btn_LiveTracker" />
                        </a>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    result_league;
}>();
const dateStore = useDateStore();

const goStore = useGoStore();



</script>

<style scoped>

</style>