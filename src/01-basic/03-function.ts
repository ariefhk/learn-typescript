//! common function
const sayHello = (name: string = "Arief Rachman Hakim"): string => {
    return `Hallo ${name}`;
};

console.log(sayHello());

//! Rest Parameter
const sum = (...values: number[]): number => {
    let total = 0;

    for (const value of values) {
        total += value;
    }

    return total;
};

console.log(sum(10, 2, 21));

//! function for parameter
const sayHelloToOther = (name: string, filter: (name: string) => string): string => {
    return `Hello ${filter(name)}`;
};

const toUpper = (name: string): string => {
    return name.toUpperCase();
};

const testing = sayHelloToOther("Arief", (name: string) => name.toUpperCase());

console.log(sayHelloToOther("Budi", toUpper));
console.log(testing);
