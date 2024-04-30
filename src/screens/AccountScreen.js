import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Account Screen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate("loginFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
