

const fetchTrial = async <T> (
    apiURL: string, url: string, config, trialCnt: number,
): Promise<{
    data: T | {};
    pending: boolean;
    error: boolean;
}> => {
    const {
        FETCH_TRIAL_MAX_CNT,
    } = useRuntimeConfig().public.CONSTANTS;
    
    const { data, pending, error, refresh } = await useFetch<T>(
        `${ apiURL }/${ url }`, config
    );
    if (error.value) {
        if (trialCnt >= FETCH_TRIAL_MAX_CNT) {
            return {
                data: {}, pending: pending.value, error: !!error.value,
            };
        }
        return await fetchTrial(apiURL, url, config, trialCnt + 1);
    }
    if (!data.value) {
        if (trialCnt >= FETCH_TRIAL_MAX_CNT) {
            return {
                data: {}, pending: pending.value, error: !!error.value,
            };
        }
        return await fetchTrial(apiURL, url, config, trialCnt + 1);
    }
    return {
        data: data.value, pending: pending.value, error: !!error.value,
    };
};


export const useApiFetch = async <T> (url: string, config, devConfig?): Promise<{
    data: T | {};
    pending: boolean;
    error: boolean;
}> => {

    if (devConfig && Object.keys(devConfig).length) {
        return await new Promise((res, rej) => {
            console.time(`${ url }_time`);
            setTimeout(() => {
                res(true);
            }, (Math.random() + 1) * 2 * 1000);
        }).then(
            () => {
                console.timeEnd(`${ url }_time`);
                console.log(`${ url }_time data:`, devConfig);
                return {
                    data: devConfig as T, pending: false, error: false,
                };
            },
        );
    }
    const {
        apiURL,
    } = useRuntimeConfig().public;

    const opt = reactive({
        delayTime: 1500,
        trialCnt: <number> 0,
    });

    return await fetchTrial<T>(apiURL, url, config, opt.trialCnt);
};