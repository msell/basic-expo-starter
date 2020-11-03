import React from 'react'
import { View, StyleSheet } from 'react-native'

export const Ball: React.FC = () => {
  return <View style={styles.ball}></View>
}

const styles = StyleSheet.create({
  ball: {
    borderRadius: 100,
    backgroundColor: '#52489C',
    width: 200,
    height: 200,
  },
})
