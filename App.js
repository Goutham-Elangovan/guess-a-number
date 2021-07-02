import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';


//process of fetching our custom fonts
const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
	const [ guessRounds, setIsGuessRounds ] = useState(0);
	const [ dataLoaded, setDataLoaded ] = useState(false);

	if (!dataLoaded) {
		//AppLoading is used to load something inside the startAsync prop first and then load the rest of the component. startAsync prop should always be a method which returns a promise. 
    return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	const onStartGameHandler = (userInput) => {
		setUserNumber(userInput);
		setIsGuessRounds(0);
	};

	const gameOverHandler = (numOfRounds) => {
		setIsGuessRounds(numOfRounds);
	};

	const playAgainGameHandler = () => {
		setIsGuessRounds(0);
		setUserNumber(null);
	};

	let screen = <StartGameScreen onStartGame={onStartGameHandler} />;
  //let screen = <GameOverScreen numberOfRounds={45} userChoice={56} playAgain={playAgainGameHandler}/>
	if (userNumber && guessRounds <= 0) {
		screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
	} else if (guessRounds > 0) {
		screen = (
			<GameOverScreen numberOfRounds={guessRounds} userChoice={userNumber} playAgain={playAgainGameHandler} />
		);
	}

	return (
		<View style={styles.container}>
			<Header title="Guess a number" />
			{screen}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
