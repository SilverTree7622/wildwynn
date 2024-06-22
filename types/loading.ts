import type { TSelectorOdds, TSelectorSports, TSelectorTime } from "./Selector";

export type TInitData = {
    nav_code: string;
    st_odds: TSelectorOdds[];
    st_sports: TSelectorSports[];
    st_time: TSelectorTime[];
    result: number;
};

export type TInitDataMatchState = {
    [ key: number ]: string;
}

export type TInitDataFootball = TInitData & {
    st_matchstate: TInitDataMatchState;
};


export type TInitDateTypes = TInitData | TInitDataFootball | {};