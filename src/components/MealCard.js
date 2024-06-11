import React, { useState } from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import { Card, Text, Button } from "react-native-elements";
import FoodCard from "./FoodCard"; // Replace with your FoodCard component path
import FoodListOverlay from "./FoodListOverlay"; // Replace with your FoodListOverlay component path

const MealCard = ({ title, onFoodSelect, updateTotalCalories, onFoodRemove }) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foodToRemove, setFoodToRemove] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalProteins, setTotalProteins] = useState(0);
  const [totalFats, setTotalFats] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);

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
        selectedFoodItem.service || 1;
      updatedSelectedFoods[existingFoodIndex].calories +=
        selectedFoodItem.calories * (selectedFoodItem.service || 1);
      updatedSelectedFoods[existingFoodIndex].proteins +=
        (selectedFoodItem.proteins || 0) * (selectedFoodItem.service || 1);
      updatedSelectedFoods[existingFoodIndex].fats +=
        (selectedFoodItem.fats || 0) * (selectedFoodItem.service || 1);
      updatedSelectedFoods[existingFoodIndex].carbs +=
        (selectedFoodItem.carbs || 0) * (selectedFoodItem.service || 1);
    } else {
      const initialCalories =
        selectedFoodItem.calories * (selectedFoodItem.service || 1);
      const initialProteins =
        (selectedFoodItem.proteins || 0) * (selectedFoodItem.service || 1);
      const initialFats = (selectedFoodItem.fats || 0) * (selectedFoodItem.service || 1);
      const initialCarbs = (selectedFoodItem.carbs || 0) * (selectedFoodItem.service || 1);
      updatedSelectedFoods.push({
        ...selectedFoodItem,
        calories: initialCalories,
        proteins: initialProteins,
        fats: initialFats,
        carbs: initialCarbs,
      });
    }
    setSelectedFoods(updatedSelectedFoods);

    setTimeout(() => {
      const newTotalCalories = updatedSelectedFoods.reduce(
        (total, food) => total + food.calories,
        0
      );
      const newTotalProteins = updatedSelectedFoods.reduce(
        (total, food) => total + food.proteins,
        0
      );
      const newTotalFats = updatedSelectedFoods.reduce(
        (total, food) => total + food.fats,
        0
      );
      const newTotalCarbs = updatedSelectedFoods.reduce(
        (total, food) => total + food.carbs,
        0
      );
      setTotalCalories(newTotalCalories);
      setTotalProteins(newTotalProteins);
      setTotalFats(newTotalFats);
      setTotalCarbs(newTotalCarbs);
      setVisible(false);
      if (onFoodSelect) {
        onFoodSelect(newTotalCalories, newTotalProteins, newTotalFats, newTotalCarbs);
      }
      if (updateTotalCalories) {
        updateTotalCalories(newTotalCalories);
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
      const caloriesToRemove = updatedSelectedFoods[foodIndex].calories;
      const proteinsToRemove = updatedSelectedFoods[foodIndex].proteins;
      const fatsToRemove = updatedSelectedFoods[foodIndex].fats;
      const carbsToRemove = updatedSelectedFoods[foodIndex].carbs;

      if (updatedSelectedFoods[foodIndex].service > 1) {
        const caloriesPerService = food.calories / updatedSelectedFoods[foodIndex].service;
        const proteinsPerService = (food.proteins || 0) / updatedSelectedFoods[foodIndex].service;
        const fatsPerService = (food.fats || 0) / updatedSelectedFoods[foodIndex].service;
        const carbsPerService = (food.carbs || 0) / updatedSelectedFoods[foodIndex].service;

        updatedSelectedFoods[foodIndex].service -= 1;
        updatedSelectedFoods[foodIndex].calories -= caloriesPerService;
        updatedSelectedFoods[foodIndex].proteins -= proteinsPerService;
        updatedSelectedFoods[foodIndex].fats -= fatsPerService;
        updatedSelectedFoods[foodIndex].carbs -= carbsPerService;
      } else {
        updatedSelectedFoods.splice(foodIndex, 1);
      }

      setSelectedFoods(updatedSelectedFoods);

      const newTotalCalories = updatedSelectedFoods.reduce((total, f) => total + f.calories, 0);
      const newTotalProteins = updatedSelectedFoods.reduce((total, f) => total + f.proteins, 0);
      const newTotalFats = updatedSelectedFoods.reduce((total, f) => total + f.fats, 0);
      const newTotalCarbs = updatedSelectedFoods.reduce((total, f) => total + f.carbs, 0);

      setTotalCalories(newTotalCalories);
      setTotalProteins(newTotalProteins);
      setTotalFats(newTotalFats);
      setTotalCarbs(newTotalCarbs);

      if (onFoodRemove) {
        onFoodRemove(caloriesToRemove, proteinsToRemove, fatsToRemove, carbsToRemove); // Pass true for isRemoving
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
              proteins={food.proteins || 0}
              fats={food.fats || 0}
              carbs={food.carbs || 0}
              service={food.service}
            />
          </TouchableOpacity>
        </View>
      ))}
      <Text style={{ fontSize: 14, fontWeight: "bold", marginVertical: 10 }}>
        Total Calories: {totalCalories}
      </Text>
      <Button
        buttonStyle={{ backgroundColor: "#0000FF", padding: 15, borderRadius: 20, marginLeft: "auto" }}
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
