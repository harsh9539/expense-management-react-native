import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function ExpenseForm() {

    function amountChangeHandler(){

    }
    return (
        <View>
            <Input
            label={"Amount"}
            keyboardType="number-pad"
            onChangeText={amountChangeHandler}
            />
            <Input
            label={"Date"}
            placeholder="YYYY-MM-DD"
            maxLength={10}
            onChangeText={()=>{}}
            />
            <Input
            label={"Description"}  
            multiline={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({})