export const dateStringToDate = (dateString: string): Date =>{
    const dateParts = dateString.split('/').map((values: string): number =>{
        return parseInt(values);
    });

    return new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
};