import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
  settingScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})
const SettingScreen = props => {
  return (
    <View style={styles.settingScreen}>
      <Text>Setting Screen</Text>
    </View>
  )
}

export default SettingScreen
