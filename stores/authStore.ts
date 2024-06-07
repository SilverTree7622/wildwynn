import { defineStore } from "pinia";


export type TAuthStoreTabType =
    'signin' | 'signup' |
    'complete1' | 'complete1country' |
    'complete2' | 'complete2league' | 'complete2team' | 'complete2teamdetail';

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