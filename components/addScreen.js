import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  addScreen: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
const AddScreen = props => {
  return (
    <View style={styles.addScreen}>
      <Text>Add Screen</Text>
    </View>
  )
}

export default AddScreen
