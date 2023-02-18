import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'


const DUMMY_EXPENSES = [
    {
        id:'e1',
        description:'A pair of Shoes',
        amount: 59.99,
        date: new Date('2022-01-19')
    },
    {
        id:'e2',
        description:'A pair of trousers',
        amount: 39.99,
        date: new Date('2021-01-19')
    },
    {
        id:'e3',
        description:'Some Bananas',
        amount: 5.99,
        date: new Date('2022-06-19')
    },
    {
        id:'e4',
        description:'A book',
        amount: 29.99,
        date: new Date('2022-09-19')
    },
    {
        id:'e5',
        description:'Keyboard',
        amount: 89.99,
        date: new Date('2022-12-19')
    },
    {
        id:'e6',
        description:'A pair of Shoes',
        amount: 59.99,
        date: new Date('2022-01-19')
    },
    {
        id:'e7',
        description:'A pair of trousers',
        amount: 39.99,
        date: new Date('2021-01-19')
    },
    {
        id:'e8',
        description:'Some Bananas',
        amount: 5.99,
        date: new Date('2022-06-19')
    },
    {
        id:'e9',
        description:'A book',
        amount: 29.99,
        date: new Date('2022-09-19')
    },
    {
        id:'e10',
        description:'Keyboard',
        amount: 89.99,
        date: new Date('2022-12-19')
    },
]


export default function ExpensesOutput({expenses,expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }

})