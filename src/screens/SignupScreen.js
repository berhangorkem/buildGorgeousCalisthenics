import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import InputContainer from "../components/InputContainer";
import MainButton from "../components/MainButton";
const SignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
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
            text="Already have an account? Sign in instead"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  },
});

export default SignupScreen;
