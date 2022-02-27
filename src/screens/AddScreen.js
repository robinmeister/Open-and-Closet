import AppBackground from '../components/AppBackground'
import Logo from '../components/Logo'
import AppHeader from '../components/AppHeader'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import * as React from 'react'
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Touchable,
  ImageBackground,
} from 'react-native'
import faker from 'faker'
import { Card } from 'react-native-paper'
import { theme } from '../core/theme'

const SPACING = 20
const DATA = [
  {
    image:
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress',
    title: 'Neues Kleidungsstück',
    description: 'Ein einzelnes Kleidungsstück',
    key: 0,
  },
  {
    image:
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress',
    title: 'Neues Outfit',
    description: 'Eine Sammlung von Kleidungsstücken',
    key: 1,
  },
]

export default function AddScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <Image
        source={require('../assets/IconGrid2.png')}
        style={{
          ...StyleSheet.absoluteFillObject,
          resizeMode: 'cover',
          height: undefined,
          width: undefined,
        }}
        blurRadius={5}
        flex={1}
        width={undefined}
        height={'100%'}
        resizeMode="contain"
      />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        scrollEnabled={false}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                //alert('done')
                switch (item.key) {
                  case 0: {
                    navigation.navigate('AddItemScreen')
                    break
                  }
                  case 1: {
                    navigation.navigate('AddOutfitScreen')
                    break
                  }
                }
              }}
            >
              <ImageBackground
                source={{
                  uri: item.image,
                }}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  ...styles.container,
                }}
                imageStyle={{
                  borderRadius: 12,
                }}
              >
                <View
                  style={{
                    ...StyleSheet.absoluteFillObject,
                    ...styles.container,
                    backgroundColor: `rgba(255,255,255,${styles.blurEffect})`,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      opacity: 1,
                      fontWeight: '500',
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 12, opacity: 0.7 }}>
                    {item.description}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    height: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurEffect: 0.75,
}
