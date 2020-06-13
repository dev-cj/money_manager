import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeScreen: {flex: 1, alignItems: 'center', justifyContent: 'center'},
})

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const SettingScreen = props => {
  return (
    <View style={styles.homeScreen}>
      <Text>Setting Screen</Text>
    </View>
  )
}

const FeedScreen = props => {
  return (
    <View style={styles.homeScreen}>
      <Text>Feed Screen</Text>
      <Button
        title="Go to settings screen"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </View>
  )
}

const HomeTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName
        if (route.name === 'Home') {
          iconName = 'ios-home'
        } else if (route.name === 'Feed') {
          iconName = 'logo-rss'
        } else if (route.name === 'Settings') {
          iconName = 'ios-settings'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
)

const HomeScreen = props => {
  return (
    <View style={styles.homeScreen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to settings screen"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </View>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{title: 'My home screen'}}
          name="Home"
          component={HomeTabNavigator}
        />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
