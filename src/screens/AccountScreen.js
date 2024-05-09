import React from "react";
import { View, StyleSheet } from "react-native";
import { Text,Card } from "react-native-elements";
import Spacer from "../components/Spacer";
import TopBar from "../components/TopBar";

const AccountScreen = ({ user }) => {
  const userInfo = [
    { label: "Username", value:"berhangorkem" },
    { label: "E-Mail", value: "berhangorkem@gmail.com" },
    { label: "Age", value:"21" },
    { label: "Size", value:"180" },
    { label: "Weight", value:"95" },
    { label: "Gender", value:"male" },
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

const styles = StyleSheet.create({
  infoBoxTitle: {
    textAlign: "left",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically
  },
  card: {
    borderRadius: 10, // Add custom card styling (optional)
    padding: 15, // Add padding for better spacing
  },
  infoLabel: {
    fontWeight: "bold", // Style label text (optional)
  },
});

export default AccountScreen;
