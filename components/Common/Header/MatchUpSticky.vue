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
                            <div class="aston-villa valign-text-middle body2">ASTON VILLA</div>
                            <img class="aston-villa-1" src="/img/astonvilla.png" alt="AstonVilla" />
                        </div>
                        <div class="frame-494">
                            <h1 class="text-1 leaguetitle !text-2xl">0 - 2</h1>
                        </div>
                        <div class="frame-49">
                            <img class="arsenal" src="/img/arsenal.png" alt="Arsenal" />
                            <div class="arsenal-1 valign-text-middle body2">ARSENAL</div>
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
// const props = defineProps<{

// }>();

const router = useRouter();

const clickBack = () => {
    router.back();
};
</script>

<style scoped>
@import '@/public/css/matchup/header/styleguide.css';
@import '@/public/css/matchup/header/globals.css';
@import '@/public/css/matchup/header/frame-342-all-breakpoints.css';
</style>