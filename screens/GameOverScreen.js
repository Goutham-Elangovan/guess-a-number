import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';

const GameOverScreen = (props) => {
	return (
		<View style={styles.gameOverContainer}>
			<TitleText style={styles.text}>Game over!</TitleText>
			<View style={styles.imageContainer}>
				<Image source={require('../assets/images/success.png')} style={styles.image} />
			</View>
			<View style={styles.bodyTextContainer}>
				<BodyText style={styles.finalText}>
                    Computer took <Text style={styles.roundsAndGuess}>{props.numberOfRounds} </Text>
                     { props.numberOfRounds > 1 ?  'rounds' : 'round' } to guess 
                     <Text style={styles.roundsAndGuess}> {props.userChoice}</Text>
                </BodyText>				
			</View>
			<Button title="Play again" onPress={props.playAgain} />
		</View>
	);
};

export default GameOverScreen;

const styles = StyleSheet.create({
	gameOverContainer: {
		flex: 1,
		//justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		marginTop: 20
	},

	imageContainer: {
		width: 300,
		height: 300,
		borderWidth: 4,
		borderRadius: 150,
		borderColor: 'pink',
		overflow: 'hidden',
		marginVertical: 30
	},
	image: {
		height: '100%',
		width: '100%'
	},

	bodyTextContainer: {
		borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 20,
		borderColor: 'red',
		justifyContent: 'space-evenly',
		paddingVertical: 20
        
	},
    finalText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    roundsAndGuess: {
        fontSize: 25,        
        color: Colors.primary
    }
});
