import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, ButtonGroup } from "react-native-elements";

const PickerContainer = ({ label, options,selectedValue,onValueChange }) => {


  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <ButtonGroup
          onPress={onValueChange}
          selectedIndex={selectedValue}
          buttons={options}
          containerStyle={styles.picker}
          selectedButtonStyle={styles.selectedButton}
          textStyle={styles.pickerText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    alignItems: 'center', // Center align the picker container
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "flex-start",
    color: "#CCCCCC", // Grey color
    marginLeft: 10
  },
  pickerContainer: {
    width: '93%', // Reduced width to 93% of the container
    borderColor: "#CCCCCC", // Border color
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "transparent", // Transparent background
  },
  picker: {
    borderRadius: 15,
    borderWidth: 0, // No border for button group container
    backgroundColor: "transparent", // Transparent background for button group
  },
  selectedButton: {
    backgroundColor: "#BCCCCC", // Grey background for selected button
  },
  pickerText: {
    color: "#CCCCCC", // Grey text color
  },
});

export default PickerContainer;
