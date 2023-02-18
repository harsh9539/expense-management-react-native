import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'


function renderExpenseItem(itemData){
    return <Text>{itemData.item.description}</Text>
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