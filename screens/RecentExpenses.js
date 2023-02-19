import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

export default function RecentExpenses() {
    const {expenses,setExpenses} = useContext(ExpensesContext);
    // const [fetchedExpenses,setFetchedExpenses] = useState([]);
    useEffect(()=>{
        async function getExpenses(){
            const expenses = await fetchExpenses();
            setExpenses(expenses);
        }
        getExpenses();
    },[])
    const recentExpenses = expenses.filter((expense)=>{
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);
        return (expense.date >= date7DaysAgo) && (expense.date <=today);
    });
    // console.log(recentExpenses);
    return (
        <ExpensesOutput fallBackText={"No expense registered for last 7 days"} expenses={recentExpenses} expensesPeriod={"Last 7 Days"}/>
    )
}

const styles = StyleSheet.create({})