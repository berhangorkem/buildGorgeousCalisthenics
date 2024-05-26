import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import InputContainer from "../components/InputContainer";
import MainButton from "../components/MainButton";
const SignupScreen = ({ navigation }) => {
  const img = require("../../assets/banners/loginFlow-banner.jpg");
  return (
    <ScrollView>
      <ImageBackground source={img} resizeMode="cover" style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Spacer>
            <Text style={styles.header} h5>
              Hey there
            </Text>
            <Text style={styles.header} h4>
              Create an Account
            </Text>
            <Spacer />
            <InputContainer label="Username"/>
            <InputContainer label="Phone Number" type="phone-pad"/>
            <InputContainer label="E-Mail" type="email-address"  />
            <InputContainer label="Password" type="password " />
            <MainButton
              pageName="Detail"
              title="Sign Up"
              navigation={navigation}
            />
          </Spacer>
          <NavLink
            routeName="Signin"
            text1="Already have an account? "
            text2="Sign In"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 161,
  },
  header: {
    alignSelf: "center",
    color: "#CCCCCC",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Siyah ve yarı saydam
  },
});

export default SignupScreen;
