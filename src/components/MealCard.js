import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Card, Icon, Text, Button } from "react-native-elements";
import FoodCard from "./FoodCard"; // Replace with your FoodCard component path
import FoodListOverlay from "./FoodListOverlay"; // Replace with your FoodListOverlay component path

const MealCard = ({ title, onFoodSelect }) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foodToRemove, setFoodToRemove] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0); 

  const toggleOverlay = () => {
    setVisible(!isVisible);
  };

  const handleFoodSelection = (selectedFoodItem) => {
    setSelectedFoods([...selectedFoods, selectedFoodItem]);
    const newTotalCalories = totalCalories + selectedFoodItem.calories;
    setTotalCalories(newTotalCalories);
    setVisible(false); 
    onFoodSelect && onFoodSelect(selectedFoods);
    if (onFoodSelect) {
      onFoodSelect(newTotalCalories);
    }
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
    setSelectedFoods(selectedFoods.filter((f) => f !== food));
    const newTotalCalories = totalCalories - food.calories;
    setTotalCalories(newTotalCalories);
    setFoodToRemove(null);
    if (onFoodSelect) {
      onFoodSelect(newTotalCalories); 
    }
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
            />
          </TouchableOpacity>
        </View>
      ))}
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Toplam Kalori: {totalCalories}
      </Text>
      <Button
        buttonStyle={{ backgroundColor: "#0000FF", padding: 15 }}
        title="Gıda Ekle"
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
