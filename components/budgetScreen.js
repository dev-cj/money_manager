import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
  budgetScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})
const BudgetScreen = props => {
  return (
    <View style={styles.homeScreen}>
      <Text>Bidget Screen</Text>
    </View>
  )
}

export default BudgetScreen
