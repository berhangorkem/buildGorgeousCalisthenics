import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const TopBar = ({text}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text h5>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent:"center",
    alignItems:"center",
    height: 40,
    marginTop: 40,
    marginBottom:10,
    borderBottomWidth:1
  },

});

export default TopBar;
