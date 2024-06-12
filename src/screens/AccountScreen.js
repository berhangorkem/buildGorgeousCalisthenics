import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Text, Card } from "react-native-elements";
import TopBar from "../components/TopBar";
import { BarChart, PieChart } from "react-native-chart-kit";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const AccountScreen = () => {
  const { saveUserBMR, totalProteins, totalFats, totalCarbs } =
    useContext(UserContext);

  const [userInfo, setUserInfo] = useState({});
  const [dailyCalories, setDailyCalories] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await AsyncStorage.getItem("userId");
        setUserId(id);
      } catch (error) {
        console.error("Error fetching user ID:", error);
      }
    };
    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `https://xl10mjw5-3000.euw.devtunnels.ms/api/v1/users/${userId}`
          );
          if (response.data && response.data.data) {
            setUserInfo(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };
    fetchUserInfo();
  }, [userId]);

  useEffect(() => {
    const fetchDailyCalories = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `https://xl10mjw5-3000.euw.devtunnels.ms/api/v1/users/daily/${userId}`
          );
          if (response.data && response.data.data) {
            setDailyCalories(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching daily calories:", error);
        }
      }
    };
    fetchDailyCalories();
  }, [userId]);

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
    labels: dailyCalories.map((item) => item.label),
    datasets: [
      {
        data: dailyCalories.map((item) => item.value),
      },
    ],
  };

  const calculateBMR = (weight, height, age, gender, activityLevel) => {
    let BMR;
    if (gender === "Male") {
      BMR = 66.5 + 13.75 * weight + 5 * height - 6.77 * age;
    } else if (gender === "Female") {
      BMR = 655.1 + 9.56 * weight + 1.85 * height - 4.67 * age;
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
  const maxValue =
    dailyCalories.length > 0
      ? Math.max(...dailyCalories.map((item) => item.value))
      : 0;
  const userWeight = userInfo.weight || 0;
  const userHeight = userInfo.height || 0;
  const userAge = userInfo.age || 0;
  const userGender = userInfo.gender || "Male";
  const userActivityLevel = userInfo.activityLevel || "Stable";
  const userBMR = calculateBMR(
    userWeight,
    userHeight,
    userAge,
    userGender,
    userActivityLevel
  );

  useEffect(() => {
    saveUserBMR(userBMR);
  }, [userBMR]);

  const orangeLinePosition =
    maxValue > 0 ? chartHeight * (1 - userBMR / maxValue) : chartHeight;

  const totalMacros = totalProteins + totalFats + totalCarbs;

  const pieChartData = [
    {
      name: "Carbs",
      population: totalCarbs,
      color: "#00CED1",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Fats",
      population: totalFats,
      color: "#FF6347",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Proteins",
      population: totalProteins,
      color: "#FFA07A",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  const pieChartDataGray = pieChartData.map((item) => ({
    ...item,
    color: "#D3D3D3",
  }));

  return (
    <ScrollView>
      <View>
        <TopBar text="Account Information" />
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.infoBoxTitle}>
            Personal Information
          </Card.Title>
          <Card.Divider />
          {userInfo && (
            <>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Username: </Text>
                <Text>{userInfo.username}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>E-Mail: </Text>
                <Text>{userInfo.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Phone Number: </Text>
                <Text>{userInfo.phoneNumber}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Age: </Text>
                <Text>{userInfo.age}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Height: </Text>
                <Text>{userInfo.height}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Weight: </Text>
                <Text>{userInfo.weight}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Gender: </Text>
                <Text>{userInfo.gender}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Activity Level: </Text>
                <Text>{userInfo.activityLevel}</Text>
              </View>
            </>
          )}
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.infoBoxTitle}>Daily Calories</Card.Title>
          <Card.Divider />
          <View style={{ position: "relative", height: chartHeight }}>
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
            <Text
              style={[
                styles.lineLabel,
                { top: orangeLinePosition + 5, right: 5 },
              ]}
            >
              {userBMR.toFixed(0)}
            </Text>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.infoBoxTitle}>Daily Macros</Card.Title>
          <Card.Divider />
          <View style={styles.pieChartContainer}>
            <PieChart
              data={totalMacros === 0 ? pieChartDataGray : pieChartData}
              width={screenWidth - 64}
              height={230}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[10, 0]}
              absolute
            />
            {totalMacros === 0 && <View style={styles.grayCircleOverlay} />}
          </View>
          {totalMacros !== 0 && (
            <View style={styles.legendContainer}>
              {pieChartData.map((item, index) => (
                <View key={index} style={styles.legendItem}>
                  <View
                    style={[
                      styles.legendColor,
                      { backgroundColor: item.color },
                    ]}
                  />
                  <Text style={styles.legendLabel}>
                    {item.name} (
                    {((item.population * 100) / totalMacros).toFixed(2)}%)
                  </Text>
                </View>
              ))}
            </View>
          )}
        </Card>
      </View>
    </ScrollView>
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
    marginBottom: 10,
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
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "orange",
  },
  lineLabel: {
    position: "absolute",
    left: 5,
    fontSize: 10,
    color: "orange",
    textAlign: "right",
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legendColor: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  legendLabel: {
    fontSize: 11,
  },
  pieChartContainer: {
    position: "relative",
  },
  grayCircleOverlay: {
    position: "absolute", 
    top: 25,
    left: 20,
    right: 0,
    bottom: 0,
    width: 180, 
    height: 180,
    borderRadius: 100,
    backgroundColor: "#D3D3D3",
    alignSelf: "center", 
  },
});

export default AccountScreen;
