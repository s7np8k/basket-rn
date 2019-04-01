/** @format */
import React from "react";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import LinearGradient from "react-native-linear-gradient"
import LaunchScreen from "../screens/LaunchScreen";
import TeamsScreen from "../screens/TeamsScreen";
import TeamScreen from "../screens/TeamScreen";
import RosterTab from "../screens/TeamScreenTabs/RosterTab";
import NewsTab from "../screens/TeamScreenTabs/NewsTab";
import TwiterTab from "../screens/TeamScreenTabs/TwiterTab";



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
    screen: RosterTab,
    navigationOptions: {
      tabBarLabel: 'Roster',
      tabBarIcon: ({tintColor}) =>
          <Icon name="account-group" size={25} color={tintColor} />
    },
  },
  Tab2: {
    screen: NewsTab,
    navigationOptions: {
      tabBarLabel: 'News',
      tabBarIcon: ({tintColor}) =>
          <Icon name="newspaper" size={25} color={tintColor} />
    },
  },
  Tab3: {
    screen: TwiterTab,
    navigationOptions: {
      tabBarLabel: 'Twitter',
      tabBarIcon: ({tintColor}) =>
          <Icon name="twitter" size={25} color={tintColor} />
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


