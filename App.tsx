import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Ball } from './components/Ball'

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Ball />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
