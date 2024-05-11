import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Icon, Text, Button } from "react-native-elements";
import FoodInfo from "./FoodInfo";

const FoodCard = ({ title, name, icon, calories }) => {
  const foodData = [
    { id: 1, name: "peanut", icon: "peanut", calories: 400 },
    { id: 2, name: "apple", icon: "food-apple", calories: 400 },
    { id: 3, name: "steak", icon: "food-steak", calories: 400 },
    { id: 4, name: "hamburger", icon: "hamburger", calories: 400 },
    { id: 5, name: "turkey", icon: "food-turkey", calories: 400 },
    { id: 6, name: "hot dog", icon: "food-hot-dog", calories: 400 },
    { id: 7, name: "croissant", icon: "food-croissant", calories: 400 },
    { id: 8, name: "drumstick", icon: "food-drumstick", calories: 400 },
  ];
  return (
    <Card
      containerStyle={{
        backgroundColor: "#D9D9D9",
        marginHorizontal: 30,
        borderRadius: 20,
      }}
    >
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <FoodInfo name="peanut" icon="peanut" calories="400" />
      <FoodInfo name="apple" icon="food-apple" calories="400" />
      <Button
        buttonStyle={{
          backgroundColor: "#0000FF",
        }}
        title="Gıda Ekle"
        onPress={() => alert("Gıda eklendi")}
      />
    </Card>
  );
};

const styles = StyleSheet.create({});

export default FoodCard;
