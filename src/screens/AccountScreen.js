import React from "react";
import { View, StyleSheet,TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import TopBar from "../components/TopBar";

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <TopBar text="Account Informations"
      />
      <View style={styles.container}>
        <Spacer/>
        <Text h3>Personal Informations</Text>
        <Spacer/>
        <Text>Age:</Text>
        <Spacer/>
        <Text>Size:</Text>
        <Spacer/>
        <Text>Weight:</Text>
        <Spacer/>
        <Text>Gender:</Text>
      </View>
      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10
  }
});

export default AccountScreen;
