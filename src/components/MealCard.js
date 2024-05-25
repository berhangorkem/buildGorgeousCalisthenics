import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon, Text, Button } from "react-native-elements";
import FoodCard from "./FoodCard"; // Replace with your FoodCard component path
import FoodListOverlay from "./FoodListOverlay"; // Replace with your FoodListOverlay component path

const MealCard = ({ title, onFoodSelect, updateTotalCalories }) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foodToRemove, setFoodToRemove] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);

  const toggleOverlay = () => {
    setVisible(!isVisible);
  };

  const handleFoodSelection = (selectedFoodItem) => {
    const updatedSelectedFoods = [...selectedFoods];
    const existingFoodIndex = updatedSelectedFoods.findIndex(
      (food) => food.id === selectedFoodItem.id
    );

    if (existingFoodIndex !== -1) {
      updatedSelectedFoods[existingFoodIndex].service +=
        selectedFoodItem.service;
      updatedSelectedFoods[existingFoodIndex].calories +=
        selectedFoodItem.calories * selectedFoodItem.service;
    } else {
      const initialCalories =
        selectedFoodItem.calories * (selectedFoodItem.service || 1);
      updatedSelectedFoods.push({
        ...selectedFoodItem,
        calories: initialCalories,
      });
    }
    setSelectedFoods(updatedSelectedFoods);

    setTimeout(() => {
      const newTotalCalories = updatedSelectedFoods.reduce(
        (total, food) => total + food.calories,
        0
      );
      setTotalCalories(newTotalCalories);
      setVisible(false);
      const result = onFoodSelect && onFoodSelect(newTotalCalories);
      if (updateTotalCalories) {
        updateTotalCalories(newTotalCalories); // Yeni fonksiyonu çağır
      }
    }, 0);
  };

  const handleRemoveFood = (food) => {
    setFoodToRemove(food);
    Alert.alert(
      "Seçilen Yemeği Sil",
      "Bu yemeği silmek istediğinize emin misiniz?",
      [
        { text: "Evet", onPress: () => removeConfirmedFood(food) },
        { text: "Hayır", onPress: () => setFoodToRemove(null) },
      ]
    );
  };

  const removeConfirmedFood = (food) => {
    const updatedSelectedFoods = [...selectedFoods];
    const foodIndex = updatedSelectedFoods.findIndex((f) => f === food);

    if (foodIndex !== -1) {
      if (updatedSelectedFoods[foodIndex].service > 1) {
        const caloriesPerService = food.calories / updatedSelectedFoods[foodIndex].service;

        updatedSelectedFoods[foodIndex].service -= 1;
        updatedSelectedFoods[foodIndex].calories -= caloriesPerService;
      } else {
        updatedSelectedFoods.splice(foodIndex, 1);
      }

      setSelectedFoods(updatedSelectedFoods);

      const newTotalCalories = updatedSelectedFoods.reduce((total, f) => total + f.calories, 0);
      setTotalCalories(newTotalCalories);

      if (onFoodSelect) {
        onFoodSelect(newTotalCalories);
      }

      if (updateTotalCalories) {
        updateTotalCalories(newTotalCalories);
      }
    }

    setFoodToRemove(null);
  };
  

  return (
    <Card
      containerStyle={{
        backgroundColor: "#D9D9D9",
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 20,
      }}
    >
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      {selectedFoods.map((food, index) => (
        <View key={food.id}>
          <TouchableOpacity onLongPress={() => handleRemoveFood(food)}>
            <FoodCard
              name={food.name}
              icon={food.icon}
              calories={food.calories}
              service={food.service}
            />
          </TouchableOpacity>
        </View>
      ))}
      <Text style={{ fontSize: 14, fontWeight: "bold",marginVertical:10 }}>
        Total Calories: {totalCalories}
      </Text>
      <Button
        buttonStyle={{ backgroundColor: "#0000FF", padding: 15,borderRadius:20,marginLeft:"auto" }}
        title="Add Food"
        onPress={toggleOverlay}
      />
      {isVisible && (
        <FoodListOverlay
          isVisible={isVisible}
          toggleOverlay={toggleOverlay}
          onFoodSelect={handleFoodSelection}
        />
      )}
    </Card>
  );
};

export default MealCard;
