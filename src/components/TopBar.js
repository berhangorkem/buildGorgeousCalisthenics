import React from "react";
import { Header, Icon } from "react-native-elements";
import MenuIcon from "./LogoutIcon"

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


export default TopBar;
