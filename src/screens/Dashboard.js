import {
  MaterialCommunityIcons,
  MaterialIcons,
} from 'react-native-vector-icons'
import { theme } from '../core/theme'
import IonIcon from 'react-native-vector-icons/Ionicons'

import MyClosetScreen from './MyClosetScreen'
import MyOutfitsScreen from './MyOutfitsScreen'
import CommunityScreen from './CommunityScreen'
import SettingsScreen from './SettingsScreen'
import AddScreen from './AddScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

export default function Dashboard({ navigation }) {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarLabelStyle: { fontSize: 6 },
        tabBarItemStyle: {},
        tabBarIcon: ({ focused, color, size = 26 }) => {
          switch (route.name) {
            case 'My Closet':
              return (
                <MaterialCommunityIcons
                  name="wardrobe"
                  size={size}
                  color={color}
                />
              )

            case 'My Outfits':
              return (
                <MaterialCommunityIcons
                  name="tshirt-crew"
                  size={size}
                  color={color}
                />
              )

            case 'Add':
              return (
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={size}
                  color={color}
                />
              )

            case 'Community':
              return <IonIcon name="people" size={size - 2} color={color} />

            case 'Settings':
              return <MaterialIcons name="settings" size={size} color={color} />

            default:
              break
          }
        },
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.grey,
        tabBarStyle: {
          backgroundColor: 'transparent',
          height: 55,
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.black,
          top: 0,
        },
      })}
    >
      <Tab.Screen name="My Closet" component={MyClosetScreen} />
      <Tab.Screen name="My Outfits" component={MyOutfitsScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
