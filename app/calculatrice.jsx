import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function Calculatrice(){
    const digits = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "x", " ", "0"]
    return(
        <View style={styles.calculator}>
            <View>
                <Text style={styles.resultBar} id="reslutBar">test</Text>
            </View>

            <View>
                {digits.map((digit, index) => (
                    <Text>{digit}</Text>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    calculator:{
        backgroundColor: "#706E6E"
    },

    resultBar:{
        backgroundColor: "#DFD9D9",
        height: 50,
        width: 250,
        margin: 'auto',
        marginTop: 25
    }
})