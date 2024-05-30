import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProgressBar = ({ value, limit }) => {
  const filledWidth = (value / 4500) * 330;
  const limitPoint = (limit / 4500) * 330;
  const diff = limit - value;

  const getDiffColor = () => {
    return diff < 0 ? "red" : "green";
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Calories</Text>
      </View>
      <View style={[styles.progressBarContainer, { width: 330 }]}>
        <View style={[styles.progressBar, { width: Math.min(filledWidth, limitPoint) }]} />
        {filledWidth > limitPoint && (
          <View
            style={[
              styles.exceededBar,
              { left: limitPoint, width: filledWidth - limitPoint },
            ]}
          />
        )}
        <View style={[styles.marker, { left: limitPoint }]} />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.textGroup}>
          <Text style={styles.title}>Budget</Text>
          <Text style={[styles.subtitle, { color: "orange" }]}>{limit}</Text>
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.title}>Food</Text>
          <Text style={styles.subtitle}>{value}</Text>
        </View>
        <View style={styles.textGroup}>
          <Text style={styles.title}>Diff</Text>
          <Text style={[styles.subtitle, { color: getDiffColor() }]}>{diff}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
    marginBottom: 5,
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 330,
    marginTop: 10,
  },
  textGroup: {
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "center",
    color:
      "radial-gradient(circle, rgba(69,255,0,0.5) 0%, rgba(0,240,255,0.5) 100%)",
  },
  progressBarContainer: {
    backgroundColor: "grey",
    opacity:0.5,
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  progressBar: {
    backgroundColor:
      "radial-gradient(circle, rgba(69,255,0,1) 0%, rgba(0,240,255,1) 100%)",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  marker: {
    backgroundColor: "black",
    width: 3,
    height: "100%",
    position: "absolute",
    fontWeight:"bold",
    top: 0,
  },
  exceededBar: {
    backgroundColor: "red",
    height: "100%",
    position: "absolute",
    top: 0,
  },
});

export default ProgressBar;
