
export type TCommonScore = [
    number,                             // score
    number,                             // halftime score
    number,                             // red cards
    number,                             // yellow cards
    number,                             // corners, -1 means no corner kick data
    number,                             // overtime score (120 minutes，including regular time)，only available in overtime
    number,                             // Penalty shootout score，only penalty shootout
];