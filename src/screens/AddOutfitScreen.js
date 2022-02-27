import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  StyleSheet,
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

export default function EditOutfitScreen({ navigation }) {
  const outfitData = {
    name: '',
    items: [],
    key: uuidv4(),
  }
  const { colors } = useTheme()
  const data = appData.items

  const handleAddOutfit = (items) => {
    outfitData.items = items
    appData.outfits.push({
      key: outfitData.key,
      name: outfitData.name,
      items: outfitData.items,
    })
    navigation.goBack()
    //console.log(appData)
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
          size={30}
          margin={10}
          padding={10}
          placeholder="Bezeichung"
          placeholderTextColor="#666666"
          autoCorrect={false}
          onChangeText={(name) => {
            outfitData.name = name
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
        floatSubmitBtn={true}
        lastRowMargin={20}
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
        onSubmit={(items) => {
          handleAddOutfit(items)
        }}
        styles={{
          btn: {
            backgroundColor: theme.colors.primary,
            borderRadius: 5,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          },
          disabledBtn: { backgroundColor: theme.colors.primary },
          tickTxt: { backgroundColor: theme.colors.primary },
          activeItemBoxHighlight: { borderColor: theme.colors.primary },
        }}
      />
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
})
