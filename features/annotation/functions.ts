// annotation for function
const add = (a: number,b: number): number => {
    return a+b;
};

const substract = (a: number, b: number): number =>{
    return a-b;
}

function divide(a: number, b:number): number{
    return a/b;
}

const multiply = function(a: number, b:number): number{
    return a*b;
}

const logger = (message: string): void => {
    console.log(message);
};

const throwError= (message:string): string => {
    if(!message){
        throw new Error(message);
    }
    return message;
};

// never is used when the function never expect to return any type
const throwError1= (message:string): never => {
        throw new Error(message);
};

//Destructing with annotation

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather:string}):void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

//ES 2015
const logWeather1 = ({date, weather}: {date: Date, weather:string}):void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);