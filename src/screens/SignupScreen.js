import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
} from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import NavLink from "../components/NavLink";
import InputContainer from "../components/InputContainer";
import { UserContext } from "../context/UserContext";

const SignupScreen = ({ navigation }) => {
  const img = require("../../assets/banners/loginFlow-banner.jpg");
  const { saveUserData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    saveUserData({ username, phoneNumber, email, password });
    navigation.navigate("Detail");
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
              Create an Account
            </Text>
            <Spacer />
            <InputContainer
              label="Username"
              value={username}
              onChangeText={setUsername}
            />
            <InputContainer
              label="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              type="phone-pad"
            />
            <InputContainer
              label="E-Mail"
              value={email}
              onChangeText={setEmail}
              type="email-address"
            />
            <InputContainer
              label="Password"
              value={password}
              onChangeText={setPassword}
              type="password"
            />
            <Button
              title="Next"
              onPress={handleSignUp}
              containerStyle={{ borderRadius: 20, marginHorizontal: 50 }}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default SignupScreen;
