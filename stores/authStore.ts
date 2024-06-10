import { defineStore } from "pinia";
import type { TFetchCommonRes, TFetchRes } from "~/types";
import type { TAuthUser } from "~/types/Auth";
import UtilAuth from "~/utils/auth";


export type TAuthStoreTabType =
    'signin' | 'signup' |
    'complete1' | 'complete1country' |
    'complete2' | 'complete2league' | 'complete2team' | 'complete2teamdetail'
;

export const useAuthStore = defineStore('authStore', () => {

    const opt = reactive({
        isOpen: <boolean> false,
        tab: <TAuthStoreTabType> 'signin',
    });

    const sign = reactive({
        isSignIn: <boolean> false,
        isSignUpProgress: <boolean> false,
    });

    const user = reactive<TAuthUser>({
        _platform: <string> '',
        _platform_uid: <number> 0,
        _platform_gid: <number> 0,
        _platform_bid: <number> 0,
        _platform_ver: <string> '',
        _connect_time: <number> 0,
        _memid: <number> 0,
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

    const signIn = async (email: string, password: string): Promise<TFetchCommonRes> => {
        const res = await $fetch<TFetchRes>('https://jsonplaceholder.typicode.com/signin', {
            method: 'POST',
            body: {
                email, password,
            },
        });
        const signInRes: TFetchCommonRes = {
            isError: false,
            isSuccess: false,
            msg: '',
        };

        if (res['data']) {
            signInRes.isSuccess = false;
            return signInRes;
        }
        
        
        sign.isSignIn = true;
        signInRes.isSuccess = true;
        return signInRes;
    };

    const signUp = async () => {

        sign.isSignIn = true;
    };

    const signOut = async () => {

        sign.isSignIn = false;
    };

    const setUser = (info: typeof user) => {
        user._platform = info._platform;
        user._platform_uid = info._platform_uid;
        user._platform_gid = info._platform_gid;
        user._platform_bid = info._platform_bid;
        user._platform_ver = info._platform_ver;
        user._connect_time = info._connect_time;
        user._memid = info._memid;
    };
    
    const startSignUp = () => {
        sign.isSignUpProgress = true;
    };

    const outOfDuringSignUp = () => {
        sign.isSignUpProgress = false;
    };

    const getIsSignIn = (): boolean => {
        return sign.isSignIn;
    };

    const getUser = (): typeof user => {
        return user;
    };

    const getIsOpen = (): boolean => {
        return opt.isOpen;
    };

    const getTab = (): TAuthStoreTabType => {
        return opt.tab;
    };

    return {
        init,
        show,
        hide,

        signIn,
        signUp,
        signOut,
        setUser,
        startSignUp,
        outOfDuringSignUp,
        getIsSignIn,
        getUser,

        getIsOpen,
        getTab,
    };
});