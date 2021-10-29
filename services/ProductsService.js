const PRODUCTS = [
    {
        id: 100,
        name: 'Weber',
        price: 110,
        image: require('../assets/smokers/weber.jpg'),
        description: 'The best starter grill.'
    },
    {
        id: 101,
        name: 'Traeger',
        price: 600,
        image: require('../assets/smokers/traeger.png'),
        description: 'Automatic, efficient, reliable'
    },
    {
        id: 102,
        name: 'Kamado Joe',
        price: 800,
        image: require('../assets/smokers/kamado.jpg'),
        description: 'A big splurge. But Quality Unmatched'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

export function noProducts() {
    return [];
}