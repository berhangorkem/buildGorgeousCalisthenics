import React from "react";
import { View, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";
import MenuIcon from "./MenuIcon"

const TopBar = ({ text }) => {
  return (
    <Header
      containerStyle={{
        backgroundColor: "#D9D9D9",
        justifyContent: "space-around",
        marginTop: 30,
      }}
      leftComponent={
        <Icon name="leaf" type="material-community" color="black" />
      }
      centerComponent={{ text: text, style: { color: "black" } }}
      rightComponent={<MenuIcon/>}
    />
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    marginTop: 40,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
});

export default TopBar;
