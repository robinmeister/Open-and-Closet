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
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Feather,
} from 'react-native-vector-icons'
const { width, height } = Dimensions.get('screen')
import faker from 'faker'
import { BottomNavigation } from 'react-native-paper'
import { theme } from '../core/theme'
import { render } from 'react-dom'
import { appData } from '../core/appData'

faker.seed(10)
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.datatype.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
      'women',
      'men',
    ])}/${faker.datatype.number(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  }
})

const SPACING = 10
const AVATAR_SIZE = 70
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

export default function CommunityScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <FlatList
        data={appData.posts}
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

          return (
            <View
              style={{
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255,255,255, 0.8)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <Image
                  source={{ uri: item.avatar }}
                  style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 22,
                      fontWeight: '700',
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 18, opacity: 0.7 }}>
                    {item.title}
                  </Text>
                  {/* <Text
                    style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }}
                  >
                    {item.email}
                  </Text> */}
                </View>
              </View>
              <Text style={{ alignSelf: 'center', margin: 5 }}>
                {item.text}
              </Text>
              <View style={{ flex: 1, width: null, height: item.height }}>
                <Image
                  resizeMode="contain"
                  resizeMethod="scale"
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    borderRadius: 5,
                    marginRight: SPACING / 2,
                    marginTop: 10,
                    ...StyleSheet.absoluteFillObject,
                  }}
                />
              </View>
              <View
                style={{
                  margin: 10,
                  alignSelf: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  style={{ flexDirection: 'row' }}
                >
                  <Feather
                    name="heart"
                    size={15}
                    color={'black'}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{}}>{item.likes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}
