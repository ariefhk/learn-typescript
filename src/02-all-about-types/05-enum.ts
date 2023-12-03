enum CustomerType {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM",
}

type Customer = {
    id: number;
    name: string;
    type: CustomerType;
    isMarried?: boolean;
};

export const customers: Customer[] = [
    {
        id: 1,
        name: "Arief",
        type: CustomerType.GOLD,
    },
    {
        id: 2,
        name: "Budi",
        type: CustomerType.PLATINUM,
    },
];
