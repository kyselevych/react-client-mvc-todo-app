import moment from "moment";

export const sortDateCompare = (field: string, desc: boolean = false) => {
    return (a: any, b: any): number => {
        const dateA = moment(a[field]);
        const dateB = moment(b[field]);

        if (!dateA.isValid()) return 1;
        if (!dateB.isValid()) return -1;

        if (desc) return dateB.diff(dateA);
        else return dateA.diff(dateB);
    }
}
