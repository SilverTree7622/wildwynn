import { defineStore } from "pinia";


export const useFilterStore = defineStore('filterStore', () => {

    const favorite = reactive({
        isToggled: <boolean>false,
        sortLogic: <Function>(list: any[]) => {
            return list;
        },
    });

    const time = reactive({
        isToggled: <boolean>false,
        sortLogic: <Function> (list: any[]) => {
            const sortedList = list.sort((a, b) => {
                return a.date.getTime() - b.date.getTime();
            });
            return sortedList.map((match, index, array) => {
                match.hasLeagueTag = index === 0 || array[index - 1].lg_name !== match.lg_name;
                return match;
            });
        },
        sortLogicBasic: <Function> (list: any[]) => {
            list.map((item) => {
                item.hasLeagueTag = false;
            });
            const groupedLeague = list.reduce((acc, match) => {
                if (!acc[match.lg_name]) {
                    acc[match.lg_name] = [];
                }
                acc[match.lg_name].push(match);
                return acc;
            }, {});
            const sortedLeague = Object.entries(groupedLeague).map((item) => {
                const [ lg_name, matches, ] = item;
                const matchesList = matches as any[];
                matchesList.sort((a, b) => a.date.getTime() - b.date.getTime());
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
                return a.matches[0]['date'].getTime() - b.matches[0]['date'].getTime();
            }).map((item) => {
                finalList.push(...item.matches);
            });
            return finalList;
        },
    });

    const date = reactive({
        sortLogic: <Function>(list: any[], filterDate: Date) => {
            const filteredList = list.filter((item) => {
                const isSameDate = (
                    item.date.getFullYear() === filterDate.getFullYear() &&
                    item.date.getMonth() === filterDate.getMonth() &&
                    item.date.getDate() === filterDate.getDate()
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

    const sortList = <T>(list: T[], filterDate: Date) => {
        opt.list = list;
        const returnList = date.sortLogic(list, filterDate);
        opt.sortedList = returnList;
        if (favorite.isToggled) {
            opt.sortedList = favorite.sortLogic(opt.sortedList);
        }
        if (time.isToggled) {
            // time 활성화시 분류
            opt.sortedList = time.sortLogic(opt.sortedList);
        } else {
            // time 비활성화시 분류
            opt.sortedList = time.sortLogicBasic(opt.sortedList);
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