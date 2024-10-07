// In typeScript you can combine types. 
// using Unions and intersection. 

// 1. Type Union

type stringOrNumber = string | number;
// Here we can specify the types that it might get. 
let value: stringOrNumber = "hello"

console.log(typeof(value))
value = 20
console.log(typeof(value))
console.log(value)

// 2. Type intersection

// Intersect 2 or more type into a single type that represents the properties of all the types. 

interface A {
    a: string;
}

interface B {
    b: number;
}

interface C {
    c: string;
}

interface F {
    f: number;
}

type AB = A & B;
type CF = C & F;

let value1: AB = {a: 'hello', b: 42};
let value7: CF = {c: 'number', f: 35};
// Here what happened is we have combined the string and number into a single type. We are specifying that AB will have string and number combined. 
console.log(typeof(value1))