import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

export default function Input({label,style,inValid,...textInput}) {
    let inputStyles = [styles.input];

    if(textInput&&textInput.multiline){
        inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={[styles.inputContainer,style]}>
            <Text style={[styles.label, inValid && styles.inValidLabel]}>{label}</Text>
            <TextInput style={[inputStyles,inValid && styles.inValidInput]} {...textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8,
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input:{
        backgroundColor:GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:18,
        color:GlobalStyles.colors.primary700
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    inValidLabel:{
        color:GlobalStyles.colors.error500,
    },
    inValidInput:{
        backgroundColor:GlobalStyles.colors.error50
    }
})