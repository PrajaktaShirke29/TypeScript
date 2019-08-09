// why do we care?????

const carMarkers: string[] = ['ford', 'toyota', 'chevy'];

const dates= [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camoro']
]

//help with inferemce when extracting values

const cars = carMarkers[0];
const myCar = carMarkers.pop();

//prevent incompatible values
// carMarkers.push(100);

// help with 'map'
carMarkers.map((car:string): string  => {
    return car.toUpperCase();
});

//Flexible  types
const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2030-10-10');
importantDates.push('2030-10-22');