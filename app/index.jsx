import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import dog from '../img/dog-png-30.png'
export default function App() {
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
  }
});
