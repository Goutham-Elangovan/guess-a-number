import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18

    }
})
