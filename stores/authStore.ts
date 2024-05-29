import { defineStore } from "pinia";


export type TAuthStoreTabType = 'signin' | 'signup' | 'complete1' | 'complete2';

export const useAuthStore = defineStore('authStore', () => {

    const opt = reactive({
        isOpen: <boolean> false,
        tab: <TAuthStoreTabType> 'signin',
    });

    const init = () => {
        opt.isOpen = false;
        opt.tab = 'signin';
    };

    const show = (tab?: TAuthStoreTabType) => {
        opt.isOpen = true;
        opt.tab = tab ?? 'signin';
    };
    
    const hide = () => {
        opt.isOpen = false;
    };

    const getIsOpen = () => {
        return opt.isOpen;
    };

    const getTab = () => {
        return opt.tab;
    };
    
    return {
        init,
        show,
        hide,
        getIsOpen,
        getTab,
    };
});