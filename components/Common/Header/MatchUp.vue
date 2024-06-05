<template>
    <div class="header screen">
        <div class="frame-410 frame-1">
            <a target="_blank"><img class="icon_-line-arrow-1" src="/img/icon-linearrow-1@2x.png" alt="Icon_LineArrow"
                    @click="clickBack" />
            </a>
            <div class="frame-415 frame-1 ml-10">
                <div class="premier-league leaguetitle !text-2xl">Premier League</div>
                <div class="x0000-04092024-tue body2">00:00, 04/09/2024, TUE</div>
            </div>
            <!-- <div class="btn_-favorite_-check2-1"><img class="star-1" src="/img/star-1@2x.png" alt="Star" /></div> -->
            <CommonFavoriteStar class="mr-2" />
        </div>
        <div class="live_-match-matchup">
            <!-- <div class="btn_-favorite_-check2-1"><img class="star-1" src="/img/star-1@2x.png" alt="Star" /></div> -->
            <CommonFavoriteStar class="mr-4" />
            <div class="live-match-matchup">
                <div class="frame-414 frame-1">
                    <img class="aston-villa-2" src="/img/astonvilla.png" alt="AstonVilla" />
                    <div class="aston-villa-3 valign-text-middle body2">ASTON VILLA</div>
                </div>
                <div class="frame-matchup frame-1">
                    <div class="frame frame-1">
                        <div class="finished headline3">FINISHED</div>
                        <h1 class="text-2 title !text-4xl">0 - 2</h1>
                    </div>
                    <a href="/LiveTrack" target="_blank"><img class="btn_-live-tracker-matchup"
                            src="/img/btn-livetracker@2x.png" alt="Btn_LiveTracker" />
                    </a>
                </div>
                <div class="frame-412-matchup frame-1">
                    <img class="arsenal-2" src="/img/arsenal.png" alt="Arsenal" />
                    <div class="arsenal-3 valign-text-middle body2">ARSENAL</div>
                </div>
            </div>
            <!-- <div class="btn_-favorite_-check2-1"><img class="star-1" src="/img/star-1@2x.png" alt="Star" /></div> -->
            <CommonFavoriteStar class="" />
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter()

const clickBack = () => {
    router.back();
};
</script>

<style scoped>
@import '@/public/css/matchup/header/styleguide.css';
@import '@/public/css/matchup/header/globals.css';
@import '@/public/css/matchup/header/frame-342-all-breakpoints.css';

.header .live_-match-matchup {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 4px;
    position: relative;
}

.header .live-match-matchup {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: 5px 2px;
  position: relative;
}

.header .btn_-live-tracker-matchup {
  cursor: pointer;
  height: 24px;
  position: relative;
  width: 36px;
}

.header .frame-412-matchup {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 12px 5px;
}

.header .frame-matchup {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  justify-content: center;
}
</style>