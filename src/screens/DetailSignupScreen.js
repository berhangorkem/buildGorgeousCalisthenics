import React from "react";
import { View, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import MainButton from "../components/MainButton";
import InputContainer from "../components/InputContainer";
const DetailSignupScreen = ({ navigation }) => {
  const img = require("../../assets/banners/loginFlow-banner.jpg");
  return (
    <ScrollView>
      <ImageBackground source={img} resizeMode="cover" style={{ flex: 1 }}>
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Spacer>
            <Spacer />
            <Text style={styles.header} h4>
              Let’s complete your profile
            </Text>
            <Text style={styles.header} h5>
              It will help us to know more about you!
            </Text>
            <Spacer />
            <InputContainer label="Age" />
            <InputContainer label="Size" />
            <InputContainer label="Weight" />
            <InputContainer label="Gender" />
            <MainButton
              pageName="mainFlow"
              title="Sign Up"
              navigation={navigation}
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
    marginVertical: 171,
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

export default DetailSignupScreen;
