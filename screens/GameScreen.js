import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Card from '../components/Card';
import ConfirmedNumber from '../components/confirmedNumber';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min); // example for 4.08, output would be 5
	max = Math.floor(max); // example for 4.08, output would be 4
	randomNumber = Math.floor(Math.random() * (max - min)) + min;

	if (randomNumber === exclude) {
		return generateRandomBetween(min, max, exclude); // example for recursive function - calling the same function inside that function itself.
	} else {
		return randomNumber;
	}
};

const GameScreen = (props) => {
	const [ currentGuess, setCurrentGuess ] = useState(generateRandomBetween(1, 100, props.userChoice));
	const [ attempts, setAttempts ] = useState(0);

	const currentLower = useRef(1);
	const currentHigher = useRef(100);

	const { userChoice, onGameOver } = props; //Object destructuring

	useEffect(
		() => {
			if (currentGuess === userChoice) onGameOver(attempts);
		},
		[ currentGuess, userChoice, onGameOver ]
	); //if we use props.userChoice then everytime the component renders our prop renders as well which in case renders the useEffect hook,
	//Therefore using object destructuring we can avoid those problems.

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < props.userChoice) ||
			(direction === 'higher' && currentGuess > props.userChoice)
			// This statement  checks if we guide the computer wrongly. If the userinput is 60 and when computer
			//guesses 65, then obviously we need to hint it by tapping lower button and not higher button. If we try to cheat, then this check is to create an alert.
		) {
			Alert.alert("Please don't lie!", 'Please instruct the computer correctly', [
				{ text: 'Sorry', style: 'cancel' }
			]);
			return;
		}

		//Setting boundaries using useRef hook.
		if (direction === 'lower') {
			currentHigher.current = currentGuess;
		}

		if (direction === 'higher') {
			currentLower.current = currentGuess;
		}

		//After the first time, we need to set lower and higher boundaries
		//so that the random number is generated within those boundaries.
		const nextNumber = generateRandomBetween(currentLower.current, currentHigher.current, currentGuess);
		setCurrentGuess(nextNumber);
		setAttempts((currentAttempt) => currentAttempt + 1);
	};

	return (
		<View style={styles.screen}>
			<Text>Computers guess</Text>
			<ConfirmedNumber>{currentGuess}</ConfirmedNumber>
			<Card style={styles.buttonContainer}>
				<Button title="Higher" onPress={() => nextGuessHandler('higher')} />
				<Button title="Lower" onPress={() => nextGuessHandler('lower')} />
			</Card>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20,
		marginTop: 30,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	}
});
