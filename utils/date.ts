
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

};

export default UtilDate;