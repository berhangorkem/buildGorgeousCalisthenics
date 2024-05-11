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
import FoodCard from "../components/FoodCard";
import Spacer from "../components/Spacer";

const CalculateScreen = () => {
  const value = 2100;
  const limit = 2400;

  return (
    <ScrollView>
      <View>
        <TopBar text="Calories Calculate Page" />
        <ProgressBar value={value} limit={limit} />
        <FoodCard title="Breakfast" />
        <FoodCard title="Lunch" />
        {/* <FoodCard title="Dinner" />
        <FoodCard title="Snacks" /> */}
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
