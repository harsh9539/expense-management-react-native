import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../UI/Button';
import { GlobalStyles } from '../../constants/styles';

export default function ExpenseForm({onSubmit,onCancel,isEditing,defaultValues}) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',
        description: defaultValues ? defaultValues.description : ''
    });


    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        })
    }
    function submitHandler(){
        const expenseData ={
            amount:  +inputValues.amount,//this + sign convert this amount into number
            date: new Date(inputValues.date),
            description:inputValues.description
        };

        onSubmit(expenseData);
    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputContainer}>
                <Input
                    label={"Amount"}
                    keyboardType="number-pad"
                    style={styles.rowInput}
                    onChangeText={inputChangeHandler.bind(this, 'amount')}
                    value={inputValues.amount}
                />
                <Input
                    label={"Date"}
                    placeholder="YYYY-MM-DD"
                    maxLength={10}
                    onChangeText={inputChangeHandler.bind(this, 'date')}
                    value={inputValues.date}
                    style={styles.rowInput}
                />
            </View>
            <Input
                label={"Description"}
                multiline={true}
                onChangeText={inputChangeHandler.bind(this, 'description')}
                value={inputValues.description}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode={"flat"} onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 120,
        marginHorizontal: 8
    },
})