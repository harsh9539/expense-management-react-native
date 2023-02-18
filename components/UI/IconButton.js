import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons"



export default function IconButton({name,size,color,onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={name} size={size} color={color}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:10,
        marginVertical:2
    },
    pressed:{
        opacity:0.6
    }
})