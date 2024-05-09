import React from "react";
import { Input } from "react-native-elements";

const InputContainer = ({label}) => {
  return  <Input
  label= {label}
  inputContainerStyle={{
    borderWidth: 1,
    borderRadius: 10,
    borderColor:"white",
    color:"white"
  }}
  labelStyle={{
    fontSize: 12,
    color:"white"
  }}
/>;
};


export default InputContainer;
