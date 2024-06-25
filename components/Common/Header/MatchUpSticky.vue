<template>
    <div class="frame-342-all-breakpoints screen !bg-[#011e3d] z-[2]">
        <div class="header_-short">
            <div class="frame-496">
                <a target="_blank"><img class="icon_-line-arrow" src="/img/icon-linearrow@2x.png"
                        alt="Icon_LineArrow" @click="clickBack" />
                </a>
                <div class="frame-497">
                    <div class="frame-container">
                        <div class="frame-49">
                            <div class="aston-villa valign-text-middle body2">{{ props.homeName }}</div>
                            <img class="aston-villa-1" :src="props.homeLogo" :alt="props.homeName" />
                        </div>
                        <div class="frame-494">
                            <h1 class="text-1 leaguetitle !text-2xl">{{ getScore(props.matchStatus, props.homeScore, props.awayScore) }}</h1>
                        </div>
                        <div class="frame-49">
                            <img class="arsenal" :src="props.awayLogo" :alt="props.awayName" />
                            <div class="aston-villa valign-text-middle body2">{{ props.awayName }}</div>
                        </div>
                    </div>
                </div>
                <!-- <div class="btn_-favorite_-check2"><img class="star" src="/img/star@2x.png" alt="Star" /></div> -->
                <CommonFavoriteStar class="mr-3 mt-2 p-auto" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TCommonMatchStatus } from '~/types/Common/status';
import type { TMatchUpStoreConfig } from '~/types/matchUp';

const props = defineProps<TMatchUpStoreConfig>();

const router = useRouter();

const clickBack = () => {
    router.back();
};

const getScore = (matchStatus: TCommonMatchStatus, homeScore: number, awayScore: number) => {
    const isFixtures = (
        matchStatus === 0 ||
        matchStatus === 1
    );
    return isFixtures ? `` : `${ homeScore ?? 0 } - ${ awayScore ?? 0 }`;
};
</script>

<style scoped>
@import '@/public/css/matchup/header/styleguide.css';
@import '@/public/css/matchup/header/globals.css';
@import '@/public/css/matchup/header/frame-342-all-breakpoints.css';
</style>