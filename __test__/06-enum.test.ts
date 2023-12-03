import { customers } from "../src/02-all-about-types/05-enum";

describe("enum", (): void => {
    it("should return enum well", (): void => {
        expect(customers[0]?.type).toBe("GOLD");
        expect(customers[1]?.type).toBe("PLATINUM");
    });
});
