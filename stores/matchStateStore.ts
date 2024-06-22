import { defineStore } from "pinia";
import type { TInitDataMatchState, TInitDateTypes } from "~/types/loading";


export const useMatchStateStore = defineStore('matchStateStore', () => {
    const opt = reactive({
        matchstate: <TInitDataMatchState> {},
    });
    
    const onMounted = (data: TInitDateTypes) => {
        if (data['st_matchstate']) {
            opt.matchstate = data['st_matchstate'];
        }
    };

    const chckIsLive = () => {
        
    };

    return {
        onMounted,
        chckIsLive,
    };
});