import { defineStore } from "pinia";
import type { TCommonTabTypes } from "~/types/Common/tab";


export type TCustomDatePath = (item) => Date;
export type TCustomLeaguePath = (item) => string;
export type TCustomPathConfig = {
    tab?: TCommonTabTypes;
    isWholeDate?: boolean;
    isLive?: boolean;
    isResult?: boolean;
    date?: TCustomDatePath;
    league?: TCustomLeaguePath; 
};

export const useFilterStore = defineStore('filterStore', () => {

    const favorite = reactive({
        isToggled: <boolean> false,
        sortLogic: <Function>(list: any[], customPath?: TCustomPathConfig) => {
            return list;
        },
    });

    const time = reactive({
        isToggled: <boolean> false,
        sortLogicTime: <Function> (list: any[], customPath?: TCustomPathConfig) => {
            const getDatePath = customPath?.date ?? ((item) => { return item.date });
            const getLeaguePath = customPath?.league ?? ((item) => { return item.lg_name });
            const sortedList = list.sort((a, b) => {
                return getDatePath(a).getTime() - getDatePath(b).getTime();
            });
            sortedList.forEach((match, index, array) => {
                match.hasLeagueTag = index === 0 || getLeaguePath(array[index - 1]) !== getLeaguePath(match);
                return match;
            });
            return sortedList;
        },
        sortLogicDefault: <Function> (list: any[], customPath?: TCustomPathConfig) => {
            const getDatePath = customPath?.date ?? ((item) => { return item.date });
            const getLeaguePath = customPath?.league ?? ((item) => { return item.lg_name });
            list.map((item) => {
                item.hasLeagueTag = false;
            });
            const groupedLeague = list.reduce((acc, match) => {
                if (!acc[getLeaguePath(match)]) {
                    acc[getLeaguePath(match)] = [];
                }
                acc[getLeaguePath(match)].push(match);
                return acc;
            }, {});
            const sortedLeague = Object.entries(groupedLeague).map((item) => {
                const [ lg_name, matches, ] = item;
                // const rlg_name = getLeaguePath(matches);
                const matchesList = matches as any;
                matchesList.sort((a, b) => getDatePath(a).getTime() - getDatePath(b).getTime());
                matchesList.forEach((match, index) => {
                    match.hasLeagueTag = index === 0;
                });
                return {
                    lg_name,
                    matches: matchesList,
                };
            });
            const finalList: any[] = [];
            sortedLeague.sort((a, b) => {
                return getDatePath(a.matches[0]).getTime() - getDatePath(b.matches[0]).getTime();
            }).map((item) => {
                finalList.push(...item.matches);
            });
            return finalList;
        },
    });

    const date = reactive({
        sortLogic: <Function> (list: any[], filterDate: Date, customPath?: TCustomPathConfig) => {
            const getDatePath = customPath?.date ?? ((item) => { return item.date });
            const filteredList = list.filter((item, idx) => {
                const isSameDate = (
                    getDatePath(item).getFullYear() === filterDate.getFullYear() &&
                    getDatePath(item).getMonth() === filterDate.getMonth() &&
                    getDatePath(item).getDate() === filterDate.getDate()
                );
                return isSameDate;
            });
            return filteredList;
        },
    });

    const opt = reactive({
        list: <any[]>[],
        sortedList: <any[]>[],
    });

    const filterViaConfig = (list: any[], customPath?: TCustomPathConfig) => {
        const isWholeDate = customPath?.isWholeDate ?? false;
        const isResult = customPath?.isResult ?? false;
        const isLive  = customPath?.isLive ?? false;
        const getDatePath = customPath?.date ?? ((item) => { return item.date });
        const getNow = new Date(Date.now()).getTime();
        const configFilteredList = list.filter((item) => {
            if (isWholeDate) {
                return true;
            }
            if (isLive) {
                return (
                    item.ai_status_id === 2 ||
                    item.ai_status_id === 3 ||
                    item.ai_status_id === 4 ||
                    item.ai_status_id === 5 ||
                    item.ai_status_id === 6 ||
                    item.ai_status_id === 7
                );
            }
            if (isResult) {
                return getDatePath(item).getTime() < getNow;
            } else {
                return getDatePath(item).getTime() > getNow;
            }
        });
        return configFilteredList;
    };

    const init = () => {
        favorite.isToggled = false;
        time.isToggled = false;
        opt.list = [];
        opt.sortedList = [];
    };

    const toggle = () => {
        time.isToggled = !time.isToggled;
        return time.isToggled;
    };

    const sortList = <T> (
        list: T[], filterDate: Date, customPath?: TCustomPathConfig,
    ) => {
        opt.list = list;
        if (customPath && customPath.tab) {
            const { tab } = customPath;
            customPath.isWholeDate = (tab === 'odds' || tab === 'league');
            customPath.isLive = (tab === 'live');
            customPath.isResult = (tab === 'result');
        }
        const returnList = date.sortLogic(list, filterDate, customPath);
        opt.sortedList = filterViaConfig(returnList, customPath);
        if (favorite.isToggled) {
            opt.sortedList = favorite.sortLogic(opt.sortedList, customPath);
        }

        if (time.isToggled) {
            // time 활성화시 분류
            opt.sortedList = time.sortLogicTime(opt.sortedList, customPath);
        } else {
            // time 비활성화시 분류
            opt.sortedList = time.sortLogicDefault(opt.sortedList, customPath);
        }
        return opt.sortedList;
    };

    const getSortedList = () => {
        return opt.sortedList;
    };

    const getTimeIsToggled = () => {
        return time.isToggled;
    };

    return {
        init,
        toggle,
        sortList,
        getSortedList,
        getTimeIsToggled,
    };
});