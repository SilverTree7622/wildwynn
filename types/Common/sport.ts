

export const ECommonSportSection = {
    FootBall: 'football',
    BasketBall: 'basketball',
    BaseBall: 'baseball',
    VolleyBall: 'volleyball',
    Tennis: 'tennis',
    Icehockey: 'icehockey',
} as const;

export const ECommonSportSectionValue = {
    'football': 'FootBall',
    'basketball': 'BasketBall',
    'baseball': 'BaseBall',
    'volleyball': 'VolleyBall',
    'tennis': 'Tennis',
    'icehockey': 'Icehockey',
} as const;

export const ECommonSportValue = {
    FootBall: 6046,
    BasketBall: 48242,
    BaseBall: 154914,
    VolleyBall: 154830,
    Tennis: 54094,
    Icehockey: 35232,
} as const;

export const ECommonSportInitDataPrefix = {
    FootBall: 'fb',
    BasketBall: 'bk',
    BaseBall: 'bs',
    VolleyBall: 'vy',
    Tennis: 'ts',
    Icehockey: 'ih',
} as const;

export type TCommonSportSectionTabName = keyof typeof ECommonSportSection;

export const ECommonMatchUpSection = 'matchup';

export const ECommonLeagueSection = 'league';

export type TCommonSportSection = typeof ECommonSportSection[ keyof typeof ECommonSportSection ];

export type TCommonMatchUpSection = typeof ECommonMatchUpSection;

export type TCommonLeagueSection = typeof ECommonLeagueSection;