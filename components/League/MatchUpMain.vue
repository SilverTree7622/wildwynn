<template>
    <div class="contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <div class="leagueFrame">
            <template v-for="league of props.result_league">
                <div class="group-17" @click="goStore.go_league()" style="cursor: pointer">
                    <div class="rectangle-28-lE9kB9 rectangle-28"></div>
                    <div class="premier-league-lE9kB9 premier-league headline2" style="left:14px;">
                        {{ dateStore.getLeagueFormat(league.date, false) }}
                    </div>
                </div>
                <div class="live_-match" @click="goStore.go_matchup('home')">
                    <div class="live-match-Y6utjY live-match">
                    <!-- <div :class="$style['fr_-contents_-football_-fixtures_-upper']"> -->
                        <div class="group-5-Z7bohL group-5">
                            <img class="aston-villa-1xcxXp aston-villa" src="/img/astonvilla.png" alt="AstonVilla" />
                            <div class="aston-villa-O0Qend valign-text-middle aston-villa body2">ASTON VILLA</div>
                        </div>
                        <div class="vs-Z7bohL vs">
                            <div class="x19-30 headline">19: 30</div>
                            <div class="vs-ij0TdP vs headline">VS</div>
                        </div>
                        <div class="group-6-Z7bohL group-6">
                            <img class="arsenal-xEfJsb arsenal" src="/img/arsenal.png" alt="Arsenal" />
                            <div class="arsenal-ex9GAr valign-text-middle arsenal body2">ARSENAL</div>
                        </div>
                        <div class="frame-303-Z7bohL frame-303">
                            <img class="btn_-round-square2-qGs8vj btn_-round-square2"
                                src="/img/btn-roundsquare2@2x.png" alt="Btn_RoundSquare2" />
                            <div class="matchup valign-text-middle body2">MATCHUP</div>
                        </div>
                    </div>
                    <div class="btn_-favorite_-check">
                        <div>
                            <div class="group-28"><img class="star" src="/img/star-23@2x.png" alt="Star" /></div>
                            <div class="group-29-rplUIj smart-layers-pointers">
                                <img class="star" src="/img/star-24@2x.png" alt="Star" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- <div :class="$style['btn_-favorite_-check']">
                        <div :class="$style['frame-container']">
                            <div :class="$style['frame-382']"><img :class="$style['star-1']" src="/img/star-13@2x.png" alt="Star" /></div>
                            <div :class="$style['frame']"><img :class="$style['star-2']" src="/img/star-3@2x.png" alt="Star" /></div>
                        </div>
                    </div> -->
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

onMounted(async () => {
    await nextTick();
});

</script>

<style scoped module>
@import '@/public/css/frmu95mobileu95league.css';
</style>