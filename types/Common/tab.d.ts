

export const ECommonSportTab = {
    live = 'live',
    fixtures = 'fixtures',
    odds = 'odds',
    result = 'result',
    league = 'league',
} as const;

export const ECommonMatchUpTab = {
    stats = 'stats',
    navitalk = 'navitalk',
    odds = 'odds',
    lineup = 'lineup',
    h2h = 'h2h',
} as const;

export const ECommonLeagueTab = {
    matchup = 'matchup',
    table = 'table',
    odds = 'odds',
    result = 'result',
    players = 'players',
} as const;

export type TCommonSportTab = typeof ECommonSportTab[ keyof typeof ECommonSportTab ];

export type TCommonMatchUpTab = typeof ECommonMatchUpTab[ keyof typeof ECommonMatchUpTab ];

export type TCommonLeagueTab = typeof ECommonLeagueTab[ keyof typeof ECommonLeagueTab ];