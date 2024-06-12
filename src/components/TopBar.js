import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LogoutIcon from "./LogoutIcon"; 

const TopBar = ({ text }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Icon name="leaf" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      {text === "Account Information" ? <LogoutIcon /> : <View style={styles.placeholder} />}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingHorizontal: 15,
    paddingTop:30,
    height: 80,
  },
  headerText: {
    color: "black",
    fontSize: 20,
  },
  placeholder: {
    width: 30, 
  },
});

export default TopBar;
