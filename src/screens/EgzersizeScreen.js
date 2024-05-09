import React from "react";
import { View, StyleSheet, Text,  } from "react-native";
import TopBar from "../components/TopBar";

const EgzersizeScreen = () => {
  
  return (
    <View>
      <TopBar text="Egzersize Page" />
    </View>
  );
};

EgzersizeScreen.navigationOptions = {
  headerShown: true,
};

const styles = StyleSheet.create({
  img:{
    height:100,
    width:"auto"
  }
});

export default EgzersizeScreen;
