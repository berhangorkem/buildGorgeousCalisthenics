import React from "react";
import { Button } from "react-native-elements";

const MainButton = ({ title, pageName,navigation }) => {
  // Destructure `navigation` prop from rest if provided

  const handlePress = () => {
    if (navigation) {
      navigation.navigate(pageName); // Or any dynamic page name
    } else {
      // Handle alternative behavior if no navigation prop is provided
      console.warn("MainButton: navigation prop not provided");
      // You can implement your desired fallback behavior here (e.g., alert)
    }
  };

  return (
    <Button
      containerStyle={{ borderRadius: 20, marginHorizontal: 50 }}
      title={title}
      onPress={handlePress}
    />
  );
};

export default MainButton;
