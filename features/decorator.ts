class Boat{
    @testDecorator
    color:string = 'red';

    get formattedColor():string{
        return `This boats color is ${this.color}`
    }

    @logError('Oops boat was sunk in ocean')
    pilot(@parameterDecorator speed: string):void{
        throw new Error();
        if(speed === 'fast'){
            console.log('swish');
        }
        else {
            console.log('nothing');
        }
    }
}

function parameterDecorator(target: any, key: string, index: number){
    console.log('index : ', index);
    console.log('Key : ', key);
}

function testDecorator(target:any, key:string){
    console.log('target : ', target);
    console.log('Key : ', key);
}

function logError(errorMessage: string){
    return function (target : any, key: string, desc: PropertyDescriptor):void{
        const method = desc.value;
    
        desc.value = function(){
            try{
                method();
            }catch(e){
                console.log(errorMessage);
            }
        }
    }
    
}

new Boat().pilot('fast');

// testDecorator(Boat.prototype, 'pilot');