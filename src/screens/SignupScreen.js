import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Spacer/>
            <Text style={styles.header} h5>Hey there,</Text>
            <Text style={styles.header} h3>Create an Account</Text>
          <Spacer/>
          <Input label="Username" />
          <Spacer />
          <Input label="Phone Number" />
          <Spacer />
          <Input label="E-Mail" />
          <Spacer />
          <Input label="Password" />
          <Spacer>
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate("Detail")}
            />
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
  header:{
    alignSelf:"center"
  }
});

export default SignupScreen;
