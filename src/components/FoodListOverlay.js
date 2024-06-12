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
import FoodAddOverlay from "./FoodAddOverlay"; 

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
      fats: 50,
      proteins: 21,
      carbs: 22,
    },
    {
      id: 2,
      name: "Lentils",
      icon: require("../../assets/foods/lentils.png"),
      service: 1,
      calories: 116,
      fats: 0.4,
      proteins: 9,
      carbs: 20,
    },
    {
      id: 3,
      name: "Blueberry",
      icon: require("../../assets/foods/blueberry.png"),
      service: 1,
      calories: 57,
      fats: 0.3,
      proteins: 0.7,
      carbs: 14,
    },
    {
      id: 4,
      name: "Meat",
      icon: require("../../assets/foods/meat.png"),
      service: 1,
      calories: 250,
      fats: 20,
      proteins: 26,
      carbs: 0,
    },
    {
      id: 5,
      name: "Boiled Egg",
      icon: require("../../assets/foods/boiled-egg.png"),
      service: 1,
      calories: 155,
      fats: 11,
      proteins: 13,
      carbs: 1.1,
    },
    {
      id: 6,
      name: "Milk",
      icon: require("../../assets/foods/milk.png"),
      service: 1,
      calories: 42,
      fats: 1,
      proteins: 3.4,
      carbs: 5,
    },
    {
      id: 7,
      name: "Cake",
      icon: require("../../assets/foods/cake.png"),
      service: 1,
      calories: 257,
      fats: 10,
      proteins: 3,
      carbs: 38,
    },
    {
      id: 8,
      name: "Minced Meat",
      icon: require("../../assets/foods/minced-meat.png"),
      service: 1,
      calories: 250,
      fats: 20,
      proteins: 26,
      carbs: 0,
    },
    {
      id: 9,
      name: "Cheese",
      icon: require("../../assets/foods/cheese.png"),
      service: 1,
      calories: 402,
      fats: 33,
      proteins: 25,
      carbs: 1.3,
    },
    {
      id: 10,
      name: "Pancakes",
      icon: require("../../assets/foods/pancakes.png"),
      service: 1,
      calories: 227,
      fats: 10,
      proteins: 6,
      carbs: 28,
    },
    {
      id: 11,
      name: "Chicken Breast",
      icon: require("../../assets/foods/chicken-breast.png"),
      service: 1,
      calories: 165,
      fats: 3.6,
      proteins: 31,
      carbs: 0,
    },
    {
      id: 12,
      name: "Peanut",
      icon: require("../../assets/foods/peanut.png"),
      service: 1,
      calories: 567,
      fats: 49,
      proteins: 26,
      carbs: 16,
    },
    {
      id: 13,
      name: "Chicken Leg",
      icon: require("../../assets/foods/chicken-leg.png"),
      service: 1,
      calories: 215,
      fats: 13.6,
      proteins: 18,
      carbs: 0,
    },
    {
      id: 14,
      name: "Pide",
      icon: require("../../assets/foods/pide.png"),
      service: 1,
      calories: 274,
      fats: 10,
      proteins: 9,
      carbs: 38,
    },
    {
      id: 15,
      name: "Chocolate",
      icon: require("../../assets/foods/chocolate.png"),
      service: 1,
      calories: 546,
      fats: 31,
      proteins: 4.9,
      carbs: 61,
    },
    {
      id: 16,
      name: "Pineapple",
      icon: require("../../assets/foods/pineapple.png"),
      service: 1,
      calories: 50,
      fats: 0.1,
      proteins: 0.5,
      carbs: 13,
    },
    {
      id: 17,
      name: "Coffee",
      icon: require("../../assets/foods/coffee.png"),
      service: 1,
      calories: 2,
      fats: 0,
      proteins: 0.3,
      carbs: 0,
    },
    {
      id: 18,
      name: "Pizza",
      icon: require("../../assets/foods/pizza.png"),
      service: 1,
      calories: 266,
      fats: 10,
      proteins: 11,
      carbs: 33,
    },
    {
      id: 19,
      name: "Croissant",
      icon: require("../../assets/foods/croissant.png"),
      service: 1,
      calories: 406,
      fats: 21,
      proteins: 8,
      carbs: 45,
    },
    {
      id: 20,
      name: "Potato Chips",
      icon: require("../../assets/foods/potato-chips.png"),
      service: 1,
      calories: 536,
      fats: 34,
      proteins: 7,
      carbs: 50,
    },
    {
      id: 21,
      name: "French Fries",
      icon: require("../../assets/foods/french-fries.png"),
      service: 1,
      calories: 312,
      fats: 15,
      proteins: 3.4,
      carbs: 41,
    },
    {
      id: 22,
      name: "Rice",
      icon: require("../../assets/foods/rice.png"),
      service: 1,
      calories: 130,
      fats: 0.3,
      proteins: 2.7,
      carbs: 28,
    },
    {
      id: 23,
      name: "Fried Egg",
      icon: require("../../assets/foods/fried-egg.png"),
      service: 1,
      calories: 196,
      fats: 14,
      proteins: 13,
      carbs: 1,
    },
    {
      id: 24,
      name: "Salad",
      icon: require("../../assets/foods/salad.png"),
      service: 1,
      calories: 33,
      fats: 0.2,
      proteins: 2,
      carbs: 6,
    },
    {
      id: 25,
      name: "Granola",
      icon: require("../../assets/foods/granola.png"),
      service: 1,
      calories: 489,
      fats: 23,
      proteins: 14,
      carbs: 65,
    },
    {
      id: 26,
      name: "Smoked Turkey",
      icon: require("../../assets/foods/smoked-turkey.png"),
      service: 1,
      calories: 150,
      fats: 5,
      proteins: 22,
      carbs: 2,
    },
    {
      id: 27,
      name: "Hamburger",
      icon: require("../../assets/foods/hamburger.png"),
      service: 1,
      calories: 295,
      fats: 12,
      proteins: 17,
      carbs: 33,
    },
    {
      id: 28,
      name: "Spaghetti",
      icon: require("../../assets/foods/spaguetti.png"),
      service: 1,
      calories: 158,
      fats: 1,
      proteins: 6,
      carbs: 31,
    },
    {
      id: 29,
      name: "Honey",
      icon: require("../../assets/foods/honey.png"),
      service: 1,
      calories: 304,
      fats: 0,
      proteins: 0.3,
      carbs: 82,
    },
    {
      id: 30,
      name: "Spinach",
      icon: require("../../assets/foods/spinach.png"),
      service: 1,
      calories: 23,
      fats: 0.4,
      proteins: 2.9,
      carbs: 3.6,
    },
    {
      id: 31,
      name: "Hot Dog",
      icon: require("../../assets/foods/hot-dog.png"),
      service: 1,
      calories: 290,
      fats: 25,
      proteins: 10,
      carbs: 2,
    },
    {
      id: 32,
      name: "Strawberry",
      icon: require("../../assets/foods/strawberry.png"),
      service: 1,
      calories: 32,
      fats: 0.3,
      proteins: 0.7,
      carbs: 7.7,
    },
    {
      id: 33,
      name: "Kebab",
      icon: require("../../assets/foods/kebab.png"),
      service: 1,
      calories: 250,
      fats: 15,
      proteins: 17,
      carbs: 10,
    },
    {
      id: 34,
      name: "Tea",
      icon: require("../../assets/foods/tea.png"),
      service: 1,
      calories: 1,
      fats: 0,
      proteins: 0,
      carbs: 0,
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
    width: "90%", 
  },
  overlayTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  foodList: {
    width: "100%",
    maxHeight: "100%",
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
