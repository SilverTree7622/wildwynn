import { defineStore } from "pinia";
import moment from 'moment-timezone';
import type { TSelectorLang, TSelectorOdds, TSelectorTime } from "~/types/Selector";


export const useSelectorStore = defineStore('selectorStore', () => {
    
    const opt = reactive({
        lang: <TSelectorLang[]> [
            'EN', 'KR', 'CN', 'FR',
        ],
        time: <TSelectorTime[]> [],
        odds: <TSelectorOdds[]> [],
    });

    const setTimeFormat = (nation: string): string => {
        const now = moment().tz(nation);
        const utcOffset = now.format('Z');
        return `${ nation } (${ utcOffset })`;
    };

    const onMounted = (
        time: TSelectorTime[],
        odds: TSelectorOdds[],
    ) => {
        opt.time = time;
        opt.odds = odds;
    };

    const getLang = () => {
        return opt.lang;
    };

    const getTime = () => {
        return opt.time;
    };

    const getOdds = () => {
        return opt.odds;
    };

    return {
        onMounted,
        setTimeFormat,
        getLang,
        getTime,
        getOdds,
    };
});