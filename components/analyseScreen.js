import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
  analyseScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})
const AnalyseScreen = props => {
  return (
    <View style={styles.analyseScreen}>
      <Text>Analyse Screen</Text>
      <Button
        title="Go to Settings screen"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </View>
  )
}

export default AnalyseScreen
