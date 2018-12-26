/** @format */
import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../screens/LaunchScreen";
import TeamsScreen from "../screens/TeamsScreen";

const AppNavigator = createStackNavigator({
    Launch: {
      screen: LaunchScreen
    },
    Teams: {
        screen: TeamsScreen
      }
  });
  
export default createAppContainer(AppNavigator);
