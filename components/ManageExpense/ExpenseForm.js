import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function ExpenseForm() {

    function amountChangeHandler() {

    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputContainer}>
                <Input
                    label={"Amount"}
                    keyboardType="number-pad"
                    onChangeText={amountChangeHandler}
                    style={styles.rowInput}
                />
                <Input
                    label={"Date"}
                    placeholder="YYYY-MM-DD"
                    maxLength={10}
                    onChangeText={() => { }}
                    style={styles.rowInput}
                />
            </View>
            <Input
                label={"Description"}
                multiline={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        marginTop:40,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        marginVertical:20
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowInput:{
        flex:1
    }
})