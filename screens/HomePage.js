import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './Main.js';
import { ProductsList } from './ProductsList.js';
import { CartIcon } from './../components/CartIcon.js';


const Stack = createNativeStackNavigator();

export default function HomePage() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">

                <Stack.Screen name='Main' component={Main} />
                
            </Stack.Navigator>
        </NavigationContainer>

    );
}


