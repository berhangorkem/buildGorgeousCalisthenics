import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { ScrollView } from "react-native-gesture-handler";

const DetailSignupScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Spacer />
          <Text style={styles.header} h3>
            Let’s complete your profile
          </Text>
          <Text style={styles.header} h5>
            It will help us to know more about you!
          </Text>
          <Spacer />
          <Input label="Age" />
          <Spacer />
          <Input label="Size" />
          <Spacer />
          <Input label="Weight" />
          <Spacer />
          <Input label="Gender" />
          <Spacer>
            <Button
              title="Continue"
              onPress={() => navigation.navigate("mainFlow")}
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
