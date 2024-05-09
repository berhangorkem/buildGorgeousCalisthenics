import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

const LogoutIcon = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('loginFlow')} >
        <Icon name="logout" type="material-community" color="black"/>
    </TouchableOpacity>
  );
};


export default withNavigation(LogoutIcon);