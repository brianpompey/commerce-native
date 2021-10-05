import React from "react";
import { Text, StyleSheet } from "react-native";

export function Recipes ({navigation}) {
    return(
        <Text style={styles.mainText}>RECIPES COMING SOON!!!</Text>
    )
}

const styles = StyleSheet.create({
    mainText: {
      fontSize: 20
    }
});