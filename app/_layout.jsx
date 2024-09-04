import { StyleSheet, Text, View } from 'react-native'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <>
        <SafeAreaView>
            <Link rel='StyleSheet' href="calculatrice"> Go to test</Link>
        </SafeAreaView>
        <Stack>
            <Stack.Screen name="index" options={{headerShown: true}} />
            <Stack.Screen name="calculatrice" options={{headerShown: true}} />
        </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})