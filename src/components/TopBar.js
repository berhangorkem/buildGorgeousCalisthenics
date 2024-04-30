import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

const TopBar = ({text,icon}) => {
  return (
    <Header
      placement="left"
      leftComponent={{ icon: icon, color: "black" }}
      centerComponent={{ text: text, style: { color: "black" } }}
      rightComponent={{ icon: "menu", color: "black" }}
      containerStyle={{
        backgroundColor: 'white',
        marginTop:30
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default TopBar;
