import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from "react-native"; //Keyboard is an react native api which allows us to interact with the native devices features itsetf.
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import ConfirmedNumber from "../components/confirmedNumber";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setIsconfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState();

  const inputValueHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setIsconfirmed(false);
  };

  const confirmInputHandler = () => {
    const confirmedNumber = parseInt(enteredValue);
    if (
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert("Invalid Number!", "Enter a number between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setIsconfirmed(true);
    setConfirmedNumber(confirmedNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedNumberCardContainer}>
        <BodyText>Your number</BodyText>
        <ConfirmedNumber>{confirmedNumber}</ConfirmedNumber>
        <Button title="GAME ON!" onPress={() => props.onStartGame(confirmedNumber)}/> 
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText>START A NEW GAME!</TitleText>
        <Card style={styles.inputContainer}>        
          <BodyText>Input a number</BodyText>
          <Input
            keyboardType="number-pad"
            blurOnSubmit
            maxLength={2}
            style={styles.input}
            onChangeText={inputValueHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CONFIRM" onPress={confirmInputHandler} />
            </View>
            <View style={styles.button}>
              <Button
                title="RESET"
                color={Colors.primary}
                onPress={resetInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  subTitle: {
    //marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold'
  },
  button: {
    width: 106,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmedNumberCardContainer: {
      
      marginTop: 25,
      alignItems: 'center'
  }
});
