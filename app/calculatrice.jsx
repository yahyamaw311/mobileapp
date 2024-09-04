import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function Calculatrice(){
    return(
        <View style={styles.calculator}>
            <View>
                <Text style={styles.resultBar} id="reslutBar">test</Text>
            </View>

            <View>
                <Text>test 2</Text>
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