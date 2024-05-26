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


const workoutPlans = [
  {
    category: "Chest & Triceps",
    plans: [
      {
        name: "Chest & Triceps-1",
        exercises: [
          {
            name: "Bench Press",
            icon: require("../../assets/movements/chest-triceps/chest/1/bench-press.png"),
          },
          {
            name: "Machine Fly",
            icon: require("../../assets/movements/chest-triceps/chest/1/machine-fly.png"),
          },
          {
            name: "Push Up",
            icon: require("../../assets/movements/chest-triceps/chest/1/push-up.png"),
          },
          {
            name: "Dips",
            icon: require("../../assets/movements/chest-triceps/triceps/1/dips.png"),
          },
          {
            name: "Standing Dumbbell Triceps Extension",
            icon: require("../../assets/movements/chest-triceps/triceps/1/standing-dumbbell-triceps-extension.png"),
          },
        ],
      },
      {
        name: "Chest & Triceps-2",
        exercises: [
          {
            name: "Incline Bench Press",
            icon: require("../../assets/movements/chest-triceps/chest/2/incline-bench-press.png"),
          },
          {
            name: "Chest Fly",
            icon: require("../../assets/movements/chest-triceps/chest/2/chest-fly.png"),
          },
          {
            name: "Machine Chest Press",
            icon: require("../../assets/movements/chest-triceps/chest/2/machine-chest-press.png"),
          },
          {
            name: "Overhead Triceps Extension",
            icon: require("../../assets/movements/chest-triceps/triceps/2/overhead-triceps-extension.png"),
          },
          {
            name: "Triceps Pushdown",
            icon: require("../../assets/movements/chest-triceps/triceps/2/triceps-pushdown.png"),
          },
        ],
      },
    ],
    icons: [require("../../assets/movements/plans/chest.png"), require("../../assets/movements/plans/triceps.png")],
  },
  {
    category: "Back & Biceps",
    plans: [
      {
        name: "Back & Biceps-1",
        exercises: [
          {
            name: "Pull Up",
            icon: require("../../assets/movements/back-biceps/back/1/pull-up.png"),
          },
          {
            name: "Shotgun Row",
            icon: require("../../assets/movements/back-biceps/back/1/shotgun-row.png"),
          },
          {
            name: "T-Bar Row",
            icon: require("../../assets/movements/back-biceps/back/1/t-bar-row.png"),
          },
          {
            name: "Dumbbell Curl",
            icon: require("../../assets/movements/back-biceps/biceps/1/dumbbell-curl.png"),
          },
          {
            name: "Incline Hammer Curl",
            icon: require("../../assets/movements/back-biceps/biceps/1/incline-hammer-curl.png"),
          },
        ],
      },
      {
        name: "Back & Biceps-2",
        exercises: [
          {
            name: "Dumbbell Incline Row",
            icon: require("../../assets/movements/back-biceps/back/2/dumbble-incline-row.png"),
          },
          {
            name: "Seated Cable Row",
            icon: require("../../assets/movements/back-biceps/back/2/seated-cable-row.png"),
          },
          {
            name: "Lat Pull Down",
            icon: require("../../assets/movements/back-biceps/back/2/lat-pulldown.png"),
          },
          {
            name: "Concentration Curl",
            icon: require("../../assets/movements/back-biceps/biceps/2/concentration-curl.png"),
          },
          {
            name: "EZ Bar Curl",
            icon: require("../../assets/movements/back-biceps/biceps/2/ez-bar-curl.png"),
          },
        ],
      },
    ],
    icons: [require("../../assets/movements/plans/back.png"), require("../../assets/movements/plans/biceps.png")],
  },
  {
    category: "Legs & Abs",
    plans: [
      {
        name: "Legs & Abs-1",
        exercises: [
          {
            name: "Squat",
            icon: require("../../assets/movements/legs-abs/legs/1/squat.png"),
          },
          {
            name: "Lunges",
            icon: require("../../assets/movements/legs-abs/legs/1/lunges.png"),
          },
          {
            name: "Dumbbell Seated Calf Raise",
            icon: require("../../assets/movements/legs-abs/legs/1/dumbbell-seated-calf-raise.png"),
          },
          {
            name: "Leg Back Extension",
            icon: require("../../assets/movements/legs-abs/legs/1/leg-back-extension.png"),
          },
          {
            name: "Plank",
            icon: require("../../assets/movements/legs-abs/abs/1/plank.png"),
          },
          {
            name: "Smith Machine Hip Raise",
            icon: require("../../assets/movements/legs-abs/abs/1/smith-machine-hip-raise.png"),
          },
        ],
      },
      {
        name: "Legs & Abs-2",
        exercises: [
          {
            name: "Deadlift",
            icon: require("../../assets/movements/legs-abs/legs/2/deadlift.png"),
          },
          {
            name: "Leg Press",
            icon: require("../../assets/movements/legs-abs/legs/2/leg-press.png"),
          },
          {
            name: "Standing Barbell Calf Raise",
            icon: require("../../assets/movements/legs-abs/legs/2/standing-barbell-calf-raise.png"),
          },
          {
            name: "Thigh Abductor",
            icon: require("../../assets/movements/legs-abs/legs/2/thigh-abductor.png"),
          },
          {
            name: "Cable Crunch",
            icon: require("../../assets/movements/legs-abs/abs/2/cable-crunch.png"),
          },
          {
            name: "Twist",
            icon: require("../../assets/movements/legs-abs/abs/2/twist.png"),
          },
        ],
      },
    ],
    icons: [require("../../assets/movements/plans/legs.png"), require("../../assets/movements/plans/abs.png")],
  },
  {
    category: "Shoulders",
    plans: [
      {
        name: "Shoulders-1",
        exercises: [
          {
            name: "Leverage Shoulder Press",
            icon: require("../../assets/movements/shoulders/1/leverage-shoulder-press.png"),
          },
          {
            name: "Side Shoulder Raise",
            icon: require("../../assets/movements/shoulders/1/side-shoulder-raise.png"),
          },
          {
            name: "Shrug",
            icon: require("../../assets/movements/shoulders/1/shrug.png"),
          },
          {
            name: "Smith Machine Shoulder Press",
            icon: require("../../assets/movements/shoulders/1/smith-machine-shoulder-press.png"),
          },
        ],
      },
      {
        name: "Shoulders-2",
        exercises: [
          {
            name: "Seated Barbell Military Press",
            icon: require("../../assets/movements/shoulders/2/seated-barbell-millitary-press.png"),
          },
          {
            name: "Seated Dumbbell Press",
            icon: require("../../assets/movements/shoulders/2/seated-dumbble-press.png"),
          },
          {
            name: "Lateral Raise",
            icon: require("../../assets/movements/shoulders/2/lateral-raise.png"),
          },
          {
            name: "Upright Row",
            icon: require("../../assets/movements/shoulders/2/upright-rows.png"),
          },
        ],
      },
    ],
    icons: [require("../../assets/movements/plans/shoulder-top.png"), require("../../assets/movements/plans/shoulder.png")],
  },
  {
    category: "Cardio",
    plans: [
      {
        name: "Cardio-1",
        exercises: [
          {
            name: "Running",
            icon: require("../../assets/movements/cardio/1/running.png"),
          },
          {
            name: "Rowing",
            icon: require("../../assets/movements/cardio/1/rowing.png"),
          },
          {
            name: "Skipping",
            icon: require("../../assets/movements/cardio/1/skipping.png"),
          },
        ],
      },
      {
        name: "Cardio-2",
        exercises: [
          {
            name: "Elliptical Trainer",
            icon: require("../../assets/movements/cardio/2/elliptical-trainer.png"),
          },
          {
            name: "Bike",
            icon: require("../../assets/movements/cardio/2/bike.png"),
          },
          {
            name: "Step Mill",
            icon: require("../../assets/movements/cardio/2/step-mill.png"),
          },
        ],
      },
    ],
    icons: [require("../../assets/movements/plans/cardio.png"), require("../../assets/movements/plans/cardio-2.png")],
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
    alignItems: "flex-start", // Align content to the left
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center", // Center the title
  },
  exerciseItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 20, // Shift items towards the right
  },
  exerciseIcon: {
    width: 30,
    height: 30,
    flexShrink: 0, // Prevent shrinking of the image
    alignSelf: "flex-start", // Align image to the left
  },
  exerciseText: {
    fontSize: 16,
    marginLeft: 10, // Start text a consistent distance from the image
  },
  closeButton: {
    backgroundColor: "#0000FF",
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
