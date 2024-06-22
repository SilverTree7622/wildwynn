import type { TAuthGuest, TAuthUser } from "./Auth";
import type { TSelectorTime } from "./Selector";

export enum EError {
    SUCCESS = { code: 0, type: null, title: '', message: '', },
    FAILURE = { code: 1, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
    SESSION_NOT_EXISTS = { code: 2, type: 2, title: 'LOST CONNECTION', message: 'The connection has been lost. Please retry when connection is established again.', },
    SESSION_FAILURE = { code: 3, type: 2, title: 'LOST CONNECTION', message: 'The connection has been lost. Please retry when connection is established again.', },
    PARAMETER_FAILED = { code: 10, type: 1, title: 'NOTICE', message: 'These are not normal parameters. Please try again.', },
    USER_NOT_FOUND = { code: 100, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
    STRUCT_NOT_FOUND = { code: 200, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
    BUSINESS_NOT_FOUND = { code: 900, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
    BUSINESS_CONNECTION_FAIL = { code: 999, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
    INTERNAL_SERVER_ERROR = { code: 20200103, type: 1, title: 'NOTICE', message: 'An error has occurred. Please try again under normal circumstances.', },
};

export type TContent = {
    date: Date;
    lg_name: string;
    hasLeagueTag: boolean;
};

export type TFetchReq = {
    // 로그인시 a, b 채워줘서 req
    "a": {
        "sessionid": number;
        "ODDSNAVI_IS_CAKE": string;
    };
    "b": TAuthUser;
    // 비로그인시 param 채워서 보내기
    "c": TAuthGuest;
};

export type TFetchCommonRes = {
    isError: boolean;
    isSuccess: boolean;
    msg: string;
};

export type TFetchRes = {

};