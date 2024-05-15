<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain
            :result_nav_code="props.result.nav_code"
        />
        <div class="live-Mzx5SR live headline2">&nbsp;</div>
        <div><img src="@/public/img/matchup_header.png" style="width:100%"></div>
        <CommonHeaderTabMatchUp
            :sName="props.sName"
            :tab="props.tab"
        />
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