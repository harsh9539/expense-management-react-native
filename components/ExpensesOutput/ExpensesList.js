import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'


function renderExpenseItem(itemData){
    // return <ExpenseItem description={itemData.item.description} date={itemData.item.date} amount={itemData.item.amount}/>
    return <ExpenseItem {...itemData.item}/>
}



export default function ExpensesList({expenses}) {
    return (
        <FlatList
        data={expenses}
        keyExtractor={(item)=>item.id}
        renderItem={renderExpenseItem}
        />
    )
}

const styles = StyleSheet.create({})