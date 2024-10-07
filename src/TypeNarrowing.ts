function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
      return [x,y]
    } else {
      console.log(x);
      console.log(y);
      return true
    }
}
const x: string = 'hello'
const ya: string = 'true';

console.log(example(x,ya));

// Truthiness

// In JavaScript, we can use any expression in conditionals, &&s, ||s, if statements, Boolean negations (!), and more. 
// As an example, if statements don’t expect their condition to always have the type boolean.

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
  
    return "Nobody's here. :(";
}

// It says that in JS its possible to give any expression inside a conditional. Not just boolean

const ha: number = 45;
console.log(getUsersOnlineMessage(ha))

// Type Predicates

function isString(value: unknown): value is string {
    return typeof value === 'string';
}
  
function example1(x: unknown) {
    if (isString(x)) {
      // We can now call any 'string' method on 'x'.
      let y78 = x.toUpperCase()
      console.log(y78)
    } else {
      console.log(x);
    }
}

let valuehj: unknown = "hello"
example1(valuehj)