import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Text} from "react-native-elements";
import Spacer from "../components/Spacer";
import { ScrollView } from "react-native-gesture-handler";
import MainButton from "../components/MainButton";
import InputContainer from "../components/InputContainer";
const DetailSignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

DetailSignupScreen.navigationOptions = {
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

export default DetailSignupScreen;
