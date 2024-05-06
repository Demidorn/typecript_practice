let myName: string = 'Dev'
let meaningoflife: number;
let isLoading: boolean;
let album: any; // any type can be assigned any value
let miccheck: string | number; // can be assigned either a string or a number. this is called union type


//Examples of type annotations
myName = 'John' // myName is a string hence assigned only string values
meaningoflife = 42 //meaning of life is a number hence assigned 42
isLoading = true  //is loading is a boolean type hence assigned true or false
//any type can be used when not sure of the king of value going to be passed 
// but this is not recommended as it can lead to errors
album = 'The Wall' //album is of any type hence assigned any value
album = 42 //album is of any type hence assigned any value
album = true //album is of any type hence assigned any value
miccheck = 1,2,1,2 //miccheck is of type string or number hence assigned a string
miccheck = 'one two one two' //miccheck is of type string or number hence assigned a string


//function sum
const sum = (a: number, b: number): number => {
    return a + b
}

// another way to write the function
const sum2 = (a: number, b: number): number => a + b
//another way to write the function
const sum3 = (a: number, b: number) => {
    return a + b
}

// in ts and js, can use the ? to make a parameter optional
//const sum4 = (a: number, b?: number): number => {
//    return a + b
//}

//can use number and string in ts and js
const sum5 = (a: number, b: string): string => {
    return a + b
}

//union type
let postId: string | number;
let isActive: boolean | number | string;

//regex type
let re = /hello/; 
let variable: RegExp = /world/;
let variable2: RegExp = new RegExp('world');
//usage of regex type
let result1 = re.exec('hai');
console.log(result1);

//regex type with flags
let fmt: RegExp = /\w+/g;
//usage of regex type
let result = fmt.exec('hello world');
console.log(result);


//array type
let names: string[] = ['John', 'Doe', 'Jane']


//object type
let person: {name: string, age: number} = {
    name: 'John',
    age: 30
}

//function type
let greet: Function;
//usage of function type
greet = () => {
    console.log('Hello')
}
