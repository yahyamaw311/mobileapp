import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const App = () => {
  const [orientation, setOrientation] = useState('UNKNOWN');

  useEffect(() => {
    // Add event listener for orientation changes
    const subscription = ScreenOrientation.addOrientationChangeListener(handleOrientationChange);

    // Cleanup the event listener on component unmount
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const handleOrientationChange = async (event) => {
    const currentOrientation = event.orientationInfo.orientation;

    switch (currentOrientation) {
      case ScreenOrientation.Orientation.PORTRAIT_UP:
        setOrientation('PORTRAIT_UP');
        break;
      case ScreenOrientation.Orientation.PORTRAIT_DOWN:
        setOrientation('PORTRAIT_DOWN');
        break;
      case ScreenOrientation.Orientation.LANDSCAPE_LEFT:
        setOrientation('LANDSCAPE_LEFT');
        break;
      case ScreenOrientation.Orientation.LANDSCAPE_RIGHT:
        setOrientation('LANDSCAPE_RIGHT');
        break;
      default:
        setOrientation('UNKNOWN');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Current Orientation: {orientation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
