import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Overlay, Icon } from "react-native-elements";

const OverlayFoodCard = ({ name, icon, calories,service }) => (
  <View style={styles.foodCard}>
    <Icon name={icon} type="material-community" size={30} />
    <Text style={styles.foodName}>{name}</Text>
    <Text style={styles.foodCalories}>{service} Service</Text>
    <Text style={styles.foodCalories}>{calories} Calories</Text>
  </View>
);

const FoodListOverlay = ({ isVisible, toggleOverlay, onFoodSelect }) => {
  const foodData = [
    { id: 1, name: "peanut", icon: "peanut",service:1, calories: 400 },
    { id: 2, name: "apple", icon: "food-apple",service:1, calories: 400 },
    { id: 3, name: "steak", icon: "food-steak",service:1, calories: 400 },
    { id: 4, name: "hamburger", icon: "hamburger",service:1, calories: 400 },
    { id: 5, name: "turkey", icon: "food-turkey",service:1, calories: 400 },
    { id: 6, name: "hot dog", icon: "food-hot-dog",service:1, calories: 400 },
    { id: 7, name: "croissant", icon: "food-croissant",service:1, calories: 400 },
    { id: 8, name: "drumstick", icon: "food-drumstick",service:1, calories: 400 },
  ];

  const renderFoodItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.foodItem}
      onPress={() => onFoodSelect && onFoodSelect(item)} // Optional callback for food selection
    >
      <OverlayFoodCard {...item} />
    </TouchableOpacity>
  );

  return (
    <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay}>
      <View style={styles.overlayContent}>
        <Text style={styles.overlayTitle}>Select Food</Text>
        <View style={styles.foodList}>{foodData.map(renderFoodItem)}</View>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayContent: {
    borderWidth: 1,
    padding: 20,
    alignItems: "center",
  },
  overlayTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  foodList: {
    flex: 1, // Allow list to fill available space
  },
  foodItem: {
    marginBottom: 10,
  },
  foodCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodName: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  foodCalories: {
    marginLeft: "auto",
    fontSize: 14,
    color: "#777",
  },
});

export default FoodListOverlay;
