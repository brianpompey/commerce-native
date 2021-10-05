import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';



const Main = ({navigation}) => {
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

export default Main;