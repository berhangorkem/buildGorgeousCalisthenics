import React from "react";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "../components/TopBar";

const EgzersizeScreen = () => {
  return (
    <View>
      <TopBar
      text="Egzersize Page"
      icon="fitbit"
      />
    </View>
  );
};

EgzersizeScreen.navigationOptions = {
  headerShown: true,
};

const styles = StyleSheet.create({});

export default EgzersizeScreen;
