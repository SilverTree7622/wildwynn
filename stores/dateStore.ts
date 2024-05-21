import { defineStore } from "pinia";


export const useDateStore = defineStore('dateStore', () => {

    const opt = reactive({
        date: <any> '',
    });

    const init = () => {
        
    };

    const setDate = (date: Date) => {
        opt.date = date;
    };

    const getDate = () => {
        return opt.date;
    };

    return {
        init,
        setDate,
        getDate,
    };
});