import { defineStore } from "pinia";
import moment from 'moment-timezone';


export const useSelectorStore = defineStore('selectorStore', () => {
    
    const opt = reactive({
        time: <string> '',
        odds: <string> '',
    });

    const setTime = (time: string) => {
        opt.time = time;
    };

    const setTimeFormat = (nation: string): string => {
        const now = moment().tz(nation);
        const utcOffset = now.format('Z');
        return `${ nation } (${ utcOffset })`;
    };

    const setOdds = (odds: string) => {
        opt.odds = odds;
    };

    const getTime = () => {
        return opt.time;
    };

    const getOdds = () => {
        return opt.odds;
    };

    return {
        setTime,
        setTimeFormat,
        setOdds,
        getTime,
        getOdds,
    };
});