import React, { Component, useState } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native'
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from 'react-native-vector-icons'
import ReactNativeItemSelect from 'react-native-item-select'
import { useTheme } from 'react-native-paper'
import { appData } from '../core/appData'
import { theme } from '../core/theme'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const { width, height } = Dimensions.get('screen')

export default function EditOutfitScreen({ route, navigation }) {
  const [outfitData, setOutfitData] = useState(route.params)
  const { colors } = useTheme()
  const data = outfitData.items

  const handleSave = () => {
    let itemToChange = appData.outfits.find(
      (item) => item.key === outfitData.key
    )
    itemToChange.name = outfitData.name
    navigation.goBack()
  }

  const handleDelete = () => {
    Alert.alert('Outfit löschen', 'Möchten Sie dieses Outfit löschen?', [
      {
        text: 'Abbrechen',
        onPress: () => {
          return
        },
        style: 'cancel',
      },
      {
        text: 'Löschen',
        style: 'destructive',
        onPress: () => {
          appData.outfits = appData.outfits.filter(
            (item) => item.key !== outfitData.key
          )
          navigation.goBack()
        },
      },
    ])
  }

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'column',
      }}
    >
      <View style={styles.action}>
        <MaterialIcons
          name="title"
          color={colors.text}
          size={30}
          style={{ alignSelf: 'center' }}
        />
        <TextInput
          value={outfitData.name}
          size={30}
          margin={10}
          padding={10}
          placeholder="Bezeichung"
          placeholderTextColor="#666666"
          autoCorrect={false}
          onChangeText={(name) => {
            setOutfitData({
              name,
              items: outfitData.items,
              key: outfitData.key,
            })
          }}
          selectionColor={theme.colors.primary}
          style={[
            styles.textInput,
            {
              color: colors.text,
              fontSize: 30,
              borderColor: theme.colors.primary,
              width: width - 20,
              //height: 20,
              borderWidth: 0.5,
              borderRadius: 5,
              alignSelf: 'center',
              flex: 1,
            },
          ]}
        />
      </View>
      <ReactNativeItemSelect
        data={data}
        multiselect={true}
        extraBtnOpacityProps={{
          style: {
            opacity: 1,
            radius: 5,
            width: width - 20,
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 10,
          },
        }}
        //maxSelectCount={0}
        submitBtnTitle="Speichern"
        itemComponent={(item) => {
          if (item.image) {
            return (
              <View>
                <Image
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: height / 4,
                  }}
                  source={{ uri: item.image }}
                  imageStyle={{ borderRadius: 15 }}
                />
              </View>
            )
          } else {
            return (
              <View
                style={{
                  flex: 1,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginTop: 60,
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            )
          }
        }}
        selected={false}
        onSubmit={handleSave}
        styles={{
          btn: {
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'none',
          },
          disabledBtn: { backgroundColor: theme.colors.primary },
          tickTxt: { backgroundColor: theme.colors.primary },
          itemBoxHighlight: { borderColor: theme.colors.primary },
          activeItemBoxHighlight: { borderColor: theme.colors.primary },
        }}
      />
      <View style={{ flexDirection: 'row', marginBottom: 50 }}>
        <TouchableOpacity
          style={{
            flex: 1,
            ...styles.commandButton,
            margin: 10,
            marginTop: 20,
            backgroundColor: theme.colors.error,
          }}
          onPress={handleDelete}
        >
          <Text style={styles.panelButtonTitle}>Entfernen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            ...styles.commandButton,
            margin: 10,
            marginTop: 20,
          }}
          onPress={handleSave}
        >
          <Text style={styles.panelButtonTitle}>Speichern</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: theme.colors.primary,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    marginTop: 10,
  },
})
