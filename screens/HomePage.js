import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './Main.js';
import { ProductsList } from './ProductsList.js';
import { CartIcon } from './../components/CartIcon.js';
import { ProductDetails } from './ProductDetails.js';
import { Cart } from './Cart.js';
import { CartProvider } from './../CartContext.js';
import { Recipes } from './Recipes.js';



const Stack = createNativeStackNavigator();

export default function HomePage() {
    return(
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name='Main' component={Main} />
                    <Stack.Screen name='Recipes' component={Recipes} />
                    <Stack.Screen name='Grills' component={ProductsList} 
                            options={({ navigation }) => ({
                                title: 'Grills',
                                headerTitleStyle: styles.headerTitle,
                                headerRight: () => <CartIcon navigation={navigation}/>,   
                    })}/>
                    <Stack.Screen name='ProductDetails' component={ProductDetails} 
                        options={({ navigation }) => ({
                            title: 'Product details',
                            headerTitleStyle: styles.headerTitle,
                            headerRight: () => <CartIcon navigation={navigation}/>,
                    })} />
                    <Stack.Screen name='Cart' component={Cart} 
                        options={({ navigation }) => ({
                            title: 'My cart',
                            headerTitleStyle: styles.headerTitle,
                            headerRight: () => <CartIcon navigation={navigation}/>,
                    })} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20
    }
  });

