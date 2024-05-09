import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import InputContainer from "../components/InputContainer";
import MainButton from "../components/MainButton";
const SigninScreen = ({ navigation }) => {
  const img = require("../../assets/banners/loginFlow-banner.jpg");

  return (
    <ScrollView>
      <ImageBackground source={img} resizeMode="cover" style={{ flex: 1 }}>
        <View style={styles.container}>
          <Spacer>
            <Text style={styles.header} h5>
              Hey there
            </Text>
            <Text style={styles.header} h4>
              Welcome Back
            </Text>
            <Spacer />
            <InputContainer label="Username" />
            <InputContainer label="Password" />
            <MainButton
              pageName="mainFlow"
              title="Sign In"
              navigation={navigation}
            />
          </Spacer>
          <NavLink
            routeName="Signup"
            text1="Dont have an account? "
            text2="Sign Up"
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:228.5
  },
  header: {
    alignSelf: "center",
    color: "white",
  },
});

export default SigninScreen;
