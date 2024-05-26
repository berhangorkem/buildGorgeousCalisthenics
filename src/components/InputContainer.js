import React from "react";
import { Input } from "react-native-elements";

const InputContainer = ({ label }) => {
  return (
    <Input
      label={label}
      keyboardType="numeric"
      inputContainerStyle={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#CCCCCC",
      }}
      inputStyle={{
        color: "#CCCCCC",
      }}
      labelStyle={{
        fontSize: 12,
        color: "#CCCCCC",
      }}
    />
  );
};

export default InputContainer;
