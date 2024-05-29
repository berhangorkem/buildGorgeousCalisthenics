import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import InputContainer from "../components/InputContainer";
import PickerContainer from "../components/PickerContainer";
import { UserContext } from "../context/UserContext";
import axios from "axios";

// Define the API flag outside the component
const useApi = false; // Set this to true if you want to use the API

const DetailSignupScreen = ({ navigation }) => {
  const img = require("../../assets/banners/loginFlow-banner.jpg");
  const { userData } = useContext(UserContext);
  const [age, setAge] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");

  const handleCompleteSignup = async () => {
    const finalData = { ...userData, age, size, weight, gender, activityLevel };

    if (useApi) {
      try {
        const response = await axios.post("YOUR_API_ENDPOINT", finalData);
        console.log("API Response:", response.data);
        navigation.navigate("Signin");
      } catch (error) {
        console.error(
          "API request failed. Logging data to console instead.",
          error
        );
        Alert.alert(
          "Signup Incomplete",
          "Unable to connect to the server. Check your network connection."
        );
        console.log("Final Signup Data (API Unavailable):", finalData);
      }
    } else {
      // If useApi is false, log the data to the console
      console.log("API is disabled. Final Signup Data:", finalData);
      navigation.navigate("Signin");
    }
  };

  return (
    <ScrollView>
      <ImageBackground source={img} resizeMode="cover" style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Spacer>
            <Text style={styles.header} h4>
              Let’s complete your profile
            </Text>
            <Text style={styles.header} h5>
              It will help us to know more about you!
            </Text>
            <Spacer />
            <InputContainer
              label="Age"
              value={age}
              onChangeText={setAge}
              type="numeric"
            />
            <InputContainer
              label="Size"
              value={size}
              onChangeText={setSize}
              type="numeric"
            />
            <InputContainer
              label="Weight"
              value={weight}
              onChangeText={setWeight}
              type="numeric"
            />
            <PickerContainer
              label="Gender"
              options={["Male", "Female"]}
              selectedValue={gender}
              onValueChange={setGender}
            />
            <PickerContainer
              label="Activity Level"
              options={["Stable", "Light", "Medium", "High"]}
              selectedValue={activityLevel}
              onValueChange={setActivityLevel}
            />
            <Spacer />
            <Button
              title="Sign Up"
              onPress={handleCompleteSignup}
              containerStyle={{ borderRadius: 20, marginHorizontal: 50 }}
            />
          </Spacer>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

DetailSignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 129.5,
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

export default DetailSignupScreen;
