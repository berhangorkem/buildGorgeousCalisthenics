import React from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import TopBar from "../components/TopBar";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TopBar text="Account Informations"
      icon="person"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
