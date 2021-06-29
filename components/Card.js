import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View> //...style.card - spreads the existing styles for ".card" and it can accomodate other custom styles as well.
  );
};

export default Card;1

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    marginTop: 20,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 6,
    borderRadius: 10,
    padding: 12,
    backgroundColor: "white",
  },
});
