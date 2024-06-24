import type { TCommonScore } from "../score";
import type { TCommonMatchStatus } from "../status";

export type TCommonLiveRealTime = {
    "ai_away_scores": TCommonScore;
    "ai_home_scores": TCommonScore;
    "ai_kickoff_timestamp": number;
    "ai_match_status": TCommonMatchStatus;
    "match_id": string;
};

export type TCommonLiveRealTimeConfig = {
    "ai_away_scores"?: TCommonScore;
    "ai_home_scores"?: TCommonScore;
    "ai_kickoff_timestamp"?: number;
    "ai_match_status": TCommonMatchStatus;
    "match_id": string;
};