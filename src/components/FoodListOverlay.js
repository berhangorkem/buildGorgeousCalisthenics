import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Overlay, Icon } from "react-native-elements";
import FoodAddOverlay from "./FoodAddOverlay"; // assuming FoodAddOverlay is in a separate file

const OverlayFoodCard = ({ name, icon, calories, service }) => (
  <View style={styles.foodCard}>
    <Icon name={icon} type="material-community" size={30} />
    <Text style={styles.foodName}>{name}</Text>
    <View style={styles.serviceAndCaloriesContainer}>
      <Text style={styles.serviceText}>{service} Service</Text>
      <Text style={styles.foodCalories}>{calories} Calories</Text>
    </View>
  </View>
);

const FoodListOverlay = ({
  isVisible,
  toggleOverlay,
  onFoodSelect,
  onAddFood,
}) => {
  const [foodData, setFoodData] = useState([
    { id: 1, name: "peanut", icon: "peanut", service: 1, calories: 400 },
    { id: 2, name: "apple", icon: "food-apple", service: 1, calories: 400 },
    { id: 3, name: "steak", icon: "food-steak", service: 1, calories: 400 },
    { id: 4, name: "hamburger", icon: "hamburger", service: 1, calories: 400 },
    { id: 5, name: "turkey", icon: "food-turkey", service: 1, calories: 400 },
    { id: 6, name: "hot dog", icon: "food-hot-dog", service: 1, calories: 400 },
    {
      id: 7,
      name: "croissant",
      icon: "food-croissant",
      service: 1,
      calories: 400,
    },
    {
      id: 8,
      name: "drumstick",
      icon: "food-drumstick",
      service: 1,
      calories: 400,
    },
  ]);
  const [isNewFoodOverlayVisible, setIsNewFoodOverlayVisible] = useState(false);


  const handleDeleteFood = (itemId) => {
    Alert.alert(
      "Delete Selected Food",
      "Are you sure you want to delete this food?",
      [
        { text: "No", onPress: () => {} },
        {
          text: "Yes",
          onPress: () => {
            setFoodData((prevData) =>
              prevData.filter((item) => item.id !== itemId)
            );
          },
        },
      ]
    );
  };

  const renderFoodItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.foodItem}
      onPress={() => onFoodSelect && onFoodSelect(item)}
      onLongPress={() => handleDeleteFood(item.id)}
      // Optional callback for food selection
    >
      <OverlayFoodCard {...item} />
    </TouchableOpacity>
  );

  return (
    <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay}>
      <View style={styles.overlayContent}>
        <Text style={styles.overlayTitle}>Select Food</Text>
        <TouchableOpacity onPress={() => setIsNewFoodOverlayVisible(true)}>
          <Text style={styles.addFoodButton}>Add New Food</Text>
        </TouchableOpacity>
        <View style={styles.foodList}>{foodData.map(renderFoodItem)}</View>
      </View>
      <FoodAddOverlay
        isVisible={isNewFoodOverlayVisible}
        toggleOverlay={() => setIsNewFoodOverlayVisible(false)}
        onAddFood={(newFoodItem) => {
          setFoodData([...foodData, { ...newFoodItem, id: foodData.length + 1 }]);
        }}
      />
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
  serviceAndCaloriesContainer: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  foodCalories: {
    fontSize: 10,
    color: "#777",
  },
  serviceText: {
    fontSize: 10,
    color: "#999",
    marginRight: 15,
  },
  addFoodButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
  },
});

export default FoodListOverlay;

