<template>
    <div class="header-1 header-2">
        <div class="frame-562">
            <NuxtLink href="/FootBall"><img class="icon_-line-arrow" src="/img/icon-linearrow@2x.png"
                    alt="Icon_LineArrow" />
            </NuxtLink>
        </div>
        <div class="frame-397">
            <img class="premier_-league_logo-1" src="/img/premier-league-logo-1@2x.png"></img>
            <div class="frame-401">
                <h1 class="title leaguetitle">{{ props.title }}</h1>
                <div class="flex-row">
                    <div>
                        <img class="flag_-circle_eng" :src="props.flag" />
                    </div>
                    <p class="surname body">{{ `${props.country} / ${props.level} / ${props.bet}` }}</p>
                </div>
            </div>
            <CommonFavoriteStar
                :isToggled="props.isStarToggled"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    flag: string;
    country: string;
    level: string;
    bet: string;
    isStarToggled: boolean;
}>();



</script>

<style scoped>

.header-1 {
    align-items: center;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
}

.header-2 {
    align-self: stretch;
    background-color: var(--frblue);
    display: flex;
    position: relative;
    width: 100%;
}

.frame-562 {
    align-self: stretch;
    display: flex;
    height: 12px;
    position: relative;
    width: 100%;
}

.icon_-line-arrow {
  cursor: pointer;
  height: 14px;
  margin-left: -1px;
  margin-top: -1px;
  width: 8.07px;
}

.frame-397 {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 10px;
    justify-content: center;
    position: relative;
}

.premier_-league_logo-1 {
    background-size: 100% 100%;
    height: 60px;
    position: relative;
    width: 47.37px;
}

.frame-401 {
    height: 49px;
    position: relative;
    width: 224px;
}

.title {
    color: var(--wt);
    font-weight: 600;
    left: 1px;
    line-height: normal;
    position: absolute;
    top: -1px;
}

.leaguetitle {
  font-family: var(--font-family-pretendard-semibold);
  font-size: var(--font-size-xxxxl);
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  gap: 9px;
  height: 21px;
  left: 0;
  min-width: 224px;
  position: absolute;
  top: 28px;
}

.flag_-circle_eng {
    align-self: flex-end;
    background-size: 100% 100%;
    height: 20px;
    width: 20px;
    left: 0px;
    top: 0px;
}

.surname {
    color: var(--wt);
    font-weight: 400;
    line-height: normal;
    min-height: 16px;
    margin-left: 20px;
}

.body {
  font-family: var(--font-family-pretendard-regular);
  font-size: var(--font-size-l);
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
}

</style>
