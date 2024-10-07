// This file contains basic implementation of Object Types in Typescript
// Object Types are Interface, Class, Enum, Array, Tuple, Object

// 1. Interface - Usefull when defining type of object

interface Hello {
    f1: number,
    f2: string,
    f3: boolean,
    f(): string,
}

const m: Hello = {
    f1: 23,
    f2: `Greetings`,
    f3: true,
    f() {
        console.log(this.f1, this.f2, this.f3);
        return m.f2
    }
}

console.log(m.f())

// 2. Class

class H {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;

    }

    drive() {
        console.log(`Driving my ${this.year} ${this.make} ${this.model}`)
        return 'hello'
    }
}

const callH = () => {
    const Hudai = new H('2023', 'Verna', 1998)
    console.log('reachere here')
    Hudai.drive()
}

callH()

// 3.Enum

enum d {

    p1,
    p2,
    p3,
    p4,
}

console.log(d.p1,d.p2,d.p3,d.p4);

// 4. Array

const arr: Array<number> = [12,3,4,677];
const arr2: number[] = [12,3,4,677];


console.log(arr, arr2)

// 5. Tuple

type TuplePair = [string, number];
const pair: TuplePair = ['hello', 42]
console.log(pair)

// 6. Object

const pt : {x: number; y: number} = {
    x: 15,
    y: 9,
}

console.log(pt.x, pt.y)