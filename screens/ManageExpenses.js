import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

export default function ManageExpenses({ route, navigation }) {
    // console.log(route);
    const { addExpense, deleteExpense, updateExpense } = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : "Add Expense"
        });
    }, [navigation, isEditing]);
    function deleteExpenseHandler() {
        console.log(editedExpenseId)
        deleteExpense(editedExpenseId);
        navigation.goBack();

    }
    function cancelHandler() {
        navigation.goBack();
    }
    function confirmHandler() {
        if (isEditing) updateExpense(
            editedExpenseId,
            {
                description: "Test!!!!!",
                amount: 19.99,
                date: new Date('2023-02-17')
            }
        ); 
        else addExpense(
            {
                description: "Test",
                amount: 19.99,
                date: new Date('2023-02-17')
            }
            );
        navigation.goBack();

    }
    return (
        <View style={styles.container}>
            <ExpenseForm/>
            <View style={styles.buttons}>
                <Button style={styles.button} mode={"flat"} onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
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
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
})