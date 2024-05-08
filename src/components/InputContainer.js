import React from "react";
import { Input } from "react-native-elements";

const InputContainer = ({label}) => {
  return  <Input
  label= {label}
  inputContainerStyle={{
    borderWidth: 1,
    borderRadius: 10,
    borderColor:"black",
    color:"black"
  }}
  labelStyle={{
    fontSize: 12,
    color:"black"
  }}
/>;
};


export default InputContainer;
