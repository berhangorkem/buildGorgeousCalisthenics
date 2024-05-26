import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import MealCard from "../components/MealCard";

const CalculateScreen = ({ route }) => {
  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);
  const [snacksValue, setSnacksValue] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  // const { BMR } = route.params || {};
  // const [limit, setLimit] = useState(BMR || 2400); // Default to 2400 if BMR is not provided
  const limit = 2983;

  const handleFoodSelect = (meal, newTotalCalories) => {
    if (meal === "breakfast") {
      setBreakfastValue((prevValue) => prevValue + newTotalCalories);
    } else if (meal === "lunch") {
      setLunchValue((prevValue) => prevValue + newTotalCalories);
    } else if (meal === "dinner") {
      setDinnerValue((prevValue) => prevValue + newTotalCalories);
    } else if (meal === "snacks") {
      setSnacksValue((prevValue) => prevValue + newTotalCalories);
    }

    const totalCalories =
      breakfastValue +
      lunchValue +
      dinnerValue +
      snacksValue +
      newTotalCalories;
    setTotalCalories(totalCalories);
  };

  // useEffect(() => {
  //   setLimit(BMR);
  // }, [BMR]);

  return (
    <ScrollView>
      <View style={{ marginBottom: 10 }}>
        <TopBar text="Meal Calorie Calculation" />
        <ProgressBar
          value={breakfastValue + lunchValue + dinnerValue + snacksValue}
          limit={limit}
        />
        <MealCard
          title="Breakfast"
          onFoodSelect={(newTotalCalories) =>
            handleFoodSelect("breakfast", newTotalCalories)
          }
          updateTotalCalories={setBreakfastValue}
        />
        <MealCard
          title="Lunch"
          onFoodSelect={(newTotalCalories) =>
            handleFoodSelect("lunch", newTotalCalories)
          }
          updateTotalCalories={setLunchValue}
        />
        <MealCard
          title="Dinner"
          onFoodSelect={(newTotalCalories) =>
            handleFoodSelect("dinner", newTotalCalories)
          }
          updateTotalCalories={setDinnerValue}
        />
        <MealCard
          title="Snacks"
          onFoodSelect={(newTotalCalories) =>
            handleFoodSelect("snacks", newTotalCalories)
          }
          updateTotalCalories={setSnacksValue}
        />
      </View>
    </ScrollView>
  );
};

export default CalculateScreen;
