import { defineStore } from "pinia";
import { ECommonSportSectionValue, ECommonSportValue, type TCommonSportSection } from "~/types/Common/sport";
import type { TSportLiveRealTimeTypes } from "~/types/live";


export const useLiveIntervalLoadingStore = defineStore('liveIntervalLoadingStore', () => {
    const opt = reactive({
        isOnLiveTab: <boolean> false,
        isPending: <boolean> false,
        termDuration: <number> 10 * 1000,
        realTimeData: <TSportLiveRealTimeTypes | {}> {},
    });

    const callLoading = async (sport: TCommonSportSection) => {
        if (!opt.isOnLiveTab) return;
        opt.isPending = true;
        const res = await useApiFetch<TSportLiveRealTimeTypes>(
            `${ ECommonSportSectionValue[ sport ] }RealTime`,
            {
                method: 'POST',
            },
            {
                sid: ECommonSportValue['FootBall'],
                fromdate: useDateStore().getFromDate(),
            },
        );
        console.log('res from interval loading: ', res);

        opt.realTimeData = res['data'];
        opt.isPending = false;
        setTimeout(async () => {
            if (!opt.isOnLiveTab) return;
            await callLoading(sport);
        }, opt.termDuration);
    };
    
    const onMounted = async (sport: TCommonSportSection) => {
        opt.isOnLiveTab = true;
        await callLoading(sport);
    };

    const onBeforeUnmount = () => {
        opt.isOnLiveTab = false;
    };

    const setTabActive = (value: boolean) => {
        opt.isOnLiveTab = value;
    };

    return {
        onMounted,
        onBeforeUnmount,
        setTabActive,
    };
});