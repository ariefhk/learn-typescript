import { persons } from "../src/02-all-about-types/01-nested-type";

describe("nested types", (): void => {
    it("it should correct array of object", (): void => {
        expect(persons).toEqual([
            {
                id: 1,
                name: "Arief",
                age: 21,
            },
            {
                id: 2,
                name: "Budi",
                age: 22,
            },
            {
                id: 3,
                name: "Alex",
                age: 23,
            },
        ]);
    });

    expect(persons).toContainEqual({
        id: 1,
        name: "Arief",
        age: 21,
    });
    expect(persons).toHaveLength(3);
    expect(persons[0]?.id).toBe(1);
});
