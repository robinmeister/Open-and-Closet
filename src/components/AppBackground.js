import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { theme } from '../core/theme'

export default function AppBackground({ children }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/IconGrid.png')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={5}
      ></ImageBackground>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.primary,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
