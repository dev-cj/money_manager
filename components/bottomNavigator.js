import React from 'react'
import {StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './homeScreen'
import AnalyseScreen from './analyseScreen'
import SettingScreen from './settingScreen'
import BudgetScreen from './budgetScreen'
import AddScreen from './addScreen'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    backgroundColor: '#3f3',
    flex: 1,
    flexDirection: 'column-reverse',
  },
  addButton: {
    backgroundColor: '#fff',
    height: 60,
    width: 60,
    borderRadius: 30,
    textAlign: 'center',
    bottom: 19,
  },
})

const Tab = createBottomTabNavigator()
const HomeTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: true,
      style: {
        borderTopColor: 'transparent',
        backgroundColor: '#0F1123',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName
        if (route.name === 'Home') {
          iconName = 'ios-home'
        } else if (route.name === 'Analyse') {
          iconName = 'ios-analytics'
        } else if (route.name === 'Settings') {
          iconName = 'ios-settings'
        } else if (route.name === 'Budget') {
          iconName = 'ios-wallet'
        } else if (route.name === 'Add') {
          iconName = 'ios-add-circle'
        }
        return (
          <Ionicons
            style={route.name === 'Add' ? styles.addButton : null}
            name={iconName}
            size={route.name === 'Add' ? 60 : size}
            color={route.name === 'Add' ? '#2F82FD' : color}
          />
        )
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Analyse" component={AnalyseScreen} />
    <Tab.Screen
      name="Add"
      component={AddScreen}
      tabBarOptions={{showLabel: true}}
    />
    <Tab.Screen name="Budget" component={BudgetScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
  </Tab.Navigator>
)

export default HomeTabNavigator
