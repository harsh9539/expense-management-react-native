import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function RecentExpenses() {
    const {expenses,setExpenses} = useContext(ExpensesContext);
    const [isFetching,setIsFetching] = useState(true);
    useEffect(()=>{
        async function getExpenses(){
            setIsFetching(true);
            const expenses = await fetchExpenses();
            setIsFetching(false);
            setExpenses(expenses);
        }
        getExpenses();
    },[])
    if(isFetching){
        return <LoadingOverlay />
    }
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