import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';



export function Main ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>SmokeShow</Text>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Grills');
                }}>
                <Text>Grills</Text>
                <Image style={styles.stretch} source={require('./../assets/home/grills.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Recipes');
                }}>
                <Text>Recipes</Text>
                <Image style={styles.stretch} source={require('./../assets/home/recipes.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Login');
                }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
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
    },
    button: {
        backgroundColor: '#808080',
        width: '20%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
});