import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TitleText = (props) => {
    return (
        <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
    )
}

export default TitleText

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }

})
