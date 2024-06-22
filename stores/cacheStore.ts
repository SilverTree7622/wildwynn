import { defineStore } from "pinia";
import { ECommonSportSectionValue, type TCommonLeagueSection, type TCommonMatchUpSection, type TCommonSportSection } from "~/types/Common/sport";
import type { TCommonTabTypes } from "~/types/Common/tab";


export type TCacheStoreSection = TCommonSportSection | TCommonMatchUpSection | TCommonLeagueSection;

export const useCacheStore = defineStore('cacheStore', () => {
    const {
        INIT_DATA,
    } = useRuntimeConfig().public.CONSTANTS;

    const opt = reactive({
        section: <TCacheStoreSection> 'football',
        tab: <TCommonTabTypes> 'live',
        data: <any> {},
    });
    
    const onMountedBased = () => {
        
    };

    const onBeforeUnmountBased = () => {
        
    };

    const onMountedTab = async (
        section: TCacheStoreSection,
        tab: TCommonTabTypes,
        param?,
    ) => {
        opt.section = section;
        opt.tab = tab;
        const path = `${ ECommonSportSectionValue[ section ] }Schedule`;
        const res = await useApiFetch<typeof opt.data>(
            path,
            {
                method: 'POST',
            },
            param,
        );
        const data = res.data['data'] ?? {};
        // when user just go 2 another path then just ignore
        if (opt.section !== section || opt.tab !== tab) {
            return;
        }
        // localStorage.setItem(storageKey, JSON.stringify(data));
        opt.data = data;
        // TODO: have to add compare logic between fetch res & local storage later

        return opt.data;
    };

    /**
     * save to localstorage for the cache
     */
    const onBeforeUnmountTab = () => {
        const storageKey = `${ INIT_DATA }_${ opt.section }_${ opt.tab }`;
        localStorage.setItem(storageKey, JSON.stringify(opt.data));
    };

    return {
        onMountedBased,
        onBeforeUnmountBased,
        onMountedTab,
        onBeforeUnmountTab,

    };
});