import { name, balance, isValid, names, numbers, person } from "../src/01-basic/02-data-type";

describe("data types", (): void => {
    it("it should correct value with data type", (): void => {
        // checking string
        expect(name).toBe("Arief Rachman Hakim");
        // checking number
        expect(balance).toBe(100000);
        // checking boolean
        expect(isValid).toBe(true);
        // checking array
        expect(names).toEqual(["Budi", "Arief", "Hakim"]);
        expect(names).toHaveLength(3);
        expect(names).toContain("Arief");
        expect(numbers).toEqual([1, 2, 3, 4, 5]);
        expect(numbers).toHaveLength(5);
        expect(numbers).toContain(3);
        // checking object
        expect(person).toHaveProperty("name", "Arief Rachman Hakim");
        expect(person).toHaveProperty("age", 21);
        expect(person).toEqual({
            name: "Arief Rachman Hakim",
            age: 21,
        });
    });
});
