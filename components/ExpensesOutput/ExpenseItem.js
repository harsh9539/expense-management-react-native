import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'
import { getFormatDate } from '../../util/date'
import { useNavigation } from '@react-navigation/native'

export default function ExpenseItem({id,description,amount,date}) {
    // console.log(id);
    const navigation = useNavigation();
    function expensePressHandler(){
        navigation.navigate("ManageExpense",{
            expenseId:id
        });
    }

    return (
        <Pressable 
        style={({pressed})=> pressed && styles.presses}
        onPress={expensePressHandler}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={[styles.textBase,styles.description]}>{ description.length > 30 ? description.slice(0,20) + "..." : description}</Text>
                    <Text style={styles.textBase}>{getFormatDate(date)}</Text>
                </View>
                <View style={styles.amountConatiner}>
                    <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    presses:{
        opacity:0.75
    },
    expenseItem:{
        padding:12,
        marginVertical:8,
        backgroundColor:GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        elevation:3,
        shadowColor:GlobalStyles.colors.gray500,
        shadowRadius:4,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4
    },
    textBase:{
        color:'white'
    },
    description:{
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold',
    },
    amountConatiner:{
        paddingHorizontal:12,
        paddingVertical:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        minWidth:80
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:'bold'
    }
})