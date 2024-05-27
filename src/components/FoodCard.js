import React from "react";
import { StyleSheet, View,Image } from "react-native";
import { Text } from "react-native-elements";

const FoodCard = ({ icon, name, calories, service }) => {
  return (
    <View style={styles.cardRow}>
      <View style={styles.iconTextContainer}>
      <Image source={icon} style={{ width: 30, height: 30 }} />
        <Text style={styles.foodInfo}>{name}</Text>
      </View>
      <View style={styles.serviceContainer}>
        <Text style={styles.serviceText}>{service} Service</Text>
        <Text style={styles.calories}>{calories} Calories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFA",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodInfo: {
    marginLeft: 10,
  },
  serviceText: {
    fontSize: 10,
    color: "#999",
  },
  calories: {
    textAlign: "right",
    fontSize: 10,
    color:
      "radial-gradient(circle, rgba(69,255,0,0.5) 0%, rgba(0,240,255,0.5) 100%)",
  },
  serviceContainer: {
    alignItems:"center",
    marginLeft: "auto",
  },
  serviceText: {
    fontSize: 10,
    color: "#999",
  },
});

export default FoodCard;
