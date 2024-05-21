<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="league in props.result_league">
                <div class="group-17" @click="goStore.go_league()">
                    <div class="rectangle-28-lE9kB9 rectangle-28"></div>
                    <img class="flag_-circle_eng" src="/img/flag-circle-eng@2x.png" alt="Flag_Circle_ENG" />
                    <div class="premier-league-lE9kB9 premier-league headline2">{{ league['lg_name'] }}</div>
                    <div style="color: black;">{{ dateStore.getLeagueFormat(league.date) }}</div>
                </div>

                <div class="live_-match">
                    <div style="width:100%;text-align:center;"><img src="/img/odds_temp_01.png" style="height: 155px; margin-left: auto; margin-right: auto;"
                            @click="goStore.go_matchup('home')" /></div>

                </div>
                <!--
        <img class="line-1" src="img/line-1@2x.png" alt="Line 1" />
        -->

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

<style scoped></style>