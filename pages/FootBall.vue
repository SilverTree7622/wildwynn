<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain />
        <CommonTabMain
            :sName="'FootBall'"
            :tab="opt.tab"
        />

        <div class="sub-tap-Mzx5SR">
            <div class="rectangle-38-rkUyvw"></div>
            <div class="frame-279-rkUyvw">
                <div class="group-15-ppRdQV">
                    <div class="btn_-round-square-eqKfdS btn_-round-square">
                        <div class="group-24-lHViIx group-24">
                            <div class="rectangle-13-Tz4L9L"></div>
                            <div class="text-Tz4L9L text body">0</div>
                        </div>
                        <div class="group-25-lHViIx smart-layers-pointers">
                            <div class="rectangle-13-Z2ybf4"></div>
                            <div class="text-Z2ybf4 text body">0</div>
                        </div>
                    </div>
                    <div class="btn_-circle-eqKfdS btn_-circle">
                        <div class="ellipse-4"></div>
                        <img class="polygon-3-03xxxm smart-layers-pointers" src="/img/polygon-3-1@2x.png"
                            alt="Polygon 3" />
                    </div>
                    <img class="star-3-eqKfdS" src="/img/star-3-1@2x.png" alt="Star 3" />
                </div>
                <a href="/FootBall" target="_self">
                    <div class="group-14-ppRdQV">
                        <div class="btn_-round-square-6PjiIf btn_-round-square">
                            <div class="group-24-b9oapg group-24">
                                <div class="rectangle-13-PHX7OD"></div>
                                <div class="text-PHX7OD text body">By time</div>
                            </div>
                            <div class="group-25-b9oapg smart-layers-pointers">
                                <div class="rectangle-13-989EQc"></div>
                                <div class="text-989EQc text body">By time</div>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="group-13-ppRdQV">
                    <div class="btn_-round-square-SqVRvm btn_-round-square">
                        <div class="group-24-vpjhxn group-24">
                            <div class="rectangle-13-NyCxgV"></div>
                            <div class="text-NyCxgV text body">Text</div>
                        </div>
                        <div class="group-25-vpjhxn">
                            <div class="rectangle-13-JxJyba"></div>
                            <div class="text-JxJyba text body">Text</div>
                        </div>
                    </div>
                    <div class="group-11-SqVRvm">
                        <div class="btn_-circle-Px0qxZ btn_-circle">
                            <div class="ellipse-4"></div>
                            <img class="polygon-3-O6vvrF smart-layers-pointers" src="/img/polygon-3-1@2x.png"
                                alt="Polygon 3" />
                        </div>
                    </div>
                    <div class="group-12-SqVRvm">
                        <div class="btn_-circle-722jqV btn_-circle">
                            <div class="ellipse-4"></div>
                            <img class="polygon-3-VuSxuy smart-layers-pointers" src="/img/polygon-4-1@2x.png"
                                alt="Polygon 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="live-Mzx5SR live headline2">&nbsp;</div>


        <LoadingSpinner v-show="opt.isPending" style="margin-top: 2px;" />
        <FootBallLiveMain
            v-if="opt.tab === 'live'"
            :result_league="opt.result.league"
        />
        <FootBallFixturesMain
            v-if="opt.tab === 'fixtures'"
            :result_league="opt.result.league"
        />
        <FootBallOddsMain
            v-if="opt.tab === 'odds'"
            :result_league="opt.result.league"
        />
        <FootBallResultMain
            v-if="opt.tab === 'result'"
            :result_league="opt.result.league"
        />
        <FootBallLeagueMain
            v-if="opt.tab === 'league'"
        />
        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>

const route = useRoute();

const opt = reactive({
    isPending: <boolean> true,
    tab: <string> 'live',
    result: <any> {},
});
opt.tab = route.query['tab'] as string ?? 'live';

onMounted(async () => {
    opt.isPending = true;
    await nextTick();

    // await res simulation
    opt.result = {
        sName: 'dummy_sName',
        league: []
    };
    setTimeout(() => {
        opt.result.league.push(
            { lg_name: 'dummy_lg_name' },
            { lg_name: 'dummy_lg_name2' },
            { lg_name: 'dummy_lg_name3' },
            { lg_name: 'dummy_lg_name4' },
            { lg_name: 'dummy_lg_name5' },
        );
        opt.isPending = false;
    }, 1500);
});

onBeforeUnmount(async () => {
    // TODO: save to localstorage for 
});

</script>

<style scoped>

</style>