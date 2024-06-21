
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
        return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
    },

    chckDateIsToday: (d: Date) => {
        return UtilDate.chckSameDay(d, new Date(Date.now()));
    },
};

export default UtilDate;