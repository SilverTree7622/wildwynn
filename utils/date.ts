
const UtilDate = {
    syncDigit: (time: string | number, digits: number = 2): string => {
        if (typeof time === 'number') {
            time = `${ time }`;
        }
        if (time.length === 1) {
            time = `0${ time }`;
        }
        return time;
    },

    chckSameDay: (d1: Date, d2: Date): boolean => {
        return d1.getUTCFullYear() === d2.getUTCFullYear() &&
        d1.getUTCMonth() === d2.getUTCMonth() &&
        d1.getUTCDate() === d2.getUTCDate();
    },

    chckDateIsToday: (d: Date) => {
        return UtilDate.chckSameDay(d, new Date(Date.now()));
    },

    getWithOutMillisecond: (timestamp: number) => {
        return ~~( timestamp / 1000 );
    },

    addMillisecond: (timestamp: number) => {
        return new Date(Number(`${ timestamp }000`));
    },
};

export default UtilDate;