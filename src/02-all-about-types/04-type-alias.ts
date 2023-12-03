type ProductId = string;

type Category = {
    id: string;
    name: string;
};

type Product = {
    id: ProductId;
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
