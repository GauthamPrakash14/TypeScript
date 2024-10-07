// Assertions using as keyword allows you to explicitly mention compiler about the type of a value when it cannot be inferred automatically. 
// Its a way to override the default static type behavior. 

let someValue: any = "Hello, TypeScript";
let strLength: number = (someValue as string).length

console.log(strLength);

// Any 
// When the type is represented as any, the compiler will not perform type check or type inference on that value. 

let anyValue: any = 5;
anyValue = 'Hello world'
anyValue = true

console.log(typeof(anyValue));

// As const

// as const is a type assertion in TypeScript that allows you to assert that an expression has a specific type, and that its value should be treated as a read-only value.

const colors = ['red', 'green', 'blue'] as const;

let y = [10, 20] as const;

// Non null assertions

let name1: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = name1!.length;

console.log(nameLength);
