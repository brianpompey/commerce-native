import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

function Icon(props) {
    return (
        <TouchableOpacity 
            onPress={() => {
                alert('You tapped the button!');
            }}>
            <Text>Grills</Text>
            <Image style={styles.stretch} source={require('./../assets/home/grills.jpg')}/>
        </TouchableOpacity>
    );
  }


const styles = StyleSheet.create({
    stretch: {
        width: 250,
        height: 200,
        resizeMode: 'stretch',
    }
});

export default Icon;