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
    alignItems: 'center', 
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "flex-start",
    color: "#CCCCCC", 
    marginLeft: 10
  },
  pickerContainer: {
    width: '93%', 
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "transparent", 
  },
  picker: {
    borderRadius: 15,
    borderWidth: 0, 
    backgroundColor: "transparent", 
  },
  selectedButton: {
    backgroundColor: "#BCCCCC", 
  },
  pickerText: {
    color: "#CCCCCC", 
  },
});

export default PickerContainer;
