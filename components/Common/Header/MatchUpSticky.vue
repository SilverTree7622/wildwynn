<template>
    <div class="frame pt-3">
        <div class="header-short">
            <div class="div">
                <a href="/FootBall" target="_blank" rel="noopener noreferrer">
                    <img class="icon-linearrow" src="/img/icon-linearrow@2x.png" @click="clickBack" />
                </a>
                <div class="div-2">
                    <div class="div-3">
                        <img class="aston-villa" src="/img/astonvilla.png" />
                        <div class="text-wrapper">ASTON VILLA</div>
                    </div>
                    <div class="div-wrapper">
                        <div class="text-wrapper-2">0 - 2</div>
                    </div>
                    <div class="div-4">
                        <div class="arsenal">ARSENAL</div>
                        <img class="img" src="/img/arsenal.png" />
                    </div>
                </div>
                <CommonFavoriteStar class="ml-4" />
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
.frame {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    position: relative;
    background-color: #011e3d;
}

.frame .header-short {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 0px 0px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
    background-color: #011e3d;
}

.frame .div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}

.frame .icon-linearrow {
    position: relative;
    width: 8.07px;
    height: 14px;
    margin-left: -1px;
}

.frame .div-2 {
    position: relative;
    width: 271.65px;
    height: 29px;
}

.frame .div-3 {
    position: relative;
    /* width: 99px;
    height: 20px;
    top: 4px;
    left: 0; */
}

.frame .aston-villa {
    position: relative;
    /* width: 17px;
    height: 20px;
    top: 0;
    left: 82px; */
    object-fit: cover;
}

.frame .text-wrapper {
    position: relative;
    /* height: 14px;
    top: 2px;
    left: -20px; */
    font-family: var(--body2-font-family);
    font-weight: var(--body2-font-weight);
    color: #ffffff;
    font-size: var(--body2-font-size);
    text-align: center;
    letter-spacing: var(--body2-letter-spacing);
    line-height: var(--body2-line-height);
    white-space: nowrap;
    font-style: var(--body2-font-style);
}

.frame .div-wrapper {
    position: relative;
    /* width: 52px;
    height: 29px;
    top: 6px;
    left: 130px; */
}

.frame .text-wrapper-2 {
    top: -1px;
    left: 0;
    font-family: var(--league-title-font-family);
    font-weight: var(--league-title-font-weight);
    font-size: var(--league-title-font-size);
    position: relative;
    color: #ffffff;
    text-align: center;
    letter-spacing: var(--league-title-letter-spacing);
    line-height: var(--league-title-line-height);
    font-style: var(--league-title-font-style);
}

.frame .div-4 {
    position: relative;
    /* width: 78px;
    height: 20px;
    top: 4px;
    left: 194px; */
}

.frame .arsenal {
    position: relative;
    /* width: 55px;
    height: 14px;
    top: 1px;
    left: 23px; */
    font-family: var(--body2-font-family);
    font-weight: var(--body2-font-weight);
    color: #ffffff;
    font-size: var(--body2-font-size);
    text-align: right;
    letter-spacing: var(--body2-letter-spacing);
    line-height: var(--body2-line-height);
    font-style: var(--body2-font-style);
}

.frame .img {
    position: relative;
    /* width: 18px;
    height: 20px;
    top: 0;
    left: 0; */
    object-fit: cover;
}


</style>