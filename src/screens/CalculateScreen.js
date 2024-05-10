import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import TopBar from "../components/TopBar";

const CalculateScreen = () => {
  return (
    <View>
      <TopBar text="Calories Calculate Page" />
    </View>
  );
};

CalculateScreen.navigationOptions = {
  headerShown: null,
  tabBarIcon: (
    { focused } // Dynamic icon color based on state
  ) => (
    <Icon
      name="silverware-fork-knife"
      type="material-community"
      color={focused ? "orange" : "black"}
    />
  ),
};

const styles = StyleSheet.create({});

export default CalculateScreen;
