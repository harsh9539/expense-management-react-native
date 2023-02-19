import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
import Button from './Button'

export default function ErrorOverlay({message,onConfirm}) {
    
    return (
        <View style={styles.container}>
            <Text style={[styles.text,styles.title]}>An error Occured</Text>
            <Text style={styles.text}>{message}</Text>
            <Button onPress={onConfirm}>OKAY</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700
    },
    text:{
        textAlign:'center',
        color:'white',
        marginBottom:0
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    message:{

    }
})