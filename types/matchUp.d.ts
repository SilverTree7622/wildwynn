import type { TCommonMatchStatus } from "./Common/status";

export type TMatchUpStoreConfig = {
    match_id: string;
    matchStatus: TCommonMatchStatus;
    leagueName: string;
    timestamp: number;
    homeLogo: string;
    homeName: string;
    homeScore: number;
    awayLogo: string;
    awayName: string;
    awayScore: number;
};
