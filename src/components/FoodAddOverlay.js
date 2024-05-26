import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Overlay, Input } from "react-native-elements";

const FoodAddOverlay = ({ isVisible, toggleOverlay, onAddFood }) => {

  const [newFoodName, setNewFoodName] = useState("");
  const [newFoodCalories, setNewFoodCalories] = useState("");
  const [newFoodService, setNewFoodService] = useState("");  
  const [newFoodIcon, setNewFoodIcon] = useState("");
  // const [newFoodProtein, setNewFoodProtein] = useState("");
  // const [newFoodOil, setNewFoodOil] = useState("");
  // const [newFoodCarb, setNewFoodCarb] = useState("");

  const handleAddFood = () => {
    if (
      newFoodName &&
      newFoodCalories &&
      newFoodService &&
      // newFoodIcon &&
      // newFoodCarb &&
      // newFoodProtein &&
      // newFoodOil &&
      !isNaN(newFoodCalories)
    ) {
      const newFoodItem = {
        name: newFoodName,
        icon: "hamburger", // İkon sabit olarak ayarlanıyor
        calories: parseInt(newFoodCalories),
        service: parseInt(newFoodService),
        // icon: newFoodIcon,
        // proteins: parseInt(newFoodProtein),
        // oils: parseInt(newFoodOil),
        // carbs: parseInt(newFoodCarb),
      };

      onAddFood(newFoodItem);
      setNewFoodName("");
      setNewFoodCalories("");
      setNewFoodService("");
      setNewFoodIcon("");
      // setNewFoodProtein("");
      // setNewFoodOil("");
      // setNewFoodCarb("");

    } else {
      Alert.alert(
        "Error",
        "Please fill out all fields and enter a numerical value for Calories."
      );
    }
  };

  {
    /* <TextInput
          style={styles.input}
          placeholder="Icon"
          value={newFoodIcon}
          onChangeText={(text) => setNewFoodIcon(text)}
        /> */
  }

  return (
    <Overlay isVisible={isVisible} onBackdropPress={toggleOverlay}>
      <View style={styles.overlayContent}>
        <Text style={styles.overlayTitle}>Add New Food</Text>
        <Input
          placeholder="Name"
          value={newFoodName}
          onChangeText={setNewFoodName}
          inputContainerStyle={styles.inputWithBorder} 
        />
        <Input
          placeholder="Calories"
          value={newFoodCalories}
          onChangeText={setNewFoodCalories}
          keyboardType="numeric"
          inputContainerStyle={styles.inputWithBorder} 
        />
        <Input
          placeholder="Service"
          value={newFoodService}
          onChangeText={setNewFoodService}
          keyboardType="numeric"
          inputContainerStyle={styles.inputWithBorder} 
        />
        {/* <Input
          placeholder="Icon"
          value={newFoodIcon}
          onChangeText={(text) => setNewFoodIcon(text)}
          inputContainerStyle={styles.inputWithBorder} 
        />
        <Input
          placeholder="Protein"
          value={newFoodProtein}
          onChangeText={setNewFoodProtein}
          keyboardType="numeric"
          inputContainerStyle={styles.inputWithBorder} 
        />
        <Input
          placeholder="Carb"
          value={newFoodCarb}
          onChangeText={setNewFoodCarb}
          keyboardType="numeric"
          inputContainerStyle={styles.inputWithBorder} 
        />
        <Input
          placeholder="Oil"
          value={newFoodOil}
          onChangeText={setNewFoodOil}
          keyboardType="numeric"
          inputContainerStyle={styles.inputWithBorder} 
        /> */}
        <TouchableOpacity onPress={handleAddFood} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Food</Text>
        </TouchableOpacity>
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayContent: {
    padding: 20,
    alignItems: "center",
  },
  overlayTitle: {
    fontSize: 20,
    fontWeight:"bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    marginVertical: 10,
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 5,
    textAlign: "center",
  },
  inputWithBorder: {  // Style for inputs with borders
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10, // Add horizontal padding
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  }
});

export default FoodAddOverlay;
