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

    const go_prefix_via_position = (position: number = 0) => {
        let prefix = '';
        if (position === 0) {
            prefix = 'home';
        }
        if (position === 1) {
            prefix = 'away';
        }
        return prefix;
    };

    return {
        go_matchup,
        go_league,
        go_livetraker,
        go_prefix_via_position,
    };
});