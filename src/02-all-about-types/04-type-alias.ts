type Category = {
    id: string;
    name: string;
};

type Product = {
    id: string;
    name: string;
    price: number;
    category: Category;
};

export const products: Product[] = [
    {
        id: "P1",
        name: "Kopi Kapal Api",
        price: 20000,
        category: {
            id: "DR1",
            name: "Kopi",
        },
    },
];
