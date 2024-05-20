<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <KeepAlive>
            <CommonHeaderMain
                :result_nav_code="props.result.nav_code"
            />
        </KeepAlive>
        <CommonHeaderTabMain
            :sName="props.sName"
            :tab="props.tab"
        />

        <div class="sub-tap-Mzx5SR">
            <div class="rectangle-38-rkUyvw"></div>
            <div class="frame-279-rkUyvw">
                <CommonFilterFavorite />
                <CommonFilterByTime />
                <CommonFilterDate
                    :date="new Date().toString()"
                    :next-tab="nextTab"
                />
            </div>
        </div>

        <div class="live-Mzx5SR live headline2">&nbsp;</div>

        <LoadingSpinner v-show="props.isPending" style="margin-top: 2px; margin-bottom: 50px;" />

        <div v-show="!props.isPending">
            <slot></slot>
        </div>

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

const nextTab = () => {
    console.log(`next tab function`);
};

</script>

<style scoped>

</style>