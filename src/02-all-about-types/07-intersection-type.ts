// ! This study case if we cant extending interface more
interface HasName {
    name: string;
}

interface HasId {
    id: string;
}

type Domain = HasId & HasName;

const domain: Domain = {
    id: "1",
    name: "domainesia",
};
