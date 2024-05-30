import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, Card } from "react-native-elements";
import TopBar from "../components/TopBar";
import { BarChart } from "react-native-chart-kit";
import { UserContext } from "../context/UserContext";

const AccountScreen = () => {
  const { saveUserBMR } = useContext(UserContext); // Destructure saveUserBMR from context

  const userInfo = [
    { label: "Username", value: "berhangorkem" },
    { label: "E-Mail", value: "berhangorkem@gmail.com" },
    { label: "Age", value: "21" },
    { label: "Size", value: "180" },
    { label: "Weight", value: "95" },
    { label: "Gender", value: "Male" },
    { label: "Activity Level", value: "Medium" },
  ];

  const dailyCalories = [
    { label: "Mon", value: 2300 },
    { label: "Tue", value: 3100 },
    { label: "Wed", value: 4400 },
    { label: "Thu", value: 2900 },
    { label: "Fri", value: 2000 },
    { label: "Sat", value: 1919 },
    { label: "Sun", value: 3453 },
  ];

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.4,
    propsForLabels: {
      fontSize: 10,
    },
    decimalPlaces: 0,
    useShadowColorFromDataset: false,
  };

  const chartData = {
    labels: dailyCalories.map(item => item.label),
    datasets: [
      {
        data: dailyCalories.map(item => item.value),
      },
    ],
  };

  const calculateBMR = (weight, height, age, gender, activityLevel) => {
    let BMR;
    if (gender === "Male") {
      BMR = 66.5 + (13.75 * weight) + (5 * height) - (6.77 * age);
    } else if (gender === "Female") {
      BMR = 655.1 + (9.56 * weight) + (1.85 * height) - (4.67 * age);
    }
    switch (activityLevel) {
      case "Stable":
        return BMR * 1.2;
      case "Light":
        return BMR * 1.3;
      case "Medium":
        return BMR * 1.4;
      case "High":
        return BMR * 1.5;
      default:
        return BMR;
    }
  };

  const screenWidth = Dimensions.get("window").width;
  const chartHeight = 220;
  const maxValue = Math.max(...dailyCalories.map(item => item.value));
  const userWeight = parseFloat(userInfo.find(item => item.label === "Weight").value);
  const userHeight = parseFloat(userInfo.find(item => item.label === "Size").value);
  const userAge = parseInt(userInfo.find(item => item.label === "Age").value);
  const userGender = userInfo.find(item => item.label === "Gender").value;
  const userActivityLevel = userInfo.find(item => item.label === "Activity Level").value;
  const userBMR = calculateBMR(userWeight, userHeight, userAge, userGender, userActivityLevel);

  useEffect(() => {
    saveUserBMR(userBMR); // Save the BMR value in context when component mounts
  }, [userBMR]);

  const orangeLinePosition = chartHeight * (1 - userBMR / maxValue);

  return (
    <View>
      <TopBar text="Account Information" />
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.infoBoxTitle}>
          Personal Information
        </Card.Title>
        <Card.Divider />
        {userInfo.map((item) => (
          <View style={styles.infoRow} key={item.label}>
            <Text style={styles.infoLabel}>{item.label}: </Text>
            <Text>{item.value}</Text>
          </View>
        ))}
      </Card>

      <Card containerStyle={styles.card}>
        <Card.Title style={styles.infoBoxTitle}>Daily Calories</Card.Title>
        <Card.Divider />
        <View style={{ position: 'relative', height: chartHeight }}>
          <BarChart
            style={styles.chart}
            data={chartData}
            width={screenWidth - 64}
            height={chartHeight}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={20}
            yLabelsOffset={40}
            fromZero={true}
          />
          <View style={[styles.orangeLine, { top: orangeLinePosition }]} />
          <Text style={[styles.lineLabel, { top: orangeLinePosition + 5, right: 5 }]}>
            {userBMR.toFixed(0)}
          </Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBoxTitle: {
    textAlign: "left",
    marginBottom: 5,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  card: {
    borderRadius: 10,
    padding: 15,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  orangeLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'orange',
  },
  lineLabel: {
    position: 'absolute',
    left: 5,
    fontSize: 10,
    color: 'orange',
    textAlign: 'right'
  },
});

export default AccountScreen;
