const RECIPES = [
    {
        id: 100,
        name: 'Weber',
        price: 110,
        image: require('../assets/smokers/weber.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Traeger',
        price: 600,
        image: require('../assets/smokers/traeger.png'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Kamado Joe',
        price: 800,
        image: require('../assets/smokers/kamado.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];

export function getRecipes() {
    return RECIPES;
}

export function getRecipe(id) {
    return RECIPES.find((recipe) => (recipe.id == id));
}