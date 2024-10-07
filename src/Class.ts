class Car {
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

const callClass = () => {
    const Hudai = new Car('2023', 'Verna', 1998)
    console.log('reachere here')
    Hudai.drive()
}

callClass()
