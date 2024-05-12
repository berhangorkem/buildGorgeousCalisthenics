import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, Text } from "react-native-elements";

const FoodCard = ({ icon, name, calories, service }) => {
  return (
    <View style={styles.cardRow}>
      <View style={styles.iconTextContainer}>
        <Icon name={icon} type="material-community" size={30} />
        <Text style={styles.foodInfo}>{name}</Text>
      </View>
      <View style={styles.serviceContainer}>
        <Text style={styles.serviceText}>{service} Service</Text>
      </View>
      <Text style={styles.calories}>{calories} Calories</Text>
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
  calories: {
    flex: 1,
    textAlign: "right",
    fontSize: 12,
    color:
      "radial-gradient(circle, rgba(69,255,0,1) 0%, rgba(0,240,255,1) 100%)",
  },
  serviceContainer: {
    marginTop: 2,
    marginLeft: 10,
  },
  serviceText: {
    fontSize: 10,
    color: "#999",
  },
});

export default FoodCard;
