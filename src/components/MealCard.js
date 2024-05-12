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
    // State güncellemeleri asenkron olduğu için güncel selectedFoods değerini kullanın
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
      updatedSelectedFoods.push({ ...selectedFoodItem, calories: initialCalories });
    }
    // setState fonksiyonunu kullanarak state güncellemelerini yapın
    setSelectedFoods(updatedSelectedFoods);
  
    // State güncellemelerinin tamamlanmasını bekleyin ve ardından işlemleri gerçekleştirin
    setTimeout(() => {
      const newTotalCalories = updatedSelectedFoods.reduce(
        (total, food) => total + food.calories,
        0
      );
      setTotalCalories(newTotalCalories);
      setVisible(false);
      const result = onFoodSelect && onFoodSelect(newTotalCalories);
      // result değerini kullanabilirsiniz, eğer gerekliyse
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
      // If there are more than 1 service, reduce the service count by 1
      updatedSelectedFoods[foodIndex].service -= 1;
      // Reduce calories by the amount equivalent to 1 service
      updatedSelectedFoods[foodIndex].calories -= food.calories;
    } else {
      // If there is only 1 service, remove the food item from the list
      updatedSelectedFoods.splice(foodIndex, 1);
    }

    setSelectedFoods(updatedSelectedFoods);

    // Calculate total calories
    const newTotalCalories = updatedSelectedFoods.reduce(
      (total, f) => total + f.calories,
      0
    );
    setTotalCalories(newTotalCalories);

    if (onFoodSelect) {
      onFoodSelect(newTotalCalories);
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
