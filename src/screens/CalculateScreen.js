import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import MealCard from "../components/MealCard";

const CalculateScreen = () => {
  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);
  const [snacksValue, setSnacksValue] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const limit = 2400;

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
