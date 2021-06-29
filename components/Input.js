import React from 'react'
import { TextInput, StyleSheet, Text, View } from 'react-native'

const Input = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    )
}

export default Input

const styles = StyleSheet.create({
   input: {
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    marginVertical: 10
   }
})
 