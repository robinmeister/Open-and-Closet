import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function AppHeader(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: theme.colors.black,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
