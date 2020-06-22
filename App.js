import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { StyleSheet, Text, View, Button } from 'react-native'
import HomeTabNavigator from './components/bottomNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const Stack = createStackNavigator()
const BottomNavigator = () => {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{ title: 'My home screen' }}
          name="Home"
          component={HomeTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <BottomNavigator />
    </Provider>
  )
}

export default App
