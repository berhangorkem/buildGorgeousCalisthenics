import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from 'react-native-elements';
import { LogBox } from 'react-native';

import AccountScreen from "./src/screens/AccountScreen";
import CalculateScreen from "./src/screens/CalculateScreen";
import DetailSignupScreen from "./src/screens/DetailSignupScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import PlansScreen from "./src/screens/PlansScreen";
import MovementsScreen from "./src/screens/MovementsScreen";
import { setNavigator } from "./src/navigationRef";

LogBox.ignoreAllLogs();

const ExerciseStack = createStackNavigator(
  {
    Exercises: {
      screen: ExerciseScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Plans: PlansScreen,
    Movements: MovementsScreen,
  }
);

const mainFlow = createMaterialBottomTabNavigator(
  {
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        headerShown: null,
        tabBarIcon: ({ focused }) => (
          <Icon
            name="account"
            type="material-community"
            color={focused ? "orange" : "black"}
          />
        ),
      },
    },
    Calculate: {
      screen: CalculateScreen,
      navigationOptions: {
        headerShown: null,
        tabBarIcon: ({ focused }) => (
          <Icon
            name="silverware-fork-knife"
            type="material-community"
            color={focused ? "orange" : "black"}
          />
        ),
      },
    },
    Exercise: {
      screen: ExerciseStack,
      navigationOptions: {
        headerShown: null,
        tabBarIcon: ({ focused }) => (
          <Icon
            name="dumbbell"
            type="material-community"
            color={focused ? "orange" : "black"}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Account",
    activeColor: "orange",
    inactiveColor: "black",
    barStyle: { backgroundColor: "white" },
  }
);

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Detail: DetailSignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: mainFlow,
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
  );
};