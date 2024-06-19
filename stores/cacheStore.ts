import { defineStore } from "pinia";
import type { TCommonLeagueSection, TCommonMatchUpSection, TCommonSportSection } from "~/types/Common/sport";
import type { TCommonLeagueTab, TCommonMatchUpTab, TCommonSportTab } from "~/types/Common/tab";


export type TCacheStoreSection = TCommonSportSection | TCommonMatchUpSection | TCommonLeagueSection;
export type TCacheStoreTab = TCommonSportTab | TCommonMatchUpTab | TCommonLeagueTab;

export const useCacheStore = defineStore('cacheStore', () => {
    const {
        INIT_DATA,
    } = useRuntimeConfig().public.CONSTANTS;

    const opt = reactive({
        section: <TCacheStoreSection> 'football',
        tab: <TCacheStoreTab> 'live',
        data: <any> {},
    });
    
    const onMountedBased = () => {
        
    };

    const onBeforeUnmountBased = () => {
        
    };

    const onMountedTab = async (
        section: TCacheStoreSection,
        tab: TCacheStoreTab,
        path: string,
        param?,
    ) => {
        opt.section = section;
        opt.tab = tab;
        const storageKey = `${ INIT_DATA }_${ section }_${ tab }`;
        let data: typeof opt.data | {} = JSON.parse(localStorage.getItem(storageKey) ?? '{}');
        // if (!Object.keys(data).length) {
        //     const res = await useApiFetch<typeof opt.data>(
        //         path,
        //         { method: 'GET', },
        //     );
        //     data = res.data['data'] ?? {};
        // }
        const res = await useApiFetch<typeof opt.data>(
            path,
            {
                method: 'POST',
            },
            param,
        );
        data = res.data['data'] ?? {};
        // when user just go 2 another path then just ignore
        if (opt.section !== section || opt.tab !== tab) {
            return;
        }
        localStorage.setItem(storageKey, JSON.stringify(data));
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