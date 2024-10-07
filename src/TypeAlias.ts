// A Type Alias in TypeScript allows you to create a new name for a type.

type Name = string;
type Age = number;
type User = { name: Name; age: Age };

type Int = Name & Age

const user: User = { name: 'John', age: 30 };

console.log(user)