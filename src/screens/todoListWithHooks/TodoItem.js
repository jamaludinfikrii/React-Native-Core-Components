import React from 'react'
import { View, Text, Button } from 'react-native'

const TodoItem = (props) => {
    return (
        <View style={{flexDirection:"row", justifyContent : "space-between",paddingHorizontal : 20,marginTop : 10, 
        borderBottomWidth : 1,borderBottomColor : 'grey',paddingBottom :5}}>
            <Text onPress={props.onTodoTextPress} style={{flex : 3}}>{props.todo}</Text>
            <Text style={{color : "green",fontWeight : "500",flex:1}}>{props.done ? 'V' : null}</Text>
            <View style={{flex:2,paddingHorizontal:1}}>
                <Button title='delete' />
            </View>
            <View style={{flex:2,paddingHorizontal:1}}>
                <Button title='edit' />
            </View>
        </View>
    )
}

export default TodoItem