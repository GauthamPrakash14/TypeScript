// The keyof operator in TypeScript is used to get the union of keys from an object type.

// Instead of combinig types, if we have the type alias already written, we can use keyof operator to infer the types. 

// Here below we have already defined few types. new variable key can have any of the 3 types defined. So 

interface User5 {
    name: string;
    age: number;
    location: string;
  }
  
  type UserKeys = keyof User5;
  const key: UserKeys | number = 45; // Note that keys are taken union. Here the keys are name, age, location which are strings. 
  console.log(typeof(key));
