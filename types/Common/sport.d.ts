

export const ECommonSportSection = {
    FootBall = 'football',
    BasketBall = 'basketball',
    BaseBall = 'baseball',
    VolleyBall = 'volleyball',
    Tennis = 'tennis',
    Icehockey = 'icehockey',
} as const;

export const ECommonSportValue = {
    FootBall = 154914,
} as const;

export const ECommonMatchUpSection = 'matchup';

export const ECommonLeagueSection = 'league';

export type TCommonSportSection = typeof ECommonSportSection[ keyof typeof ECommonSportSection ];

export type TCommonMatchUpSection = ECommonMatchUpSection;

export type TCommonLeagueSection = ECommonLeagueSection;