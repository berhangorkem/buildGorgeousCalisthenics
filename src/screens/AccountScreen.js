import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card } from "react-native-elements";
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
  const dailyCalories = [
    { label: "Mon", value: 1300 },
    { label: "Tue", value: 1100 },
    { label: "Wed", value: 1400 },
    { label: "Thu", value: 1900 },
    { label: "Fri", value: 2000 },
    { label: "Sat", value: 1919 },
    { label: "Sun", value: 1453 },
  ];
  const dailyActivities = [
    { label: "Mon", value: "PULL" },
    { label: "Tue", value: "PUSH" },
    { label: "Wed", value: "LEG" },
    { label: "Thu", value: "OFF" },
    { label: "Fri", value: "CARDİO" },
    { label: "Sat", value: "FULLBODY" },
    { label: "Sun", value: "OFF" },
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
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.infoBoxTitle}>Daily Calories</Card.Title>
        <Card.Divider />
        {dailyCalories.map((item) => (
          <View style={styles.infoRow} key={item.label}>
            <Text style={styles.infoLabel}>{item.label}: </Text>
            <Text>{item.value}</Text>
          </View>
        ))}
      </Card>
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.infoBoxTitle}>Daily Activities</Card.Title>
        <Card.Divider />
        {dailyActivities.map((item) => (
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
