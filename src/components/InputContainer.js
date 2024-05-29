import React from "react";
import { Input } from "react-native-elements";

const InputContainer = ({ label ,type,onChangeText,value}) => {

  const isPassword = label.toLowerCase() === "password";

  return (
    <Input
      label={label}
      onChangeText={onChangeText}
      keyboardType={type}
      value={value}
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
