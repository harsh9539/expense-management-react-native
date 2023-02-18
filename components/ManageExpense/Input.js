import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label,...textInput}) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({})