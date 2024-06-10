import { defineStore } from "pinia";


export const useSelectorStore = defineStore('selectorStore', () => {
    
    const opt = reactive({
        time: <string> '',
        odds: <string> '',
    });

    const setTime = (time: string) => {
        opt.time = time;
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
        setOdds,
        getTime,
        getOdds,
    };
});