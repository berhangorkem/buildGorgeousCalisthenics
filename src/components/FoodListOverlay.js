import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import { Overlay } from "react-native-elements";
import FoodAddOverlay from "./FoodAddOverlay"; // assuming FoodAddOverlay is in a separate file

const OverlayFoodCard = ({ name, icon, calories }) => (
  <View style={styles.foodCard}>
    <Image source={icon} style={{ width: 30, height: 30 }} />
    <Text style={styles.foodName}>{name}</Text>
    <View style={styles.serviceAndCaloriesContainer}>
      <Text style={styles.foodCalories}>{calories} Calories</Text>
    </View>
  </View>
);

const FoodListOverlay = ({ isVisible, toggleOverlay, onFoodSelect }) => {
  const foodDataInitial = [
    {
      id: 1,
      name: "Almond",
      icon: require("../../assets/foods/almond.png"),
      service: 1,
      calories: 579,
    },
    {
      id: 2,
      name: "Lentils",
      icon: require("../../assets/foods/lentils.png"),
      service: 1,
      calories: 116,
    },
    {
      id: 3,
      name: "Blueberry",
      icon: require("../../assets/foods/blueberry.png"),
      service: 1,
      calories: 57,
    },
    {
      id: 4,
      name: "Meat",
      icon: require("../../assets/foods/meat.png"),
      service: 1,
      calories: 250,
    },
    {
      id: 5,
      name: "Boiled Egg",
      icon: require("../../assets/foods/boiled-egg.png"),
      service: 1,
      calories: 155,
    },
    {
      id: 6,
      name: "Milk",
      icon: require("../../assets/foods/milk.png"),
      service: 1,
      calories: 42,
    },
    {
      id: 7,
      name: "Cake",
      icon: require("../../assets/foods/cake.png"),
      service: 1,
      calories: 257,
    },
    {
      id: 8,
      name: "Minced Meat",
      icon: require("../../assets/foods/minced-meat.png"),
      service: 1,
      calories: 250,
    },
    {
      id: 9,
      name: "Cheese",
      icon: require("../../assets/foods/cheese.png"),
      service: 1,
      calories: 402,
    },
    {
      id: 10,
      name: "Pancakes",
      icon: require("../../assets/foods/pancakes.png"),
      service: 1,
      calories: 227,
    },
    {
      id: 11,
      name: "Chicken Breast",
      icon: require("../../assets/foods/chicken-breast.png"),
      service: 1,
      calories: 165,
    },
    {
      id: 12,
      name: "Peanut",
      icon: require("../../assets/foods/peanut.png"),
      service: 1,
      calories: 567,
    },
    {
      id: 13,
      name: "Chicken Leg",
      icon: require("../../assets/foods/chicken-leg.png"),
      service: 1,
      calories: 215,
    },
    {
      id: 14,
      name: "Pide",
      icon: require("../../assets/foods/pide.png"),
      service: 1,
      calories: 274,
    },
    {
      id: 15,
      name: "Chocolate",
      icon: require("../../assets/foods/chocolate.png"),
      service: 1,
      calories: 546,
    },
    {
      id: 16,
      name: "Pineapple",
      icon: require("../../assets/foods/pineapple.png"),
      service: 1,
      calories: 50,
    },
    {
      id: 17,
      name: "Coffee",
      icon: require("../../assets/foods/coffee.png"),
      service: 1,
      calories: 2,
    },
    {
      id: 18,
      name: "Pizza",
      icon: require("../../assets/foods/pizza.png"),
      service: 1,
      calories: 266,
    },
    {
      id: 19,
      name: "Croissant",
      icon: require("../../assets/foods/croissant.png"),
      service: 1,
      calories: 406,
    },
    {
      id: 20,
      name: "Potato Chips",
      icon: require("../../assets/foods/potato-chips.png"),
      service: 1,
      calories: 536,
    },
    {
      id: 21,
      name: "French Fries",
      icon: require("../../assets/foods/french-fries.png"),
      service: 1,
      calories: 312,
    },
    {
      id: 22,
      name: "Rice",
      icon: require("../../assets/foods/rice.png"),
      service: 1,
      calories: 130,
    },
    {
      id: 23,
      name: "Fried Egg",
      icon: require("../../assets/foods/fried-egg.png"),
      service: 1,
      calories: 196,
    },
    {
      id: 24,
      name: "Salad",
      icon: require("../../assets/foods/salad.png"),
      service: 1,
      calories: 33,
    },
    {
      id: 25,
      name: "Granola",
      icon: require("../../assets/foods/granola.png"),
      service: 1,
      calories: 489,
    },
    {
      id: 26,
      name: "Smoked Turkey",
      icon: require("../../assets/foods/smoked-turkey.png"),
      service: 1,
      calories: 150,
    },
    {
      id: 27,
      name: "Hamburger",
      icon: require("../../assets/foods/hamburger.png"),
      service: 1,
      calories: 295,
    },
    {
      id: 28,
      name: "Spaghetti",
      icon: require("../../assets/foods/spaguetti.png"),
      service: 1,
      calories: 158,
    },
    {
      id: 29,
      name: "Honey",
      icon: require("../../assets/foods/honey.png"),
      service: 1,
      calories: 304,
    },
    {
      id: 30,
      name: "Spinach",
      icon: require("../../assets/foods/spinach.png"),
      service: 1,
      calories: 23,
    },
    {
      id: 31,
      name: "Hot Dog",
      icon: require("../../assets/foods/hot-dog.png"),
      service: 1,
      calories: 290,
    },
    {
      id: 32,
      name: "Strawberry",
      icon: require("../../assets/foods/strawberry.png"),
      service: 1,
      calories: 32,
    },
    {
      id: 33,
      name: "Kebab",
      icon: require("../../assets/foods/kebab.png"),
      service: 1,
      calories: 250,
    },
    {
      id: 34,
      name: "Tea",
      icon: require("../../assets/foods/tea.png"),
      service: 1,
      calories: 1,
    },
  ];
  const [foodData, setFoodData] = useState(foodDataInitial);
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
        <ScrollView style={styles.foodList}>
          {foodData.map(renderFoodItem)}
        </ScrollView>
      </View>
      <FoodAddOverlay
        isVisible={isNewFoodOverlayVisible}
        toggleOverlay={() => setIsNewFoodOverlayVisible(false)}
        onAddFood={(newFoodItem) => {
          setFoodData([
            ...foodData,
            { ...newFoodItem, id: foodData.length + 1 },
          ]);
          setIsNewFoodOverlayVisible(false);
        }}
      />
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayContent: {
    padding: 20,
    alignItems: "center",
    maxHeight: 400,
    width: "90%", // Set overlay width to 90% of the screen width
  },
  overlayTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  foodList: {
    width: "100%",
    maxHeight: "100%", // Ensure the food list does not take too much height
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
    marginVertical: 20,
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
  },
});

export default FoodListOverlay;
