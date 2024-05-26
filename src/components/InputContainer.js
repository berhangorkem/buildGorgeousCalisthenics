import React from "react";
import { Input } from "react-native-elements";

const InputContainer = ({ label ,type}) => {

  const isPassword = label.toLowerCase() === "password";

  return (
    <Input
      label={label}
      keyboardType={type}
      secureTextEntry={isPassword}
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
