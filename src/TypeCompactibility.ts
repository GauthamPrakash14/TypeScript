// TypeScript uses structural typing to determine type compatibility. This means that two types are considered compatible if they have the same structure, regardless of their names.

interface Point {
    x: number;
    y: number;
}

let p1: Point = {x: 10, y: 20};
let p2: {x: number; y: number} = p1;

// Two of the have the same stucture. So they are considered compactable. 
//In this example, p1 has the type Point, while p2 has the type { x: number; y: number }. 
//Despite the fact that the two types have different names, they are considered compatible because they have the same structure. 
//This means that you can assign a value of type Point to a variable of type { x: number; y: number }, as we do with p1 and p2 in this example.

console.log(p2.x);