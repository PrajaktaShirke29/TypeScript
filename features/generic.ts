class ArrayOfNumbers{
    constructor(public collection: number[]){}

    get(index:number): number{
        return this.collection[index];
    }
}

class ArrayOfStings{
    constructor(public collection: string[]){}

    get(index:number): string{
        return this.collection[index];
    }
}


class ArrayOfAnything<T>{
    constructor(public collection: T[]){}

    get(index:number): T{
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(['a', 'b', 'c']);
new ArrayOfAnything(['a', 'b', 'c']);               // type inferences

/////////////////////////////////////////////////////////
// Example of generics with function

function printStrings(arr: string[]):void{
    for(let i= 0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

function printNumber(arr: number[]):void{
    for(let i= 0; i< arr.length; i++){
        console.log(arr[i]);
    }
}


function printAnything<T>(arr: T[]):void{
    for(let i= 0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);         // Help to catch error
printAnything(['a', 'b', 'c']);


///////////////////////////////////////////////////////////////
// Generic constraints

class Car{
    print(){
        console.log('I am a car');
    }
}

class House{
    print(){
        console.log('I am a House');
    }
}

interface Printable{
    print() :void;
}
function printHousesOrCars<T extends Printable>(arr:T[]):void{
    for(let i = 0; i< arr.length; i++){
        arr[i].print();
    }
}

printHousesOrCars([new House(), new House()]);
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new House(), new House()]);
// printHousesOrCars(['a', 'b', 'c']);            // This will give u an error as its interface is void
