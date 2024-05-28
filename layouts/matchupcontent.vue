<template>
    <div class="frmu95mobile screen" style="background: #001226;">
        <CommonHeaderMain
            :result_nav_code="props.result.nav_code"
        />
        
        <!-- <CommonHeaderMatchUp /> -->

        <CommonHeaderTabMatchUp
            :sName="props.sName"
            :tab="props.tab"
        />
        <LoadingSpinner v-show="props.isPending" style="margin-top: 30px; margin-bottom: 50px;" />
        <div class="">
            <slot v-if="!props.isPending"></slot>
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

</script>

<style scoped>

</style>