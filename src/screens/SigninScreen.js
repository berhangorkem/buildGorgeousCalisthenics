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

const SigninScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
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
            <MainButton pageName="mainFlow" title="Sign In" navigation={navigation} />
          </Spacer>
          <NavLink
            routeName="Signup"
            text="Dont have an account? Sign up instead"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 150,
  },
  header: {
    alignSelf: "center",
  },
});

export default SigninScreen;
