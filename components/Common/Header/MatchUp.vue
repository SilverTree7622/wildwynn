<template>
    <div class="wrapper-matchup">
        <div class="frame mx-2">
            <a href="/FootBall" target="_blank" rel="noopener noreferrer">
                <img class="icon-linearrow" src="/img/icon-linearrow@2x.png" @click="clickBack" />
            </a>
            <div class="div mt-2">
                <div class="text-wrapper title mb-2">Premier League</div>
                <div class="element-tue ">00:00, 04/09/2024, TUE</div>
            </div>
            <CommonFavoriteStar />
        </div>
        <div class="header">
            <div class="live-match">
                <CommonFavoriteStar class="mr-4" />
                <div class="div">
                    <div class="frame-2">
                        <img class="aston-villa" src="/img/astonvilla.png" />
                        <div class="text-wrapper body">ASTON VILLA</div>
                    </div>
                    <div class="overlap">
                        <div class="frame-3">
                            <div class="finished">FINISHED</div>
                            <div class="text-wrapper-2 title">0 - 2</div>
                        </div>
                        <a href="/LiveTrack" target="_blank" rel="noopener noreferrer"><img class="btn-livetracker"
                                src="/img/btn-livetracker@2x.png" /></a>
                    </div>
                    <div class="frame-4">
                        <img class="arsenal" src="/img/arsenal.png" />
                        <div class="arsenal-2 body">ARSENAL</div>
                    </div>
                </div>
                <CommonFavoriteStar class="ml-4" />
            </div>
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
/* @import '@/public/css/matchup/header/styleguide.css'; */

.wrapper-matchup {
    background-color: #011e3d;
}

.frame {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 2px;
    position: relative;
}

.frame .icon-linearrow {
    position: relative;
    width: 8.07px;
    height: 14px;
    margin-left: -1px;
}

.frame .div {
    position: relative;
    /* width: 174px; */
    /* height: 46px; */
    text-align: center;
}

.frame .text-wrapper {
    position: relative;
    top: -1px;
    left: 0;
    /* font-family: var(--league-title-font-family);
    font-weight: var(--league-title-font-weight); */
    color: #ffffff;
    /* font-size: var(--league-title-font-size);
    letter-spacing: var(--league-title-letter-spacing);
    line-height: var(--league-title-line-height);
    font-style: var(--league-title-font-style); */
    
}

.frame .element-tue {
    font-family: var(--body2-font-family);
    font-weight: var(--body2-font-weight);
    color: #ffffff;
    font-size: var(--body2-font-size);
    letter-spacing: var(--body2-letter-spacing);
    line-height: var(--body2-line-height);
    white-space: nowrap;
    font-style: var(--body2-font-style);
}

.frame .btn-favorite {
    position: relative;
    width: 20px;
    height: 20px;
}

.frame .overlap-group {
    position: relative;
    height: 20px;
}

.frame .star-wrapper {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    transition: all 0.2s ease;
}

.frame .star {
    position: absolute;
    width: 19px;
    height: 18px;
    top: 0;
    left: 0;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 6px 12px;
    position: relative;
    background-color: #011e3d;
}

.header .frame {
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}

.header .live-match {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    position: relative;
    flex: 0 0 auto;
}

.header .btn-favorite {
    position: relative;
    width: 20px;
    height: 20px;
}

.header .overlap-group {
    position: relative;
    height: 20px;
}

.header .star-wrapper {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    transition: all 0.2s ease;
}

.header .star {
    position: absolute;
    width: 19px;
    height: 18px;
    top: 0;
    left: 0;
}

.header .div {
    position: relative;
    width: 262px;
    height: 120px;
}

.header .frame-2 {
    position: absolute;
    width: 71px;
    height: 108px;
    top: 0;
    left: -10px;
}

.header .aston-villa {
    position: absolute;
    width: 43px;
    height: 50px;
    top: 12px;
    left: 13px;
    object-fit: cover;
}

.header .text-wrapper {
    position: absolute;
    width: 62px;
    height: 28px;
    top: 71px;
    left: 4px;
    /* font-family: var(--body2-font-family);
    font-weight: var(--body2-font-weight); */
    color: #ffffff;
    /* font-size: var(--body2-font-size); */
    text-align: center;
    /* letter-spacing: var(--body2-letter-spacing);
    line-height: var(--body2-line-height);
    font-style: var(--body2-font-style); */
}

.header .overlap {
    position: absolute;
    width: 71px;
    height: 83px;
    top: 20px;
    left: 94px;
}

.header .frame-3 {
    position: absolute;
    width: 71px;
    height: 62px;
    top: 0;
    left: 0;
}

.header .finished {
    position: relative;
    top: -1px;
    left: 3px;
    font-family: var(--head-line-3-font-family);
    font-weight: var(--head-line-3-font-weight);
    color: #ffffff;
    font-size: var(--head-line-3-font-size);
    text-align: center;
    letter-spacing: var(--head-line-3-letter-spacing);
    line-height: var(--head-line-3-line-height);
    font-style: var(--head-line-3-font-style);
}

.header .text-wrapper-2 {
    position: relative;
    top: 19px;
    left: 0;
    width: 100%;
    /* font-family: var(--title-font-family);
    font-weight: var(--title-font-weight); */
    color: #ffffff;
    /* font-size: var(--title-font-size); */
    text-align: center;
    /* letter-spacing: var(--title-letter-spacing);
    line-height: var(--title-line-height); */
    white-space: nowrap;
    /* font-style: var(--title-font-style); */
}

.header .btn-livetracker {
    position: relative;
    width: 36px;
    height: 24px;
    top: 80px;
    left: 19px;
}

.header .frame-4 {
    position: relative;
    width: 71px;
    height: 108px;
    top: 0;
    left: 200px;
    text-align: center;
}

.header .arsenal {
    position: relative;
    width: 46px;
    height: 50px;
    top: 12px;
    left: 8px;
    object-fit: cover;
}

.header .arsenal-2 {
    position: absolute;
    width: 55px;
    height: 14px;
    top: 71px;
    /* left: 6px; */
    /* font-family: var(--body2-font-family);
    font-weight: var(--body2-font-weight); */
    color: #ffffff;
    /* font-size: var(--body2-font-size); */
    text-align: center;
    /* letter-spacing: var(--body2-letter-spacing);
    line-height: var(--body2-line-height);
    font-style: var(--body2-font-style); */
}

.header .img-wrapper {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
}
</style>