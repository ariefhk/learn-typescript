let myUnion: number | string | boolean;

const myUnionProcess = (value: number | string | boolean) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 2;
    } else if (typeof value === "boolean") {
        return !value;
    }
};

myUnion = "Arief";
console.log(myUnionProcess(myUnion));
myUnion = 21;
console.log(myUnionProcess(myUnion));
myUnion = false;
console.log(myUnionProcess(myUnion));
