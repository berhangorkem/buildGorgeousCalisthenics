import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "react-native-elements";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import MealCard from "../components/MealCard";

const CalculateScreen = () => {

  const handleFoodSelect = (selectedFood) => {
    console.log("Selected food in MealCard:", selectedFood);
  };

  const value = 2100;
  const limit = 2400;

  return (
    <ScrollView>
      <View>
        <TopBar text="Calories Calculate Page" />
        <ProgressBar value={value} limit={limit} />
        <MealCard title="Breakfast" onFoodSelect={handleFoodSelect} />
        {/* <MealCard title="Lunch" />
        <MealCard title="Dinner" />
        <MealCard title="Snacks" /> */}
      </View>
    </ScrollView>
  );
};

CalculateScreen.navigationOptions = {
  headerShown: null,
  tabBarIcon: (
    { focused } // Dynamic icon color based on state
  ) => (
    <Icon
      name="silverware-fork-knife"
      type="material-community"
      color={focused ? "orange" : "black"}
    />
  ),
};

const styles = StyleSheet.create({});

export default CalculateScreen;
