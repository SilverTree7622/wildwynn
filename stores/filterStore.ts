import { defineStore } from "pinia";


export const useFilterStore = defineStore('filterStore', () => {

    const favorite = reactive({
        isToggled: <boolean> false,
        sortLogic: <Function> (list: any[]) => {
            return list;
        },
    });

    const time = reactive({
        isToggled: <boolean> false,
        sortLogic: <Function> (list: any[]) => {
            return list.sort((a, b) => {
                return a.date.getTime() - b.date.getTime();
            });
        },
    });

    const date = reactive({
        sortLogic: <Function> (list: any[], filterDate: Date) => {
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
        list: <any[]> [],
        sortedList: <any[]> [],
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

    const sortList = <T> (list: T[], filterDate: Date) => {
        opt.list = list;
        const returnList = date.sortLogic(list, filterDate);
        opt.sortedList = returnList;
        if (favorite.isToggled) {
            opt.sortedList = favorite.sortLogic(opt.sortedList);
        }
        if (time.isToggled) {
            opt.sortedList = time.sortLogic(opt.sortedList);
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