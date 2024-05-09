import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import InputContainer from "../components/InputContainer";
import MainButton from "../components/MainButton";
const SignupScreen = ({ navigation }) => {
  const img = require("../../assets/authPhoto/13.jpg");
  return (
    <ImageBackground source={img} resizeMode="cover" style={{ flex: 1 }}>
      <View style={styles.container}>
          <Spacer>
            <Text style={styles.header} h5>
              Hey there
            </Text>
            <Text style={styles.header} h4>
              Create an Account
            </Text>
            <Spacer />
            <InputContainer label="Username" />
            <InputContainer label="Phone Number" />
            <InputContainer label="E-Mail" />
            <InputContainer label="Password" />
            <MainButton pageName="Detail" title="Sign Up" navigation={navigation}/>
          </Spacer>
          <NavLink
            routeName="Signin"
            text1="Already have an account? "
            text2="Sign In"
          />
        </View>
    </ImageBackground>
      
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 80,
  },
  header: {
    alignSelf: "center",
    color:"white"
  },
});

export default SignupScreen;
