import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { Overlay, Icon } from "react-native-elements";

const FoodAddOverlay = ({ isVisible, toggleOverlay, onAddFood }) => {
  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodIcon, setNewFoodIcon] = useState("");
  const [newFoodCalories, setNewFoodCalories] = useState("");
  const [newFoodService, setNewFoodService] = useState("");

  const handleAddFood = () => {
    if (
      newFoodName &&
      newFoodIcon &&
      newFoodCalories &&
      newFoodService &&
      !isNaN(newFoodCalories)
    ) {
      const newFoodItem = {
        name: newFoodName,
        icon: newFoodIcon,
        calories: parseInt(newFoodCalories),
        service: parseInt(newFoodService),
      };

      onAddFood(newFoodItem);
      setNewFoodName("");
      setNewFoodIcon("");
      setNewFoodCalories("");
      setNewFoodService("");
    } else {
      Alert.alert(
        "Error",
        "Please fill out all fields and enter a numerical value for Calories."
      );
    }
  };

  return (
    <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay}>
      <View style={styles.overlayContent}>
        <Text style={styles.overlayTitle}>Add New Food</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={newFoodName}
          onChangeText={(text) => setNewFoodName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Icon"
          value={newFoodIcon}
          onChangeText={(text) => setNewFoodIcon(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Calories"
          value={newFoodCalories}
          onChangeText={(text) => setNewFoodCalories(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Service"
          value={newFoodService}
          onChangeText={(text) => setNewFoodService(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleAddFood}>
          <Text style={styles.addButton}>Add Food</Text>
        </TouchableOpacity>
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
  input: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
  },
});

export default FoodAddOverlay;
