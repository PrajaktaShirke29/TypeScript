import 'reflect-metadata';
// const plane ={
//     color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane, 'color');
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

@printMetadata
class Plane{
    color : string ='red';

    @markFunction
    fly():void{
        console.log('hi');
    }
}

function markFunction(target: Plane, key:string){
    Reflect.defineMetadata('secret', 123, target, key);
}

function printMetadata(target: typeof Plane){
    for(let key in target.prototype){
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}
const sercet = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(sercet);