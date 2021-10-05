const RECIPES = [
    {
        id: 100,
        name: 'BBQ Ribs',
        description: 'RECIPE COMING SOON.'
    },
    {
        id: 101,
        name: 'Brisket',
        description: 'RECIPE COMING SOON.'
    },
    {
        id: 102,
        name: 'BBQ Chicken',
        description: 'RECIPE COMING SOON.'
    }
];

export function getRecipes() {
    return RECIPES;
}

export function getRecipe(id) {
    return RECIPES.find((recipe) => (recipe.id == id));
}