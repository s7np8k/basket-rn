/** @format */
import React from "react";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import LinearGradient from "react-native-linear-gradient"
import LaunchScreen from "../screens/LaunchScreen";
import TeamsScreen from "../screens/TeamsScreen";
import TeamScreen from "../screens/TeamScreen";
import Tab1Screen from "../screens/TeamScreenTabs/Tab1Screen";
import Tab2Screen from "../screens/TeamScreenTabs/Tab2Screen";
import Tab3Screen from "../screens/TeamScreenTabs/Tab3Screen";



const AppTabNavigator = createBottomTabNavigator({
  TeamTab: {
    screen: TeamScreen,
    navigationOptions: {
      tabBarLabel: 'Schedule',
      tabBarIcon: ({tintColor}) =>
          <Icon name="calendar" size={25} color={tintColor} />
    },
  },
  Tab1: {
    screen: Tab1Screen,
    navigationOptions: {
      tabBarLabel: 'Roster',
      tabBarIcon: ({tintColor}) =>
          <Icon name="account-group" size={25} color={tintColor} />
    },
  },
  Tab2: {
    screen: Tab2Screen,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({tintColor}) =>
          <Icon name="newspaper" size={25} color={tintColor} />
    },
  },
  Tab3: {
    screen: Tab3Screen,
    navigationOptions: {
      tabBarLabel: 'xxxx',
      tabBarIcon: ({tintColor}) =>
          <Icon name="access-point" size={25} color={tintColor} />
    },
  },
});

const AppStackNavigator = createStackNavigator({
  Launch: {
    screen: LaunchScreen
  },
  Teams: {
    screen: TeamsScreen
  },
  Team: {
    screen: AppTabNavigator
  }
}, {
    initialRouteName: 'Launch',
    defaultNavigationOptions: {
      headerBackground: (
        <LinearGradient
          colors={['#244289', '#7487b4']}
          style={{ flex: 1 }}
          start={{ x: 1.0, y: 0 }} end={{ x: 0.1, y: 0 }} />
      ),
      headerTintColor: 'white',
      headerTitleStyle: { color: 'white' },
    }
  });

export default createAppContainer(AppStackNavigator);


