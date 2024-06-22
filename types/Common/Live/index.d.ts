import type { TCommonScore } from "../score";
import type { TCommonMatchStatus } from "../status";

export type TCommonLiveRealTime = {
    "ai_away_scores": TCommonScore;
    "ai_home_scores": TCommonScore;
    "ai_kickoff_timestamp": number;
    "ai_match_status": TCommonMatchStatus;
    "match_id": string;

    // "results": {
    //     "id": string;
    //     "score": [
    //         string,                         // match id
    //         number,                         // match status
    //         number[],                       // home team infos
    //         number[],                       // away team infos
    //         number,                         // kick off timestamp
    //     ][];
    //     "stats": {
    //         "type": number;
    //         "home": number;
    //         "away": number;
    //     }[];
    //     "incidents": {
    //         "type": number;
    //         "position": number;
    //         "time": number;
    //         "player_id": string;
    //         "player_name": string;
    //         "assist1_id": string;
    //         "assist1_name": string;
    //         "assist2_id": string;
    //         "assist2_name": string;
    //         "home_score": number;
    //         "away_score": number;
    //         "in_player_id": string;
    //         "in_player_name": string;
    //         "out_player_id": string;
    //         "out_player_name": string;
    //         "var_reason": number;
    //         "var_result": number;
    //         "reason_type": number;
    //     }[];
    // }[];
};