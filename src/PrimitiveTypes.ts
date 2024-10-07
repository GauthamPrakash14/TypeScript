// This file contains basic implementation of Primitive Types in Typescript

// The Primitive types are Boolean, Number, String, Void, Undefined, Null

const number1: number = 4399;
const string1: string = 'Hello there';
const bool: boolean = true;
let h: number|void; // | operator is used as an Or operator when it comes to types. It is meant as If not this then that
let g: number|undefined = 5;
let i: number|null;

console.log(number1, typeof(number1));
console.log(string1, typeof(string1));
console.log(bool, typeof(bool));
console.log(h = 5, typeof(h));
console.log(g = undefined, typeof(g));
console.log(i = 34, typeof(i));