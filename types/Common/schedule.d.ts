import type { TCommonScore } from "./score";
import type { TCommonMatchStatus } from "./status";
import type { TCommonLocationCategory, TCommonLocationCountry } from "./location";


export type TCommonSchedule = {
    "ai_away_scores": TCommonScore;
    "ai_away_team_id": string;
    "ai_away_team_img": string;
    "ai_away_team_name": string;

    "ai_category_id": string;
    "ai_category_name": TCommonLocationCategory;

    "ai_competition_id": string;
    "ai_competition_img": string;
    "ai_competition_name": string;
    "ai_competition_short_name": string;

    "ai_country_id": string;
    "ai_country_img": string;
    "ai_country_name": TCommonLocationCountry;

    "ai_home_scores": TCommonScore;
    "ai_home_team_id": string;
    "ai_home_team_img": string;
    "ai_home_team_name": string;

    "ai_match_time": number;
    "ai_season_id": string;
    "ai_status_id": TCommonMatchStatus;
    "match_id": string;

    "ai_kickoff_timestamp"?: number;
};