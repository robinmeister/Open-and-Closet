import * as React from 'react'
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native'
const { width, height } = Dimensions.get('screen')
import { theme } from '../core/theme'
import { appData } from '../core/appData'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { useIsFocused } from '@react-navigation/core'

const SPACING = 10
const AVATAR_SIZE = 70
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

export default function MyOutfitsScreen({ navigation }) {
  const scrollY = React.useRef(new Animated.Value(0)).current

  const isFocused = useIsFocused()

  const outFitsView = (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <StatusBar hidden />
      <Image
        source={require('../assets/IconGrid.png')}
        style={{
          ...StyleSheet.absoluteFillObject,
          resizeMode: 'cover',
          height: undefined,
          width: undefined,
        }}
        blurRadius={1}
        flex={1}
        width={undefined}
        height={'100%'}
        resizeMode="contain"
      />

      <Animated.FlatList
        data={appData.outfits}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)]
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ]

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          })
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          })
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditOutfitScreen', item)
              }}
            >
              <Animated.View
                style={{
                  flexDirection: 'row',
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: 'rgba(255,255,255, 0.9)',
                  borderRadius: 12,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  transform: [{ scale }],
                }}
              >
                {/* <Image
                  source={item.image ? { uri: item.image } : null}
                  style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2,
                  }}
                /> */}
                <View>
                  <Text
                    style={{
                      fontSize: 30,
                      fontWeight: '500',
                      padding: 10,
                    }}
                  >
                    {item.name}
                  </Text>
                  {/* <Text style={{ fontSize: 18, opacity: 0.7 }}>
                    {item.occasion}
                  </Text>
                  <Text
                    style={{ fontSize: 14, opacity: 0.8, color: 'dodgerblue' }}
                  >
                    {item.category}
                  </Text> */}
                  <FlatList
                    data={item.items}
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                    }}
                    renderItem={({ item, index }) => {
                      return (
                        <Image
                          source={{ uri: item.image }}
                          style={{
                            width: 100,
                            height: 100,
                            borderRadius: 10,
                            marginRight: SPACING / 2,
                            margin: 5,
                          }}
                        />
                      )
                    }}
                  />
                </View>
              </Animated.View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )

  React.useEffect(() => {
    return outFitsView
  }, [isFocused])

  return outFitsView
}
