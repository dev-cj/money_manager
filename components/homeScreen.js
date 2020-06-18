import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
  homeScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})
const HomeScreen = props => {
  return (
    <View style={styles.homeScreen}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen
