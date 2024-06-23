import { defineStore } from "pinia";


export const useGoStore = defineStore('goStore', () => {
    
    const go_matchup = (loc?: string) => {
        if (loc === 'home'){
            navigateTo('/Matchup?tab=matchup');
        } else{
            navigateTo('/Matchup?tab=matchup');
        }
    };

    const go_league = (loc?: string) => {
        if (loc === 'home'){
            navigateTo('/Matchup?tab=stats');
        } else{
            navigateTo('/Matchup?tab=stats');
        }
    };
    
    const go_livetraker = () => {
        console.log('go livetraker');
    };

    return {
        go_matchup,
        go_league,
        go_livetraker,
    };
});