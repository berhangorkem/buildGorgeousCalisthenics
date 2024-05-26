import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";

// Workout Plans Data (Example)
const kol1Icon = require("../../assets/movements/kol-1.png");

const workoutPlans = [
  {
    category: "Chest & Triceps",
    plans: [
      {
        name: "Chest & Triceps-1",
        exercises: [
          {
            name: "Push-up",
            icon: kol1Icon,
          },
          {
            name: "Bench Press",
            icon: kol1Icon,
          },
          {
            name: "Tricep Dips",
            icon: kol1Icon,
          },
        ],
      },
      {
        name: "Chest & Triceps-2",
        exercises: [
          {
            name: "Incline Bench Press",
            icon: kol1Icon,
          },
          {
            name: "Chest Fly",
            icon: kol1Icon,
          },
          {
            name: "Tricep Extension",
            icon: kol1Icon,
          },
        ],
      },
    ],
    icons: [kol1Icon, kol1Icon],
  },
  {
    category: "Back & Biceps",
    plans: [
      {
        name: "Back & Biceps-1",
        exercises: [
          {
            name: "Pull-up",
            icon: kol1Icon,
          },
          {
            name: "Deadlift",
            icon: kol1Icon,
          },
          {
            name: "Bicep Curl",
            icon: kol1Icon,
          },
        ],
      },
      {
        name: "Back & Biceps-2",
        exercises: [
          {
            name: "Lat Pulldown",
            icon: kol1Icon,
          },
          {
            name: "Bent-over Row",
            icon: kol1Icon,
          },
          {
            name: "Hammer Curl",
            icon: kol1Icon,
          },
        ],
      },
    ],
    icons: [kol1Icon, kol1Icon],
  },
  {
    category: "Legs & Abs",
    plans: [
      {
        name: "Legs & Abs-1",
        exercises: [
          { name: "Squat", icon: kol1Icon },
          { name: "Lunge", icon: kol1Icon },
          { name: "Plank", icon: kol1Icon },
        ],
      },
      {
        name: "Legs & Abs-2",
        exercises: [
          { name: "Leg Press", icon: kol1Icon },
          { name: "Calf Raise", icon: kol1Icon },
          { name: "Russian Twist", icon: kol1Icon },
        ],
      },
    ],
    icons: [kol1Icon, kol1Icon],
  },
  {
    category: "Shoulders",
    plans: [
      {
        name: "Shoulders-1",
        exercises: [
          { name: "Shoulder Press", icon: kol1Icon },
          { name: "Lateral Raise", icon: kol1Icon },
          { name: "Front Raise", icon: kol1Icon },
        ],
      },
      {
        name: "Shoulders-2",
        exercises: [
          { name: "Arnold Press", icon: kol1Icon },
          { name: "Reverse Fly", icon: kol1Icon },
          { name: "Shrug", icon: kol1Icon },
        ],
      },
    ],
    icons: [kol1Icon, kol1Icon],
  },
  {
    category: "Full Body",
    plans: [
      {
        name: "Full Body-1",
        exercises: [
          { name: "Burpee", icon: kol1Icon },
          { name: "Mountain Climber", icon: kol1Icon },
          { name: "Jumping Jack", icon: kol1Icon },
        ],
      },
      {
        name: "Full Body-2",
        exercises: [
          { name: "Snatch", icon: kol1Icon },
          { name: "Clean and Jerk", icon: kol1Icon },
          { name: "Thruster", icon: kol1Icon },
        ],
      },
    ],
    icons: [kol1Icon, kol1Icon],
  },
  {
    category: "Cardio",
    plans: [
      {
        name: "Cardio-1",
        exercises: [
          { name: "Running", icon: kol1Icon },
          { name: "Cycling", icon: kol1Icon },
          { name: "Jump Rope", icon: kol1Icon },
        ],
      },
      {
        name: "Cardio-2",
        exercises: [
          { name: "HIIT", icon: kol1Icon },
          { name: "Rowing", icon: kol1Icon },
          { name: "Boxing", icon: kol1Icon },
        ],
      },
    ],
    icons: [kol1Icon, kol1Icon],
  },
];


const PlansScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlanPress = (plan) => {
    setSelectedPlan(plan);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedPlan(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={workoutPlans}
        keyExtractor={(item) => item.category}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <WorkoutCategory
            category={item.category}
            plans={item.plans}
            icons={item.icons}
            onPlanPress={handlePlanPress}
          />
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedPlan?.name}</Text>
            <ScrollView>
              {selectedPlan?.exercises.map((exercise, index) => (
                <View key={index} style={styles.exerciseItem}>
                  <Image source={exercise.icon} style={styles.exerciseIcon} />
                  <Text style={styles.exerciseText}>{exercise.name}</Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const WorkoutCategory = ({ category, plans, icons, onPlanPress }) => (
  <View style={styles.categoryContainer}>
    <Text style={styles.categoryTitle}>{category}</Text>
    <View style={styles.plansContainer}>
      {plans.map((plan, index) => (
        <WorkoutPlan
          key={plan.name}
          plan={plan}
          icon={icons[index]}
          onPress={() => onPlanPress(plan)}
        />
      ))}
    </View>
  </View>
);

const WorkoutPlan = ({ plan, icon, onPress }) => (
  <TouchableOpacity style={styles.planCard} onPress={onPress}>
    <Image source={icon} style={styles.planIcon} />
    <Text style={styles.planText}>{plan.name}</Text>
  </TouchableOpacity>
);

// Styles (Example)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingVertical: 20, // Top and bottom padding for the entire list
  },
  categoryContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  plansContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  planCard: {
    width: "48%", // Two cards per row with some spacing
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: "1%",
  },
  planIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  planText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exerciseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  exerciseIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  exerciseText: {
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PlansScreen;
