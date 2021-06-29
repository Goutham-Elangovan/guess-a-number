import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.gameOverContainer}>
            <Text>Game over!</Text>
            <Text>No of rounds: {props.numberOfRounds}</Text>
            <Text>Value entered: {props.userChoice}</Text>
            <Button title='Play again' onPress={props.playAgain}/> 
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    gameOverContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
