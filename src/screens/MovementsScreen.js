import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";

// Sample data for movements with descriptions
const movementsData = [
  {
    id: 1,
    targetedArea: "Chest",
    title: "Movement Name",
    icon: require("../../assets/movements/göğüs-1.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 2,
    targetedArea: "Chest",
    title: "Movement Name",
    icon: require("../../assets/movements/göğüs-2.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 3,
    targetedArea: "Back",
    title: "Movement Name",
    icon: require("../../assets/movements/sırt-1.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 4,
    targetedArea: "Back",
    title: "Movement Name",
    icon: require("../../assets/movements/sırt-2.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 5,
    targetedArea: "Shoulder",
    title: "Movement Name",
    icon: require("../../assets/movements/omuz-1.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 6,
    targetedArea: "Shoulder",
    title: "Movement Name",
    icon: require("../../assets/movements/omuz-2.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 7,
    targetedArea: "Leg",
    title: "Movement Name",
    icon: require("../../assets/movements/leg-1.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 8,
    targetedArea: "Leg",
    title: "Movement Name",
    icon: require("../../assets/movements/leg-2.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 9,
    targetedArea: "Arm",
    title: "Movement Name",
    icon: require("../../assets/movements/kol-1.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 10,
    targetedArea: "Arm",
    title: "Movement Name",
    icon: require("../../assets/movements/kol-2.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 11,
    targetedArea: "Cardio",
    title: "Movement Name",
    icon: require("../../assets/movements/cardio-1.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
  {
    id: 12,
    targetedArea: "Cardio",
    title: "Movement Name",
    icon: require("../../assets/movements/cardio-2.png"),
    description: "King of chest exercises! It works your chest (pectoralis major) but also strengthens your triceps and shoulders. This key move builds upper body strength and muscle mass.",
  },
];

const MovementsScreen = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const toggleDescription = (id) => {
    setVisibleDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <TouchableOpacity onPress={() => toggleDescription(item.id)}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTargetedArea}>{item.targetedArea}</Text>
          <View style={styles.cardTitleUnderline} />
          <View style={styles.cardImageContainer}>
            <Image source={item.icon} style={styles.cardImage} />
          </View>
          {visibleDescriptions[item.id] && (
            <Card containerStyle={styles.expandedCard}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </Card>
          )}
        </View>
      </TouchableOpacity>
    </Card>
  );

  return (
    <FlatList
      data={movementsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingBottom: 30, // Space at the bottom of the screen
  },
  card: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#ffffff",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardImageContainer: {
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  cardTargetedArea: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTitleUnderline: {
    width: '90%',
    height: 1,
    backgroundColor: '#ddd',
    marginTop: 5,
    marginBottom: 5,
  },
  expandedCard: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    shadowColor: 'transparent', // Disable shadow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    marginBottom: 10, // Margin at the bottom of each card
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardDescription: {
    marginTop: 5,
    fontSize: 13,
    textAlign: "center",
  },
});

export default MovementsScreen;
