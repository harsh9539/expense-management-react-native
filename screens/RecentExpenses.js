import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

export default function RecentExpenses() {
    const {expenses} = useContext(ExpensesContext);
    
    const recentExpenses = expenses.filter((expense)=>{
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);
        return (expense.date >= date7DaysAgo) && (expense.date <=today);
    });
    return (
        <ExpensesOutput fallBackText={"No expense registered for last 7 days"} expenses={recentExpenses} expensesPeriod={"Last 7 Days"}/>
    )
}

const styles = StyleSheet.create({})