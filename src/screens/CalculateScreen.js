import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "../components/TopBar";

const CalculateScreen = () => {
  return (
    <View>
      <TopBar 
      text="Calories Calculate Page"
      />
    </View>
  );
};

CalculateScreen.navigationOptions = {
  headerShown: true,
};

const styles = StyleSheet.create({});

export default CalculateScreen;
