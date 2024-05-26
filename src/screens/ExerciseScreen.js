import React from "react";
import { View, StyleSheet } from "react-native";
import TopBar from "../components/TopBar";
import { Button, Text } from "react-native-elements";

const ExerciseScreen = ({ navigation }) => {
  return (
    <>
      <TopBar text="Exercise Planning" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            To review workout programs and use ready-made structures, go to the
            "Plans" page.
          </Text>
          <Button
            onPress={() => navigation.navigate("Plans")}
            title="Ready Plans"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            To create and review your own workouts in detail, go to the
            "Movements" page.
          </Text>
          <Button
            onPress={() => navigation.navigate("Movements")}
            title="Movements"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  textContainer: {
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0000FF",
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 18,
  },
});

export default ExerciseScreen;
