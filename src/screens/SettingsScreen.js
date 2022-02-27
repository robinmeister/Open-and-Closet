import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import { DefaultTheme, ThemeProvider, useTheme } from 'react-native-paper'
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from 'react-native-vector-icons'

import { theme } from '../core/theme'
import React, { useEffect, useState } from 'react'

const { width, height } = Dimensions.get('screen')
export default function SettingsScreen({ navigation }) {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress',
        }}
        style={{
          alignSelf: 'center',
          width: 120,
          height: 120,
          borderRadius: 70,
          marginRight: 5,
          marginTop: 100,
        }}
      />
      <View
        style={{
          margin: 20,
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          ></Text>
        </View>

        <View style={{ ...styles.action, margin: 20 }}>
          <Text style={{ color: '#666', marginRight: 25 }}>Name</Text>
          <Text
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            t
          >
            Max Mustermann
          </Text>
        </View>
        <View style={{ ...styles.action, margin: 20 }}>
          <Text style={{ color: '#666', marginRight: 25 }}>Email</Text>
          <Text
            style={[
              styles.textInput,
              {
                color: 'dodgerblue',
              },
            ]}
            t
          >
            max.mustermann@gmail.com
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 1, ...styles.commandButton, margin: 10 }}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'StartScreen' }],
              })
            }
          >
            <Text style={styles.panelButtonTitle}>Ausloggen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: theme.colors.primary,
  },
})
