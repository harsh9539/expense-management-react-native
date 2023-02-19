import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { storeExpense, deleteExpenseHandle,updateExpenseHdandler } from '../util/http';

export default function ManageExpenses({ route, navigation }) {
    // console.log(route.params);
    const { expenses, addExpense, deleteExpense, updateExpense } = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    console.log("edited Expense id " + editedExpenseId);
    const isEditing = !!editedExpenseId;

    const selectedExpense = expenses.find(expense => expense.id === editedExpenseId);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : "Add Expense"
        });
    }, [navigation, isEditing]);
    async function deleteExpenseHandler() {
        console.log(editedExpenseId)
        await deleteExpenseHandle(editedExpenseId)
        deleteExpense(editedExpenseId);
        navigation.goBack();

    }
    function cancelHandler() {
        navigation.goBack();
    }
    async function confirmHandler(expenseData) {
        if (isEditing) {
            updateExpense(editedExpenseId, expenseData);
            await updateExpenseHdandler(editedExpenseId,expenseData);
        }
        else {
            const id = await storeExpense(expenseData);
            addExpense({ ...expenseData, id: id });
        }
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ExpenseForm
                onCancel={cancelHandler}
                onSubmit={confirmHandler}
                isEditing={isEditing}
                defaultValues={selectedExpense}
            />
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
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
})