import React from "react";
import { Header, Icon } from "react-native-elements";
import LogoutIcon from "./LogoutIcon"

const TopBar = ({ text }) => {
  return (
    <Header
      containerStyle={{
        backgroundColor: "transparent",
        justifyContent: "space-around",
        borderBottomWidth:1,
        borderBottomColor:"black",
        marginTop: 30,
      }}
      leftComponent={
        <Icon name="leaf" type="material-community" color="black" />
      }
      centerComponent={{ text: text, style: { color: "black" } }}
      rightComponent={text === "Account Information" ? <LogoutIcon /> : null}
    />
  );
};


export default TopBar;
