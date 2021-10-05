import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Recipe } from '../components/RecipeCard.js';
import { getRecipes } from '../services/RecipeService.js';

export function Recipes ({navigation}) {

  function renderRecipe({item: recipe}) {
    return (
      <Recipe {...recipe} />
    );
  }
  
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    setRecipes(getRecipes());
  });
  
  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={recipes}
      renderItem={renderRecipe}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});