import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function HomePage() {
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>SmokeShow</Text>
            <TouchableOpacity 
            onPress={() => {
                alert('You tapped the button!');
            }}>
                <Text>Grills</Text>
                <Image style={styles.stretch} source={require('./../assets/home/grills.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Recipes</Text>
                <Image style={styles.stretch} source={require('./../assets/home/recipes.jpg')}/>
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
    }
});