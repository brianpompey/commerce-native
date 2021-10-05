import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function HomePage() {
    return(
        <View style={styles.container}>
            <Text style={styles.headingText}>Welcome To The Counter</Text>
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
      fontSize: 30
    }
});