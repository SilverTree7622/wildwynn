<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain
            :result_nav_code="props.result.nav_code"
        />
        <div class="live-Mzx5SR live headline2">&nbsp;</div>
        <div><img src="@/public/img/league_header.png" style="width:100%"></div>
        <CommonHeaderTabLeague
            :sName="'League'"
            :tab="props.tab"
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
                        <img class="polygon-3-03xxxm smart-layers-pointers" src="@/public/img/polygon-3-1@2x.png"
                            alt="Polygon 3" />
                    </div>
                    <img class="star-3-eqKfdS" src="@/public/img/star-3-1@2x.png" alt="Star 3" />
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
                            <img class="polygon-3-O6vvrF smart-layers-pointers" src="@/public/img/polygon-3-1@2x.png"
                                alt="Polygon 3" />
                        </div>
                    </div>
                    <div class="group-12-SqVRvm">
                        <div class="btn_-circle-722jqV btn_-circle">
                            <div class="ellipse-4"></div>
                            <img class="polygon-3-VuSxuy smart-layers-pointers" src="@/public/img/polygon-4-1@2x.png"
                                alt="Polygon 3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="live-Mzx5SR live headline2">&nbsp;</div>

        <LoadingSpinner v-show="props.isPending" style="margin-top: 2px;" />
        <slot></slot>

        <CommonFooterMain />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    isPending: boolean;
    sName: string;
    tab: string;
    result: any;
}>();

</script>

<style scoped>

</style>