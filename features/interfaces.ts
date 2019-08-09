interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year:2000,
    broken: true,
    summary(): string{
        return `Name : ${this.name}`;
    }
};

const drinks ={
    color: 'brown',
    carbonated: 'true',
    sugar: 40,
    summary(): string{
        return `My Drink has ${this.sugar} grams of sugar`;
    }
}

const printVehicle = (vehicle: Vehicle) => {
    console.log(`Name : ${vehicle.name}`);
    console.log(`year : ${vehicle.year}`);
    console.log(`broken : ${vehicle.broken} \n`);
};

const printSummary = (item: Reportable) => {
    console.log(`Summary : ${item.summary()} \n`);
};

// printVehicle(oldCivic);
printSummary(oldCivic);
printSummary(drinks);