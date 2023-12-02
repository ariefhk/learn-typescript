describe("union type", (): void => {
    it("it should correct union type", (): void => {
        let sample: number | string | boolean;

        sample = 21;
        expect(sample).toBe(21);

        sample = "Arief Rachman Hakim";
        expect(sample).toBe("Arief Rachman Hakim");

        sample = true;
        expect(sample).toBe(true);
    });
});
