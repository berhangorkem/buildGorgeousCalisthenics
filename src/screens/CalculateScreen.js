import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import MealCard from "../components/MealCard";

const CalculateScreen = () => {
  const [value, setValue] = useState(0);
  const limit = 2400;
  const handleFoodSelect = (newTotalCalories) => {
    setValue(newTotalCalories);
  };

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
    { focused } 
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
