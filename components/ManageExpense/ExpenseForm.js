import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../UI/Button';
import { GlobalStyles } from '../../constants/styles';

export default function ExpenseForm({onSubmit,onCancel,isEditing,defaultValues}) {
    const [inputValues, setInputValues] = useState({
        amount: {value:defaultValues ? defaultValues.amount.toString() : '',isValid:true},
        date: {value:defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',isValid:true},
        description: {value:defaultValues ? defaultValues.description : '',isValid:true}
    });


    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: {value:enteredValue,isValid:true}
            }
        })
    }
    function submitHandler(){
        const expenseData ={
            amount:  +inputValues.amount.value,//this + sign convert this amount into number
            date: new Date(inputValues.date.value),
            description:inputValues.description.value
        };
        const amountIsValid =!isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if(amountIsValid && dateIsValid && descriptionIsValid)
        onSubmit(expenseData);
        else{
            console.log("ye kya hai bhai");
            setInputValues((curInputValues)=>{
                return{
                    amount:{value:curInputValues.amount.value,isValid:amountIsValid},
                    date:{value:curInputValues.date.value,isValid:dateIsValid},
                    description:{value:curInputValues.description.value,isValid:descriptionIsValid}
                }
            })
        }
    }
    const formIsValid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid;
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputContainer}>
                <Input
                    label={"Amount"}
                    keyboardType="number-pad"
                    style={styles.rowInput}
                    inValid={!inputValues.amount.isValid}
                    onChangeText={inputChangeHandler.bind(this, 'amount')}
                    value={inputValues.amount.value}
                />
                <Input
                    label={"Date"}
                    placeholder="YYYY-MM-DD"
                    maxLength={10}
                    inValid={!inputValues.date.isValid}
                    onChangeText={inputChangeHandler.bind(this, 'date')}
                    value={inputValues.date.value}
                    style={styles.rowInput}
                />
            </View>
            <Input
                label={"Description"}
                multiline={true}
                inValid={!inputValues.description.isValid}
                onChangeText={inputChangeHandler.bind(this, 'description')}
                value={inputValues.description.value}
            />
            {formIsValid && <Text style={styles.errorText}>Invalid values - please check your data</Text>}
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
    errorText:{
        textAlign:'center',
        color:GlobalStyles.colors.error500,
        margin:8
    }
})