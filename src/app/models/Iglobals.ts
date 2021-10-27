export interface Iproducts {
    _id: string;
    name: string;
    description: string;
    price: string;
    stock: number;
    imageSrc: string;
    imageAlt: string;
    category: Icategory;
}
export interface Iimg {
    src: string;
    alt: string;
}

export interface Icategory {
    _id: string;
    name: string;
    products: Iproducts[];
}
