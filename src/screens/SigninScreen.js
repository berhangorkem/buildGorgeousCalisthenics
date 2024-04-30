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

const SigninScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Spacer>
            <Text style={styles.header} h5>
              Hey there,
            </Text>
            <Text style={styles.header} h3>
              Welcome Back
            </Text>
          </Spacer>
          <Spacer />
          <Input label="Username" />
          <Spacer />
          <Input label="Password" />
          <Spacer>
            <Button
              title="Sign In"
              onPress={() => navigation.navigate("mainFlow")}
            />
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
