import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './src/screens'
import AddOutfitScreen from './src/screens/AddOutfitScreen'
import AddItemScreen from './src/screens/AddItemScreen'
import EditItemScreen from './src/screens/EditItemScreen'
import EditOutfitScreen from './src/screens/EditOutfitScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
          <Stack.Screen name="EditItemScreen" component={EditItemScreen} />
          <Stack.Screen name="EditOutfitScreen" component={EditOutfitScreen} />
          <Stack.Screen name="AddOutfitScreen" component={AddOutfitScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
