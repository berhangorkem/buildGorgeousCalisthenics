import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon } from "react-native-elements";
import TopBar from "../components/TopBar";

const AccountScreen = () => {
  const userInfo = [
    { label: "Username", value: "berhangorkem" },
    { label: "E-Mail", value: "berhangorkem@gmail.com" },
    { label: "Age", value: "21" },
    { label: "Size", value: "180" },
    { label: "Weight", value: "95" },
    { label: "Gender", value: "male" },
  ];

  return (
    <View>
      <TopBar text="Account Information" />
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.infoBoxTitle}>
          Personal Information
        </Card.Title>
        <Card.Divider />
        {userInfo.map((item) => (
          <View style={styles.infoRow} key={item.label}>
            <Text style={styles.infoLabel}>{item.label}: </Text>
            <Text>{item.value}</Text>
          </View>
        ))}
      </Card>
    </View>
  );
};
AccountScreen.navigationOptions = {
  headerShown: null,
  tabBarIcon: (
    { focused } // Dynamic icon color based on state
  ) => (
    <Icon
      name="clipboard-account"
      type="material-community"
      color={focused ? "orange" : "black"} // Set active and inactive colors
    />
  ),
};

const styles = StyleSheet.create({
  infoBoxTitle: {
    textAlign: "left",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    borderRadius: 10,
    padding: 15,
  },
  infoLabel: {
    fontWeight: "bold",
  },
});

export default AccountScreen;
