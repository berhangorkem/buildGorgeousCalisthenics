import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import InputContainer from "../components/InputContainer";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SigninScreen = ({ navigation }) => {
  const img = require("../../assets/banners/loginFlow-banner.jpg");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const useMockData = false; // Set this to false if you want to use API instead of mock data
  const mockUserData = {
    username: "a",
    password: "a",
  };

  const handleSignIn = async () => {
    if (useMockData) {
      // Use mock data for login
      if (
        username === mockUserData.username &&
        password === mockUserData.password
      ) {
        navigation.navigate("mainFlow");
      } else {
        Alert.alert(
          "Login Failed",
          "Please check your credentials and try again."
        );
      }
    } else {
      // console.log("TEST 1");
      const response = await axios
        .post("https://xl10mjw5-3000.euw.devtunnels.ms/api/v1/auth/login", {
          username,
          password,
        })
        .then(async (res) => {
          console.log(res.data);
          console.log(res.status);

          const userId = res.data.user.id;
          // Store the userId in AsyncStorage
          try {
            await AsyncStorage.setItem("userId", userId);
            console.log("User ID saved successfully:", userId);
          } catch (e) {
            console.error("Failed to save user ID to AsyncStorage", e);
          }

          navigation.navigate("mainFlow");
        })
        .catch((error) => {
          console.error(
            "API request failed. Logging data to console instead.",
            error
          );
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          }

          Alert.alert(
            "Signup Incomplete",
            "Unable to connect to the server. Check your network connection."
          );
        });
    }
  };

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
              Welcome Back
            </Text>
            <Spacer />
            <InputContainer
              label="Username"
              value={username}
              onChangeText={setUsername}
            />
            <InputContainer
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Button
              title="Sign In"
              onPress={handleSignIn}
              containerStyle={{ borderRadius: 20, marginHorizontal: 50 }}
            />
          </Spacer>
          <NavLink
            routeName="Signup"
            text1="Don't have an account? "
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
    marginVertical: 245,
  },
  header: {
    alignSelf: "center",
    color: "#CCCCCC",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default SigninScreen;
