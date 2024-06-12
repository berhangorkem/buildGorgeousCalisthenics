import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import { Card,Button  } from "react-native-elements";

const movementsData = [
  {
    id: 1,
    targetedArea: "Chest",
    title: "Bench Press",
    icon: require("../../assets/movements/chest-triceps/chest/1/bench-press.png"),
    description:
      "A fundamental chest exercise that also strengthens triceps and shoulders.",
  },
  {
    id: 2,
    targetedArea: "Chest",
    title: "Machine Fly",
    icon: require("../../assets/movements/chest-triceps/chest/1/machine-fly.png"),
    description:
      "Targets the chest muscles, enhancing strength and muscle mass.",
  },
  {
    id: 3,
    targetedArea: "Chest",
    title: "Push Up",
    icon: require("../../assets/movements/chest-triceps/chest/1/push-up.png"),
    description:
      "A bodyweight exercise that works the chest, triceps, and shoulders.",
  },
  {
    id: 4,
    targetedArea: "Chest",
    title: "Chest Fly",
    icon: require("../../assets/movements/chest-triceps/chest/2/chest-fly.png"),
    description:
      "Isolates the chest muscles, promoting strength and muscle definition.",
  },
  {
    id: 5,
    targetedArea: "Chest",
    title: "Incline Bench Press",
    icon: require("../../assets/movements/chest-triceps/chest/2/incline-bench-press.png"),
    description:
      "Focuses on the upper chest, also engaging the triceps and shoulders.",
  },
  {
    id: 6,
    targetedArea: "Chest",
    title: "Machine Chest Press",
    icon: require("../../assets/movements/chest-triceps/chest/2/machine-chest-press.png"),
    description:
      "Builds chest strength and muscle mass, also working the triceps.",
  },
  {
    id: 7,
    targetedArea: "Back",
    title: "Pull Up",
    icon: require("../../assets/movements/back-biceps/back/1/pull-up.png"),
    description:
      "A bodyweight exercise that targets the back, biceps, and shoulders.",
  },
  {
    id: 8,
    targetedArea: "Back",
    title: "Shotgun Row",
    icon: require("../../assets/movements/back-biceps/back/1/shotgun-row.png"),
    description: "Targets the back muscles, enhancing strength and definition.",
  },
  {
    id: 9,
    targetedArea: "Back",
    title: "T-Bar Row",
    icon: require("../../assets/movements/back-biceps/back/1/t-bar-row.png"),
    description: "Works the middle back, improving strength and muscle mass.",
  },
  {
    id: 10,
    targetedArea: "Back",
    title: "Dumbbell Incline Row",
    icon: require("../../assets/movements/back-biceps/back/2/dumbble-incline-row.png"),
    description:
      "Focuses on the upper back, also engaging the biceps and shoulders.",
  },
  {
    id: 11,
    targetedArea: "Back",
    title: "Seated Cable Row",
    icon: require("../../assets/movements/back-biceps/back/2/seated-cable-row.png"),
    description:
      "Strengthens the back muscles, enhancing overall upper body strength.",
  },
  {
    id: 12,
    targetedArea: "Back",
    title: "Lat Pull Down",
    icon: require("../../assets/movements/back-biceps/back/2/lat-pulldown.png"),
    description:
      "Targets the latissimus dorsi, improving back strength and width.",
  },
  {
    id: 13,
    targetedArea: "Legs",
    title: "Dumbbell Seated Calf Raise",
    icon: require("../../assets/movements/legs-abs/legs/1/dumbbell-seated-calf-raise.png"),
    description:
      "Strengthens the calf muscles, enhancing lower leg development.",
  },
  {
    id: 14,
    targetedArea: "Legs",
    title: "Leg Back Extension",
    icon: require("../../assets/movements/legs-abs/legs/1/leg-back-extension.png"),
    description:
      "Focuses on the lower back and hamstrings, improving strength and stability.",
  },
  {
    id: 15,
    targetedArea: "Legs",
    title: "Lunges",
    icon: require("../../assets/movements/legs-abs/legs/1/lunges.png"),
    description: "Targets the legs and glutes, enhancing strength and balance.",
  },
  {
    id: 16,
    targetedArea: "Legs",
    title: "Squat",
    icon: require("../../assets/movements/legs-abs/legs/1/squat.png"),
    description:
      "A compound exercise that builds strength in the legs and glutes.",
  },
  {
    id: 17,
    targetedArea: "Legs",
    title: "Deadlift",
    icon: require("../../assets/movements/legs-abs/legs/2/deadlift.png"),
    description:
      "Engages the entire posterior chain, building overall strength and muscle mass.",
  },
  {
    id: 18,
    targetedArea: "Legs",
    title: "Leg Press",
    icon: require("../../assets/movements/legs-abs/legs/2/leg-press.png"),
    description:
      "Focuses on the quads, hamstrings, and glutes, enhancing leg strength.",
  },
  {
    id: 19,
    targetedArea: "Legs",
    title: "Standing Barbell Calf Raise",
    icon: require("../../assets/movements/legs-abs/legs/2/standing-barbell-calf-raise.png"),
    description:
      "Strengthens the calf muscles, promoting lower leg development.",
  },
  {
    id: 20,
    targetedArea: "Legs",
    title: "Thigh Abductor",
    icon: require("../../assets/movements/legs-abs/legs/2/thigh-abductor.png"),
    description: "Targets the outer thighs, enhancing strength and stability.",
  },
  {
    id: 21,
    targetedArea: "Shoulders",
    title: "Leverage Shoulder Press",
    icon: require("../../assets/movements/shoulders/1/leverage-shoulder-press.png"),
    description:
      "Builds shoulder strength and muscle mass, also engaging the triceps.",
  },
  {
    id: 22,
    targetedArea: "Shoulders",
    title: "Shrug",
    icon: require("../../assets/movements/shoulders/1/shrug.png"),
    description:
      "Targets the trapezius muscles, enhancing upper back strength and definition.",
  },
  {
    id: 23,
    targetedArea: "Shoulders",
    title: "Side Shoulder Raise",
    icon: require("../../assets/movements/shoulders/1/side-shoulder-raise.png"),
    description:
      "Isolates the deltoids, promoting shoulder strength and definition.",
  },
  {
    id: 24,
    targetedArea: "Shoulders",
    title: "Smith Machine Shoulder Press",
    icon: require("../../assets/movements/shoulders/1/smith-machine-shoulder-press.png"),
    description:
      "A stable shoulder exercise that builds strength and muscle mass.",
  },
  {
    id: 25,
    targetedArea: "Shoulders",
    title: "Lateral Raise",
    icon: require("../../assets/movements/shoulders/2/lateral-raise.png"),
    description:
      "Targets the deltoids, helping to build shoulder strength and definition.",
  },
  {
    id: 26,
    targetedArea: "Shoulders",
    title: "Seated Barbell Military Press",
    icon: require("../../assets/movements/shoulders/2/seated-barbell-millitary-press.png"),
    description:
      "A fundamental shoulder exercise that works the deltoids and triceps.",
  },
  {
    id: 27,
    targetedArea: "Shoulders",
    title: "Seated Dumbbell Press",
    icon: require("../../assets/movements/shoulders/2/seated-dumbble-press.png"),
    description:
      "Targets the deltoids and triceps, promoting upper body strength.",
  },
  {
    id: 28,
    targetedArea: "Shoulders",
    title: "Upright Row",
    icon: require("../../assets/movements/shoulders/2/upright-rows.png"),
    description:
      "Works the shoulders, traps, and upper back, enhancing upper body strength.",
  },
  {
    id: 29,
    targetedArea: "Biceps",
    title: "Dumbbell Curl",
    icon: require("../../assets/movements/back-biceps/biceps/1/dumbbell-curl.png"),
    description:
      "A classic biceps exercise that builds arm strength and muscle mass.",
  },
  {
    id: 30,
    targetedArea: "Biceps",
    title: "Incline Hammer Curl",
    icon: require("../../assets/movements/back-biceps/biceps/1/incline-hammer-curl.png"),
    description:
      "Targets the biceps and forearms, improving grip strength and definition.",
  },
  {
    id: 31,
    targetedArea: "Biceps",
    title: "Concentration Curl",
    icon: require("../../assets/movements/back-biceps/biceps/2/concentration-curl.png"),
    description: "Isolates the biceps for focused strength and muscle growth.",
  },
  {
    id: 32,
    targetedArea: "Biceps",
    title: "EZ Bar Curl",
    icon: require("../../assets/movements/back-biceps/biceps/2/ez-bar-curl.png"),
    description:
      "Engages the biceps and forearms, offering a variation to standard curls and reducing strain on the wrists.",
  },
  {
    id: 33,
    targetedArea: "Triceps",
    title: "Dips",
    icon: require("../../assets/movements/chest-triceps/triceps/1/dips.png"),
    description:
      "An effective exercise for building triceps strength and definition, also engaging the chest and shoulders.",
  },
  {
    id: 34,
    targetedArea: "Triceps",
    title: "Standing Dumbbell Triceps Extension",
    icon: require("../../assets/movements/chest-triceps/triceps/1/standing-dumbbell-triceps-extension.png"),
    description:
      "Targets the triceps for increased strength and muscle growth, also engaging the shoulders.",
  },
  {
    id: 35,
    targetedArea: "Triceps",
    title: "Overhead Triceps Extension",
    icon: require("../../assets/movements/chest-triceps/triceps/2/overhead-triceps-extension.png"),
    description:
      "Focuses on the triceps, enhancing muscle definition and arm strength.",
  },
  {
    id: 36,
    targetedArea: "Triceps",
    title: "Triceps Pushdown",
    icon: require("../../assets/movements/chest-triceps/triceps/2/triceps-pushdown.png"),
    description:
      "Strengthens the triceps, enhancing muscle definition and arm strength.",
  },
  {
    id: 37,
    targetedArea: "Abs",
    title: "Plank",
    icon: require("../../assets/movements/legs-abs/abs/1/plank.png"),
    description:
      "A core-strengthening exercise that also engages the shoulders, back, and glutes.",
  },
  {
    id: 38,
    targetedArea: "Abs",
    title: "Smith Machine Hip Raise",
    icon: require("../../assets/movements/legs-abs/abs/1/smith-machine-hip-raise.png"),
    description:
      "Targets the lower abs and hip flexors, helping to build core strength and stability.",
  },
  {
    id: 39,
    targetedArea: "Abs",
    title: "Cable Crunch",
    icon: require("../../assets/movements/legs-abs/abs/2/cable-crunch.png"),
    description:
      "A weighted ab exercise that targets the rectus abdominis for enhanced muscle definition.",
  },
  {
    id: 40,
    targetedArea: "Abs",
    title: "Twist",
    icon: require("../../assets/movements/legs-abs/abs/2/twist.png"),
    description:
      "Engages the obliques and core, helping to improve rotational strength and stability.",
  },
  {
    id: 41,
    targetedArea: "Cardio",
    title: "Rowing",
    icon: require("../../assets/movements/cardio/1/rowing.png"),
    description:
      "A full-body cardio workout that also strengthens the back, shoulders, and legs.",
  },
  {
    id: 42,
    targetedArea: "Cardio",
    title: "Running",
    icon: require("../../assets/movements/cardio/1/running.png"),
    description:
      "An effective cardio exercise for improving cardiovascular health and endurance.",
  },
  {
    id: 43,
    targetedArea: "Cardio",
    title: "Skipping",
    icon: require("../../assets/movements/cardio/1/skipping.png"),
    description:
      "A high-intensity cardio exercise that improves coordination and cardiovascular fitness.",
  },
  {
    id: 44,
    targetedArea: "Cardio",
    title: "Bike",
    icon: require("../../assets/movements/cardio/2/bike.png"),
    description:
      "A low-impact cardio workout that strengthens the legs and improves cardiovascular health.",
  },
  {
    id: 45,
    targetedArea: "Cardio",
    title: "Elliptical Trainer",
    icon: require("../../assets/movements/cardio/2/elliptical-trainer.png"),
    description:
      "Provides a full-body, low-impact cardio workout, enhancing endurance and muscle tone.",
  },
  {
    id: 46,
    targetedArea: "Cardio",
    title: "Step Mill",
    icon: require("../../assets/movements/cardio/2/step-mill.png"),
    description:
      "A cardio exercise that targets the legs and glutes, improving cardiovascular fitness and strength.",
  },
];

const getUniqueTargetedAreas = (data) => {
  const areas = data.map((item) => item.targetedArea);
  return [...new Set(areas)];
};

const MovementsScreen = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const uniqueTargetedAreas = getUniqueTargetedAreas(movementsData);

  const toggleArea = (area) => {
    setSelectedArea(area);
    setBottomSheetVisible(true);
  };

  const renderExerciseItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.cardImageContainer}>
          <Image source={item.icon} style={styles.cardImage} />
        </View>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
    </Card>
  );

  const renderAreaItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleArea(item)}>
      <View style={styles.areaHeader}>
        <Text style={styles.areaTitle}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  const exercisesForSelectedArea = movementsData.filter(
    (movement) => movement.targetedArea === selectedArea
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={uniqueTargetedAreas}
        renderItem={renderAreaItem}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.contentContainer}
      />
      <Modal
        visible={isBottomSheetVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setBottomSheetVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.bottomSheet}>
            <Text style={styles.bottomSheetTitle}>{selectedArea}</Text>
            <FlatList
              data={exercisesForSelectedArea}
              renderItem={renderExerciseItem}
              keyExtractor={(exercise) => exercise.id.toString()}
              contentContainerStyle={styles.bottomSheetContent}
            />
            <Button
              title="Close"
              onPress={() => setBottomSheetVisible(false)}
              buttonStyle={styles.closeButton}
              titleStyle={{color:"black"}}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    paddingBottom: 30,
  },
  areaHeader: {
    backgroundColor: "#ddd",
    padding: 10,
    marginVertical: 5,
    marginHorizontal:10,
    borderRadius: 50,
  },
  areaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    flex: 1,
    marginHorizontal: 25,
    marginVertical: 10,
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
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardDescription: {
    marginTop: 5,
    fontSize: 13,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "80%",
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bottomSheetContent: {
    paddingBottom: 20,
  },
  closeButton: {
    backgroundColor: "#ddd",
    marginTop: 20,
    borderRadius:20,
    marginHorizontal:100
  },
});

export default MovementsScreen;