<template>
    <div>
        <!-- <img src="@/public//img/matchup_header.png" style="width:100%"> -->
        <header class="header">
            <div class="frame-410">
                <a href="/FootBall" target="_self"><img class="icon_-line-arrow" src="/img/icon-linearrow-1@2x.png"
                        alt="Icon_LineArrow">
                </a>
                <div class="frame-415">
                    <div class="premier-league leaguetitle">Premier League</div>
                    <div class="x0000-04092024-tue body2">00:00, 04/09/2024, TUE</div>
                </div>
                <CommonFavoriteStar />
            </div>
            <div class="live_-match-2">
                <CommonFavoriteStar />
                <div class="live-match-1">
                    <div class="flex-row">
                        <div class="frame-414">
                            <img class="aston-villa-5" src="/img/astonvilla.png" alt="AstonVilla">
                            <div class="aston-villa-6 valign-text-middle body2">ASTON VILLA</div>
                        </div>
                        <div class="overlap-group1-2">
                            <div class="frame-413">
                                <div class="finished headline3">FINISHED</div>
                                <h1 class="text-56 title">0 - 2</h1>
                            </div>
                            <a href="/LiveTrack" target="_self"><img class="btn_-live-tracker"
                                    src="/img/property-1-btn-livetracker-default@2x.png" alt="Btn_LiveTracker">
                            </a>
                        </div>
                        <div class="frame-412-2">
                            <img class="arsenal-2" src="/img/arsenal.png" alt="Arsenal">
                            <div class="arsenal-3 valign-text-middle body2">ARSENAL</div>
                        </div>
                    </div>
                </div>
                <CommonFavoriteStar />
            </div>
        </header>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
  align-self: stretch;
  background-color: var(--frblue);
  display: flex;
  gap: 11px;
  height: 38.69px;
  justify-content: flex-start;
  position: relative;
  width: 100%;
}

.live_-match-2 {
  align-items: center;
  flex: 0 0 auto;
  gap: 4px;
}

.live-match-1 {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  width: 320px;
}

.frame {
  height: 108px;
  position: relative;
  width: 71px;
}

.aston-villa-5 {
  color: var(--wt);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  margin-bottom: 2.0px;
  min-width: 77px;
  text-align: center;
  white-space: nowrap;
}

.aston-villa-6 {
  height: 20px;
  object-fit: cover;
  width: 17px;
}

.frmu95mobile .overlap-group1-2 {
  height: 25px;
  position: relative;
  width: 70px;
}
.text-56 {
  color: var(--ltblue);
  font-weight: 500;
  height: 12px;
  line-height: normal;
  text-align: center;
  white-space: nowrap;
  width: 28px;
}

.frame-412-2 {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0px 0px;
  position: relative;
  width: 143px;
}

.arsenal-2 {
  height: 20px;
  object-fit: cover;
  width: 18px;
}

.arsenal-3 {
  color: var(--wt);
  font-weight: 600;
  height: 14px;
  line-height: normal;
  margin-top: 1px;
  text-align: right;
  width: 55px;
}

</style>