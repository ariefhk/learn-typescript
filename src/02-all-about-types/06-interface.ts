//! Interface Use Case
interface Seller {
    id: number;
    name: string;
    address?: string;
    readonly npwp: number; // once declrae it can't be changed
}

const seller: Seller = {
    id: 1,
    name: "Toko Handphone",
    npwp: 1212121,
};

//! Function Interface
interface AddFunction {
    (value1: number, value2: number): number;
}
// * Better use this
type AddFunctionWithType = (value1: number, value2: number) => number;

const add: AddFunction = (value1: number, value2: number): number => {
    return value1 + value2;
};

//! Indexable Interface
// * Different between array on object in Indexable Interface,  Array is always number to index the value
//* 1. Array Implementation
interface StringArray {
    [index: number]: string;
}

const myNames: StringArray = ["Arief", "Alex", "Budi"];

//* 2. Fixed Object Implementation
interface StringObject {
    [key: string]: string;
}

const myDatas: StringObject = {
    name: "arief",
    hobby: "coding",
};

//* 3. Dynamic Object Implementation
interface DynamicObject {
    [key: string]: string | number | Array<string>;
}

const myDynamicObj: DynamicObject = {
    name: "Alex",
    age: 21,
    hobby: ["coding", "learning"],
};

//! Extending Interface
interface Employee {
    id: string;
    name: string;
    division: string;
}

interface Manager extends Employee {
    numberOfEmployee: number;
}

const employee: Employee = {
    id: "1",
    name: "Arief",
    division: "IT",
};

const manager: Manager = {
    id: "2",
    name: "Alex",
    division: "IT",
    numberOfEmployee: 10,
};

//! Function in Interface
interface Person {
    name: string;
    sayHello(name: string): string;
}

const person: Person = {
    name: "Arief",
    sayHello(name: string) {
        return `Hello ${name}, my name is ${this.name}`;
    },
};
