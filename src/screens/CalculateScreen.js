import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";

const CalculateScreen = () => {
  const value = 3100;
  const limit= 3000;

  return (
    <View>
      <TopBar text="Calories Calculate Page" />
      <ProgressBar value={value} limit={limit} />
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
