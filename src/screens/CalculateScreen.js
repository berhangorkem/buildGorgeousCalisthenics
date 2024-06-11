import React, { useContext, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import TopBar from "../components/TopBar";
import ProgressBar from "../components/ProgressBar";
import MealCard from "../components/MealCard";
import { UserContext } from "../context/UserContext";

const CalculateScreen = () => {
  const {
    userBMR,
    setTotalProteins,
    setTotalFats,
    setTotalCarbs,
    totalProteins,
    totalFats,
    totalCarbs,
  } = useContext(UserContext);

  const [breakfastValue, setBreakfastValue] = useState(0);
  const [lunchValue, setLunchValue] = useState(0);
  const [dinnerValue, setDinnerValue] = useState(0);
  const [snacksValue, setSnacksValue] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleFoodSelect = (
    meal,
    newTotalCalories,
    newTotalProteins,
    newTotalFats,
    newTotalCarbs
  ) => {
    if (meal === "breakfast") {
      setBreakfastValue(newTotalCalories);
    } else if (meal === "lunch") {
      setLunchValue(newTotalCalories);
    } else if (meal === "dinner") {
      setDinnerValue(newTotalCalories);
    } else if (meal === "snacks") {
      setSnacksValue(newTotalCalories);
    }

    const updatedTotalCalories =
      breakfastValue +
      lunchValue +
      dinnerValue +
      snacksValue +
      newTotalCalories;
    setTotalCalories(updatedTotalCalories);

    setTotalProteins(totalProteins + newTotalProteins);
    setTotalFats(totalFats + newTotalFats);
    setTotalCarbs(totalCarbs + newTotalCarbs);
  };

  const handleFoodRemove = (
    meal,
    removedCalories,
    removedProteins,
    removedFats,
    removedCarbs
  ) => {
    if (meal === "breakfast") {
      setBreakfastValue((prev) => prev - removedCalories);
    } else if (meal === "lunch") {
      setLunchValue((prev) => prev - removedCalories);
    } else if (meal === "dinner") {
      setDinnerValue((prev) => prev - removedCalories);
    } else if (meal === "snacks") {
      setSnacksValue((prev) => prev - removedCalories);
    }

    const updatedTotalCalories =
      breakfastValue + lunchValue + dinnerValue + snacksValue - removedCalories;
    setTotalCalories(updatedTotalCalories);

    setTotalProteins((prev) => prev - removedProteins);
    setTotalFats((prev) => prev - removedFats);
    setTotalCarbs((prev) => prev - removedCarbs);
  };

  return (
    <ScrollView>
      <View style={{ marginBottom: 10 }}>
        <TopBar text="Meal Calorie Calculation" />
        <ProgressBar
          value={breakfastValue + lunchValue + dinnerValue + snacksValue}
          limit={userBMR}
        />
        <MealCard
          title="Breakfast"
          onFoodSelect={(
            newTotalCalories,
            newTotalProteins,
            newTotalFats,
            newTotalCarbs
          ) =>
            handleFoodSelect(
              "breakfast",
              newTotalCalories,
              newTotalProteins,
              newTotalFats,
              newTotalCarbs
            )
          }
          onFoodRemove={(
            removedCalories,
            removedProteins,
            removedFats,
            removedCarbs
          ) =>
            handleFoodRemove(
              "breakfast",
              removedCalories,
              removedProteins,
              removedFats,
              removedCarbs
            )
          }
          updateTotalCalories={setBreakfastValue}
        />
        <MealCard
          title="Lunch"
          onFoodSelect={(
            newTotalCalories,
            newTotalProteins,
            newTotalFats,
            newTotalCarbs
          ) =>
            handleFoodSelect(
              "lunch",
              newTotalCalories,
              newTotalProteins,
              newTotalFats,
              newTotalCarbs
            )
          }
          onFoodRemove={(
            removedCalories,
            removedProteins,
            removedFats,
            removedCarbs
          ) =>
            handleFoodRemove(
              "lunch",
              removedCalories,
              removedProteins,
              removedFats,
              removedCarbs
            )
          }
          updateTotalCalories={setLunchValue}
        />
        <MealCard
          title="Dinner"
          onFoodSelect={(
            newTotalCalories,
            newTotalProteins,
            newTotalFats,
            newTotalCarbs
          ) =>
            handleFoodSelect(
              "dinner",
              newTotalCalories,
              newTotalProteins,
              newTotalFats,
              newTotalCarbs
            )
          }
          onFoodRemove={(
            removedCalories,
            removedProteins,
            removedFats,
            removedCarbs
          ) =>
            handleFoodRemove(
              "dinner",
              removedCalories,
              removedProteins,
              removedFats,
              removedCarbs
            )
          }
          updateTotalCalories={setDinnerValue}
        />
        <MealCard
          title="Snacks"
          onFoodSelect={(
            newTotalCalories,
            newTotalProteins,
            newTotalFats,
            newTotalCarbs
          ) =>
            handleFoodSelect(
              "snacks",
              newTotalCalories,
              newTotalProteins,
              newTotalFats,
              newTotalCarbs
            )
          }
          onFoodRemove={(
            removedCalories,
            removedProteins,
            removedFats,
            removedCarbs
          ) =>
            handleFoodRemove(
              "snacks",
              removedCalories,
              removedProteins,
              removedFats,
              removedCarbs
            )
          }
          updateTotalCalories={setSnacksValue}
        />
      </View>
    </ScrollView>
  );
};

export default CalculateScreen;
