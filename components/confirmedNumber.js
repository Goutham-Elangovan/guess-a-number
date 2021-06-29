import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const ConfirmedNumber = (props) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

export default ConfirmedNumber;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    fontSize: 25,
    color: Colors.secondary,
  },
});
