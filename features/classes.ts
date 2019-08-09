// classes
class Vehicle{
    // default they are public
    constructor(public color:string){

    }

    public drive():void{
        console.log('Slow.........');
    }
    private horn():void{
        console.log('Beep.........');
    }
    protected honk():void{
        this.horn();
        console.log('Beeppppppppppppp.........');
    }
}

// inheritence
class Cars extends Vehicle{
    constructor(public wheels: number, color: string){
        super('red');
    }
  drive(): void{
      this.honk();
     this.startDrivingProcess();
 }

 private startDrivingProcess(): void{
    console.log('Bhruumm');
 }
}

const carss = new Cars(4, 'orange');
const vehicle = new Vehicle('red');
console.log(vehicle.color);
carss.drive();
vehicle.drive();

// classes
class Fruits{
    // default they are public
    constructor(public color:string){

    }

    public drive():void{
        console.log('Slow.........');
    }  
}

const fruits = new Fruits('orange');
console.log(fruits.color);