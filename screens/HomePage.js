import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../components/Icon';
import { Main } from './Main.js';
import { ProductsList } from './ProductsList.js';
import { CartIcon } from './../components/CartIcon.js';


const Stack = createNativeStackNavigator();

export default function HomePage() {
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name='Main' component={Main} 
                    options={{ title: 'Main' }}/>
                
            </Stack.Navigator>
        </NavigationContainer>

    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headingText: {
      fontSize: 30,
      color: '#FF0000',
    },
    stretch: {
        width: 250,
        height: 200,
        resizeMode: 'stretch',
    }
});