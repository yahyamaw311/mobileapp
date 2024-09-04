import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import dog from '../img/dog-png-30.png'
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function App() {

  const [compteur, setCompteur] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>

      <ScrollView style={styles.scrollImages} horizontal={true}>
        
        <View>
            <Text style={styles.textImages}>dog 1</Text>
            <Image style={styles.images} source={dog} />
        </View>

        <View>
            <Text style={styles.textImages}>dog 2</Text>
            <Image style={styles.images} source={dog} />
        </View>

        <View>
            <Text style={styles.textImages}>dog 3</Text>
            <Image style={styles.images} source={dog} />
        </View>
      </ScrollView>
      
    </View>

    <View>
      <Text>Vous avez cliqué {compteur} fois</Text>
      <Button color={ compteur % 2 == 0 ? "#841584" : "red"} title='Cliquez moi' onPress={() => setCompteur(compteur + 1)}/>
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  images: {
    width: 300,
    height: 500,
    margin: 30,
    backgroundColor: "green"
  },

  textImages: {
    textAlign:"center"
  },

  scrollImages: {
    marginTop: 100
  },
});
