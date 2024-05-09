import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text1, text2, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.links}>
          <Text style={styles.link1}>{text1}</Text>
          <Text style={styles.link2}>{text2}</Text>
        </Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  links: {
    alignSelf: "center",
  },
  link1:{
    color:"white"
  },
  link2:{
    color:"green"
  }
});

export default withNavigation(NavLink);
