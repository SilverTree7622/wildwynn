import type { TInitData } from "~/types";


export const useApiFetch = async <T> (url: string, config): Promise<{
    data: T | {};
    pending: boolean;
    error: boolean;
}> => {
    const {
        apiURL,
        CONSTANTS,
    } = useRuntimeConfig().public;
    const {
        INIT_DATA,
        FETCH_TRIAL_MAX_CNT,
    } = CONSTANTS;

    const opt = reactive({
        delayTime: 1500,
        trialCnt: <number> 0,
    });

    const { data, pending, error, refresh } = await useFetch<T>(
        `${ apiURL }/${ url }`, config
    );
    if (error.value) {
        
    }
    if (!data.value) {
        return {
            data: {}, pending: pending.value, error: !!error.value,
        };
    }

    return {
        data: data.value, pending: pending.value, error: !!error.value,
    };
};