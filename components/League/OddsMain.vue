<template>
    <div class="contents_-football contents_-football_-live-Mzx5SR" id="contents_-football_-live">
        <template v-for="league in props.result_league">
            <div class="frame-317">
                <div class="group-17">
                    <div class="rectangle-28-lE9kB9 rectangle-28"></div>
                    <div class="premier-league-lE9kB9 premier-league headline2" style="left:14px;">
                        {{ dateStore.getLeagueFormat(league.date, false) }}
                    </div>
                </div>

                <div class="frame-388">
                    <div class="frame-3">
                        <div class="aston-villa-3 aston-villa-6"></div>
                        <div class="aston-villa valign-text-middle body2">ASTON VILLA</div>
                    </div>
                    <div class="frame-386">
                        <div class="flex-col">
                            <div class="text headline">19: 30</div>
                            <div class="vs-2 headline">VS</div>
                            <div class="overlap-group-1">
                                <div class="matchup valign-text-middle body2">MATCHUP</div>
                            </div>
                        </div>
                    </div>
                    <div class="frame-3">
                        <div class="arsenal-4"></div>
                        <div class="arsenal valign-text-middle body2">ARSENAL</div>
                    </div>
                    <div class="btn_-favorite_-check">
                        <div class="frame-container">
                            <div class="frame-382"><img class="star-1" src="/img/star-13@2x.png" alt="Star"></div>
                            <div class="frame"><img class="star-2" src="/img/star-3@2x.png" alt="Star"></div>
                        </div>
                    </div>
                </div>
                <div class="odds_-grop">
                    <a href="/OddsTop" target="_blank">
                    <div class="frame-30"><div class="text-26 valign-text-middle body2">56.00</div></div></a><a href="/OddsDraw" target="_blank">
                    <div class="frame-30"><div class="text-27 valign-text-middle body2">13.50</div></div></a><a href="/OddsLow" target="_blank">
                    <div class="frame-306"><div class="text-28 valign-text-middle body2">1.05</div></div></a>
                    <div class="frame-307"><div class="text-29 valign-text-middle headline3">+25</div></div>
                </div>


                    <!-- <div class="live-match-Y6utjY live-match">
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
                        <div class="odds_-grop my-20">
                            <a href="/OddsTop" target="_blank">
                            <div class="frame-30"><div class="text-26 valign-text-middle body2">56.00</div></div></a><a href="/OddsDraw" target="_blank">
                            <div class="frame-30"><div class="text-27 valign-text-middle body2">13.50</div></div></a><a href="/OddsLow" target="_blank">
                            <div class="frame-306"><div class="text-28 valign-text-middle body2">1.05</div></div></a>
                            <div class="frame-307"><div class="text-29 valign-text-middle headline3">+25</div></div>
                        </div>
                    </div>
                    <div class="btn_-favorite_-check">
                        <div>
                            <div class="group-28"><img class="star" src="/img/star-23@2x.png" alt="Star" /></div>
                            <div class="group-29-rplUIj smart-layers-pointers">
                                <img class="star" src="/img/star-24@2x.png" alt="Star" />
                            </div>
                        </div>
                    </div> -->
            </div>
        </template>
    </div>
</template>


<script setup lang="ts">
const props = defineProps<{
    result_league;
}>();
const dateStore = useDateStore();

</script>

<style>
/* @import '@/public/css/frmu95mobile.css';
@import '@/public/css/frmu95mobileu95league.css';
@import '@/public/css/styleguide.css';
@import '@/public/css/globals.css';
@import '@/public/css/addStyle.css'; */

.contents_-football {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 10px 8px;
  position: relative;
  width: 100%;
}

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

.frame-3 {
  height: 108px;
  position: relative;
  width: 71px;
}

.frame-386 {
  height: 65px;
  position: relative;
  width: 83px;
}


.frame-388 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.btn_-favorite_-check {
  height: 25px;
  position: relative;
  width: 25px;
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

.aston-villa-3 {
  height: 44px;
  left: 13px;
  position: absolute;
  top: 23px;
  width: 44px;
}

.aston-villa-6 {
  background-image: url(../img/astonvilla@2x.png);
  background-size: 100% 100%;
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


.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 5px;
  min-height: 66px;
  position: relative;
  width: 72px;
}


.text {
  color: var(--bk);
  font-weight: 600;
  line-height: normal;
  margin-left: 3.0px;
  min-height: 20px;
  text-align: center;
  width: 51px;
}


.matchup {
  color: var(--bk);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  min-width: 58px;
  text-align: center;
  white-space: nowrap;
}


.arsenal {
  color: var(--bk);
  font-weight: 600;
  height: 14px;
  left: 11px;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 71px;
  width: 55px;
}


.arsenal-4 {
  background-image: url(../img/arsenal@2x.png);
  background-size: 100% 100%;
  height: 44px;
  left: 16px;
  position: absolute;
  top: 23px;
  width: 44px;
}


.frame-container {
  height: 20px;
  left: 2px;
  position: relative;
  top: 2px;
  width: 20px;
}



.frame-382 {
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}


.frame {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.2s ease;
  width: 20px;
}


.star-1 {
  height: 18.89px;
  margin-top: -1.9px;
  width: 19.82px;
}

.star-2 {
  height: 18.09px;
  margin-top: -1.9px;
  width: 19.02px;
}

.odds_-grop {
    align-items: center;
    align-self: stretch;
    display: flex;
    gap: 5px;
    height: 30px;
    justify-content: center;
    position: relative;
    width: 100%;
}

.frame-30 {
    align-items: center;
    background-image: url(@/public/img/btn-roundsquare2-2@2x.png);
    background-size: 100% 100%;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    position: relative;
    width: 89px;
}

.text-26 {
    color: var(--bk);
    font-weight: 600;
    height: 14px;
    line-height: normal;
    text-align: center;
    white-space: nowrap;
    width: 33px;
}

.text-27 {
    color: var(--bk);
    font-weight: 600;
    height: 14px;
    line-height: normal;
    margin-left: -1px;
    text-align: center;
    white-space: nowrap;
    width: 32px;
}

.frame-306 {
    background-image: url(@/public/img/btn-roundsquare2-2@2x.png);
    background-size: 100% 100%;
    cursor: pointer;
    display: flex;
    height: 30px;
    justify-content: center;
    position: relative;
    width: 89px;
}

.text-28 {
    color: var(--bk);
    font-weight: 600;
    height: 14px;
    line-height: normal;
    margin-left: -1px;
    margin-top: 8px;
    text-align: center;
    white-space: nowrap;
    width: 24px;
}

.frame-307 {
    display: flex;
    height: 30px;
    justify-content: flex-end;
    position: relative;
    width: 25px;
}

.text-29 {
    color: var(--bk);
    font-weight: 600;
    height: 17px;
    line-height: normal;
    margin-top: 7px;
    text-align: center;
    width: 25px;
}
</style>