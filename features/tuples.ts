const drink = {
    color: 'brown',
    sarbonated: true,
    sugar: 40
};

//type alias
type Drink = [string, boolean, number];

const pepsi :[string, boolean, number] = ['brown', true, 40];
const sprite : Drink = ['brown', true, 50]; 

const carSpecs: [number, number] = [400, 3354]; // array

// object shows the describsion more clearly the array or tuple
const carStats ={
    horsepower: 400,
    weight:3354
}