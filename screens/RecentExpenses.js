import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

export default function RecentExpenses() {
    const {expenses,setExpenses} = useContext(ExpensesContext);
    const [isFetching,setIsFetching] = useState(true);
    const [error,setError] = useState();
    useEffect(()=>{
        async function getExpenses(){
            setIsFetching(true);
            try {
                const expenses = await fetchExpenses();                
                setExpenses(expenses);
            } catch (error) {
                console.log(error);
                setError("Could not fetch expenses!");
            }
            setIsFetching(false);
        }
        getExpenses();
    },[])
    
    if(error && !isFetching){
        return <ErrorOverlay message={error} onConfirm={()=>{console.log("Hello");setError(null)}}/>
    }
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