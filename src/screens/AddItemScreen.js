import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  Picker,
} from 'react-native'

import { DefaultTheme, ThemeProvider, useTheme } from 'react-native-paper'
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from 'react-native-vector-icons'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import IonIcon from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

import * as ImagePicker from 'expo-image-picker'
import RNPickerSelect from 'react-native-picker-select'
import { appData } from '../core/appData'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const { width, height } = Dimensions.get('screen')

export default function AddItemScreen({ navigation }) {
  const itemData = {
    name: '',
    occasion: '',
    category: '',
    notes: '',
    image: '',
  }

  let [selectedImage, setSelectedImage] = React.useState(null)
  const { colors } = useTheme()

  const takePhotoFromCamera = () => {}

  const choosePhotoFromLibrary = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      presentationStyle: 0,
    })
    if (pickerResult.cancelled === true) {
      return
    }

    setSelectedImage({ localUri: pickerResult.uri })
  }

  const getSelectedImage = () => {
    if (selectedImage && selectedImage.localUri) {
      itemData.image = selectedImage.localUri
      return { uri: selectedImage.localUri }
    }
    return null
  }

  const AddItem = () => {
    // alert(
    //   `Name: ${itemData.name}\nOccasion: ${itemData.occasion}\nCategory: ${itemData.category}\nNotes: ${itemData.notes}`
    // )
    navigation.goBack()
    appData.items.push({
      key: uuidv4(),
      name: itemData.name,
      occasion: itemData.occasion,
      category: itemData.category,
      notes: itemData.notes,
      image: itemData.image,
    })
  }
  //console.log(appData.items)
  return (
    <View style={styles.container}>
      <BackButton goBack={navigation.goBack} />
      <View
        style={{
          margin: 20,
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <ImageBackground
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            source={getSelectedImage()}
            style={{ height: height / 3, width: width - 20 }}
            imageStyle={{ borderRadius: 15 }}
          >
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={{
                flex: 1,
                height: 100,
                width: 100,
                alignSelf: 'center',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon
                name="image"
                size={100}
                color="grey"
                style={{
                  opacity: 0.7,
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </ImageBackground>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
            }}
          >
            Neues Kleidungsstück
          </Text>
        </View>

        <View style={styles.action}>
          <MaterialIcons name="title" color={colors.text} size={20} />
          <TextInput
            placeholder="Bezeichnung"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(name) => {
              itemData.name = name
            }}
            selectionColor={theme.colors.primary}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <SimpleLineIcons name="event" color={colors.text} size={20} />
          <TextInput
            placeholder="Anlass"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(occasion) => {
              itemData.occasion = occasion
            }}
            selectionColor={theme.colors.primary}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <MaterialIcons name="category" color={colors.text} size={20} />
          <View style={styles.textInput}>
            <RNPickerSelect
              placeholder={{
                label: 'Kategorie',
                value: null,
              }}
              style={{ placeholder: { color: '#666666' } }}
              onValueChange={(value) => {
                itemData.category = value
              }}
              items={categories}
            />
          </View>
        </View>
        <View style={styles.action}>
          <MaterialIcons name="notes" color={colors.text} size={20} />
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Notizen
            
            
            
            "
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(notes) => {
              itemData.notes = notes
            }}
            selectionColor={theme.colors.primary}
            style={[
              styles.textInput,
              {
                color: colors.text,
                borderColor: '#c9c9c9',
                //borderRightWidth: 2,
                //borderBottomWidth: 2,
                //borderTopWidth: 0.25,
                //borderLeftWidth: 0.2,
                minHeight: 70,
                maxHeight: 70,
                borderRadius: 5,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.3,
                shadowRadius: 20,
              },
            ]}
          />
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={AddItem}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
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
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
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

const categoryOptions = [
  'Badeanzug',
  'Bluse',
  'Halstuch',
  'Hemd',
  'Hose',
  'Jacke',
  'Jeans',
  'Kleid',
  'Krawatte',
  'Kurze Hose',
  'Mantel',
  'Poncho',
  'Pullover',
  'Pullover',
  'Pyjama',
  'Rock',
  'Socken',
  'Strickjacke',
  'T-Shirt',
  'Trainingsanzug',
  'Unterwäsche',
  'Weste',
  'Sonstiges',
]

const categories = categoryOptions.map((x) => ({ label: x, value: x }))
