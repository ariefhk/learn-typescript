import { products } from "../src/02-all-about-types/04-type-alias";

describe("type alias", (): void => {
    it("it should correct type aliases", (): void => {
        expect(products[0]?.category.id).toBe("DR1");
        expect(products[0]?.name).toEqual("Kopi Kapal Api");
        expect(products[0]?.category?.name).toBeDefined();
    });
});
