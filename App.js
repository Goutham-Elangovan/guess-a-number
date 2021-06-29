import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
  const [ guessRounds, setIsGuessRounds] = useState(0)
  

	const onStartGameHandler = (userInput) => {
		setUserNumber(userInput);
    setIsGuessRounds(0);
	};

  const gameOverHandler =  (numOfRounds) => {
    setIsGuessRounds(numOfRounds);

  }

  const playAgainGameHandler = () => {
    setIsGuessRounds(0);
    setUserNumber(null);
  }

	let screen = <StartGameScreen onStartGame={onStartGameHandler} />;
	if (userNumber && guessRounds <= 0) {
		screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
	}
  else if (guessRounds > 0) {
    screen = <GameOverScreen numberOfRounds={guessRounds} userChoice={userNumber} playAgain={playAgainGameHandler}/>
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
		flex: 1,
  
	}
});
