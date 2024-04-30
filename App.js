import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import CalculateScreen from "./src/screens/CalculateScreen";
import DetailSignupScreen from "./src/screens/DetailSignupScreen";
import EgzersizeScreen from "./src/screens/EgzersizeScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup:SignupScreen,
    Detail:DetailSignupScreen,
    Signin:SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    Account: AccountScreen,
    Calculate:CalculateScreen,
    Egzersize:EgzersizeScreen
  })
})

export default createAppContainer(switchNavigator)