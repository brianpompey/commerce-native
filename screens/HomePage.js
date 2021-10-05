import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Main } from './Main.js';
import { ProductsList } from './ProductsList.js';
import { CartIcon } from './../components/CartIcon.js';
import SmokerPage from './SmokerPage.js';


const Stack = createNativeStackNavigator();

export default function HomePage() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">

                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Products' component={ProductsList} 
                    options={({ navigation }) => ({
                        title: 'Products',
                        headerTitleStyle: styles.headerTitle,
                        headerRight: () => <CartIcon navigation={navigation}/>
                })}/>
                
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 20
    }
  });


