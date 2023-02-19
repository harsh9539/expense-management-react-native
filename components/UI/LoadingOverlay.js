import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color="white" />
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
    }
})