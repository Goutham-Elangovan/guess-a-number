import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BodyText = (props) => {
    return (
        <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
    )
}

export default BodyText

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',        
    }

})
