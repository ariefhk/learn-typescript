import { sayHello } from "../src/01-basic/01-print-hello";

describe("sayHello", (): void => {
    it("should return hello", (): void => {
        expect(sayHello("Arief")).toBe(`Hello Arief`);
    });
});
