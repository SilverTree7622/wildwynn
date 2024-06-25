<template>
    <div class="frame-342-all-breakpoints screen !bg-[#011e3d]">
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
                            <h1 class="text-1 leaguetitle !text-2xl">{{ `${ props.homeScore } - ${ props.awayScore }` }}</h1>
                        </div>
                        <div class="frame-49">
                            <img class="arsenal" :src="props.awayLogo" :alt="props.awayName" />
                            <div class="arsenal-1 valign-text-middle body2">{{ props.awayName }}</div>
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
import type { TMatchUpStoreConfig } from '~/types/matchUp';
import UtilDate from '~/utils/date';

const props = defineProps<TMatchUpStoreConfig>();

const dateStore = useDateStore();
const router = useRouter();

const clickBack = () => {
    router.back();
};

// const getTime = (timestamp: number) => {
//     // 00:00, 04/09/2024, TUE
//     const standard = new Date(UtilDate.addMillisecond(timestamp));
//     const time = `${ UtilDate.syncDigit(standard.getUTCHours()) }:${ UtilDate.syncDigit(standard.getUTCMinutes()) }`;
//     const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][standard.getUTCDay()];
//     return `${ time }, ${ dateStore.getFilterFormat(standard) }, ${ weekday }`;
// };
</script>

<style scoped>
@import '@/public/css/matchup/header/styleguide.css';
@import '@/public/css/matchup/header/globals.css';
@import '@/public/css/matchup/header/frame-342-all-breakpoints.css';
</style>