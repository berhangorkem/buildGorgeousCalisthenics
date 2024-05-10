import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "../components/TopBar";
import { Icon } from "react-native-elements";

const EgzersizeScreen = () => {
  return (
    <View>
      <TopBar text="Egzersize Page" />
    </View>
  );
};
EgzersizeScreen.navigationOptions = {
  headerShown: null,
  tabBarIcon: (
    { focused } // Dynamic icon color based on state
  ) => (
    <Icon
      name="dumbbell"
      type="material-community"
      color={focused ? "orange" : "black"} // Set active and inactive colors
    />
  ),
};
const styles = StyleSheet.create({
  img: {
    height: 100,
    width: "auto",
  },
});

export default EgzersizeScreen;
