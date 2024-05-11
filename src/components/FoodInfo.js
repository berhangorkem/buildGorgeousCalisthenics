import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon,Text } from "react-native-elements";

const FoodInfo = ({icon,name,calories,id}) => {

  return (
    <View style={styles.cardRow}>
      <View style={styles.iconTextContainer}>
        <Icon name={icon} type="material-community" size={30} />
        <Text style={styles.foodInfo}>{name}</Text>
      </View>
      <Text style={styles.calories}>{calories} Calories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFA",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
      },
      iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      foodInfo: {
        marginLeft: 10,
      },
      calories: {
        flex: 1,
        textAlign: "right",
        fontSize: 12,
        color: "radial-gradient(circle, rgba(69,255,0,1) 0%, rgba(0,240,255,1) 100%)",
      },
});

export default FoodInfo;
