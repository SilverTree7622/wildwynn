<template>
    <div>
        <header class="header-Mzx5SR">
            <a href="/" target="_self">
                <div class="oddsnavicom-rhojcY">ODDSNAVI.COM</div>
            </a>
            <a @click="overlayStore.ShowOverlay('left', 'animate-appear')">
                <div class="btn_menu-rhojcY">
                    <div class="group-35-AhxpXh">
                        <div class="rectangle-2-NjWEv0 rectangle-2"></div>
                        <div class="rectangle-3-NjWEv0 rectangle-3"></div>
                        <div class="rectangle-4-NjWEv0 rectangle-4"></div>
                    </div>
                    <div class="group-36-AhxpXh smart-layers-pointers">
                        <div class="rectangle-2-4re5zK rectangle-2"></div>
                        <div class="rectangle-3-4re5zK rectangle-3"></div>
                        <div class="rectangle-4-4re5zK rectangle-4"></div>
                    </div>
                </div>
            </a>
        </header>
        <div class="frame-322-Mzx5SR">
            <div class="sub-header-Ec7wbx">
                <div class="frame-321-4QEj8e">
                    <NuxtLink :to="`/FootBall`">
                    <!-- <a href="/FootBall" target="_self"> -->
                        <div class="btn_-sports-icon_-football-geZ0fe">
                            <div
                                :class="`rectangle-13-6KHUpA ${ (props.result_nav_code === 'S001' || props.result_nav_code === 'S002') && 'active' }`"
                            >
                            </div>
                            <div class="icon_-square_-football-6KHUpA">
                                <div class="football-NgKg72 body2">FOOTBALL</div>
                                <img class="icon_-football-NgKg72" src="/img/icon-football-3@2x.png" alt="Icon_Football" />
                            </div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-wNx6Ix smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/BasketBall`">
                    <!-- <a href="/BasketBall" target="_self"> -->
                        <div class="btn_-sports-icon_-basketball-geZ0fe">
                            <div :class="`rectangle-13-aHCQs6 ${ (props.result_nav_code === 'S003') && 'active' }`"></div>
                            <div class="icon_-square_-basketball-aHCQs6">
                                <div class="basketball-qpufFK body2">BASKETBALL</div>
                                <img class="icon_-basketball-qpufFK" src="/img/icon-basketball-3@2x.png"
                                    alt="Icon_Basketball" />
                            </div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-1eiwpF smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/BaseBall`">
                    <!-- <a href="/BaseBall" target="_self"> -->
                        <div class="btn_-sports-icon_-baseball-geZ0fe">
                            <div :class="`rectangle-13-OLUYfE ${ (props.result_nav_code === 'S004') && 'active' }`"></div>
                            <div class="icon_-square_-baseball-OLUYfE">
                                <img class="icon_-baseball-MAhgx4" src="/img/icon-baseball-4@2x.png" alt="Icon_Baseball" />
                                <div class="baseball-MAhgx4 body2">BASEBALL</div>
                            </div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-Qipmt9 smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/VolleyBall`">
                    <!-- <a href="/VollyBall" target="_self"> -->
                        <div class="btn_-sports-icon_-vollyball-geZ0fe">
                            <div :class="`rectangle-13-YjCcoO ${ (props.result_nav_code === 'S005') && 'active' }`"></div>
                            <div class="icon_-square_-vollyball-YjCcoO">
                                <div class="vollyball-0JJwzm body2">VOLLEYBALL</div>
                                <img class="icon_-vollyball-0JJwzm" src="/img/icon-vollyball-3@2x.png"
                                    alt="Icon_Vollyball" />
                            </div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-rqOa25 smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/Tennis`">
                    <!-- <a href="/Tennis" target="_self"> -->
                        <div class="btn_-sports-icon_-tennis-geZ0fe">
                            <div :class="`rectangle-13-rM1Yhy ${ (props.result_nav_code === 'S006') && 'active' }`"></div>
                            <div class="icon_-square_-tennis-rM1Yhy">
                                <div class="tennis-sZ6USP body2">TENNIS</div>
                                <img class="icon_-tennis-sZ6USP" src="/img/icon-tennis-4@2x.png" alt="Icon_Tennis" />
                            </div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-RAsSWo smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/IceHockey`">
                    <!-- <a href="/IceHockey" target="_self"> -->
                        <div class="btn_-sports-icon_-ice-hockey-geZ0fe">
                            <div :class="`rectangle-13-pJW32y ${ (props.result_nav_code === 'S007') && 'active' }`"></div>
                            <div class="icon_-square_-icehockey-pJW32y">
                                <div class="icehockey-PRqgRn body2">ICEHOCKEY</div>
                                <img class="icon_-icehackey-PRqgRn" src="/img/icon-icehackey-4@2x.png"
                                    alt="Icon_Icehackey" />
                            </div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-N0PwXl smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    result_nav_code: string;
}>();
const overlayStore = useOverlayStore();
</script>

<style scoped>

</style>