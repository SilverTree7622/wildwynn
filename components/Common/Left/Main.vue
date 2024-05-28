<template>
    <div id="overlay-left" class="overlay-base">
        <div class="left screen">
            <div class="left-sjwFMh">
                <div class="searcher-2AWpWu">
                    <div class="group-16-OuNp0x">
                        <div class="rectangle-35-w5grIQ"></div>
                        <img class="x1-w5grIQ" src="/img/-1-3@2x.png" alt="1" />
                        <input class="search-w5grIQ body" name="search" placeholder="search" type="text" required />
                    </div>
                </div>
                <NuxtLink to='/SignIn'>
                    <div class="btn_-log-in-2AWpWu">
                        <div class="group-32-1jS6aQ">
                            <div class="rectangle-13-PmwrQq"></div>
                            <div class="login valign-text-middle body">LOGIN</div>
                        </div>
                        <div class="group-33-1jS6aQ smart-layers-pointers">
                            <div class="rectangle-13-C1PDew"></div>
                            <div class="login valign-text-middle body">LOGIN</div>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink to='/SignUp'>
                    <div class="btn_-join-2AWpWu">
                        <div class="group-30-Ktd1hs">
                            <div class="rectangle-13-xrvEYA"></div>
                            <div class="join valign-text-middle body">JOIN</div>
                        </div>
                        <div class="group-31-Ktd1hs smart-layers-pointers">
                            <div class="rectangle-13-r7bZUz"></div>
                            <div class="join valign-text-middle body">JOIN</div>
                        </div>
                    </div>
                </NuxtLink>
                <div class="frame-302-2AWpWu">
                    <div class="popular-leagues-RD63qm headline2">POPULAR LEAGUES</div>
                    <div class="football-RD63qm body2">FOOTBALL</div>
                    <div class="tennis-RD63qm body2">TENNIS</div>
                    <div class="basketball-RD63qm body2">BASKETBALL</div>
                    <div class="ice-hockey-RD63qm body2">ICE HOCKEY</div>
                    <img class="line-10-RD63qm" src="/img/line-10-2@2x.png" alt="Line 10" />
                    <NuxtLink :to="`/League`" @click.native="hide()">
                    <!-- <a href="/League" target="_self"> -->
                        <div class="btn_-round-square3-RD63qm btn_-round-square3">
                            <img class="rectangle-13-yB3zsm" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Champions League</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-9oVGrH smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/League`" @click.native="hide()">
                    <!-- <a href="/League" target="_self"> -->
                        <div class="btn_-round-square3-vFJtBz btn_-round-square3">
                            <img class="rectangle-13-pk3F1I" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Europa League</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-Tx1ExH smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/League`" @click.native="hide()">
                    <!-- <a href="/League" target="_self"> -->
                        <div class="btn_-round-square3-BPOkBB btn_-round-square3">
                            <img class="rectangle-13-XyxAFA" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Europa Conference League</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-7JJx41 smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/League`" @click.native="hide()">
                    <!-- <a href="/League" target="_self"> -->
                        <div class="btn_-round-square3-XhtUeJ btn_-round-square3">
                            <img class="rectangle-13-qk2tv3" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">K League</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-xXnr7f smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/League`" @click.native="hide()">
                    <!-- <a href="/League" target="_self"> -->
                        <div class="btn_-round-square3-KcIRZZ btn_-round-square3">
                            <img class="rectangle-13-5NmeeS" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Korean Cup</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-8Yso7y smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-VbznK8 btn_-round-square3">
                            <img class="rectangle-13-m0mA2X" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Premier League</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-jnsTkR smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-4vSxSo btn_-round-square3">
                            <img class="rectangle-13-vONOn3" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">La Liga</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-xfjbgc smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-sYKcvK btn_-round-square3">
                            <img class="rectangle-13-7W9sCI" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Bundesliga</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-6zPwYE smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-oJPv0t btn_-round-square3">
                            <img class="rectangle-13-QTIbSi" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Serie A</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-DbD6D5 smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-w4kK7O btn_-round-square3">
                            <img class="rectangle-13-QywRxO" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">League 1</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-OucCWU smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-515wxC btn_-round-square3">
                            <img class="rectangle-13-Gz3xTV" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Euro 2024</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-MJaVUS smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-In9ZsR btn_-round-square3">
                            <img class="rectangle-13-IXUmVg" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">ATP Barcelona</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-WS1umS smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-Tj32rS btn_-round-square3">
                            <img class="rectangle-13-mMQi5a" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">NBA</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-t4ll5G smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-Si4fAY btn_-round-square3">
                            <img class="rectangle-13-J2Z1rT" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Euroleague</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-8GKZxY smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-hHuZBh btn_-round-square3">
                            <img class="rectangle-13-ElvWWl" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">Eurobasket</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-sivbsO smart-layers-pointers"></div>
                            </div>
                        </div>
                    <!-- </a> -->
                    </NuxtLink>
                    
                    <NuxtLink :to="`/FootBall/League`" @click.native="hide()">
                    <!-- <a href="/FootBall/League" target="_self"> -->
                        <div class="btn_-round-square3-KcFusU btn_-round-square3">
                            <img class="rectangle-13-cFltJC" src="/img/rectangle-13-33@2x.png" alt="Rectangle 13" />
                            <div class="champions-league body">NHL</div>
                            <div class="btn_-sports-icon_-hover">
                                <div class="rectangle-13-vtWQ8l smart-layers-pointers"></div>
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
const overlayStore = useOverlayStore();

const hide = () => {
    overlayStore.HideOverlay('left', 'animate-appear');
};

onMounted(async () => {
    await nextTick();
    overlayStore.closeOutsideOverlay("left");
});
</script>

<style scoped>

</style>