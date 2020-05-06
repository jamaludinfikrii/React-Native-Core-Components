import React, { useState } from 'react'
import {FlatList, SafeAreaView, TextInput, View, Button, Alert } from 'react-native'
import TodoItem from './TodoItem'


const TodoList = () => {
    const [data,setData] = useState([
        {id : 1,todo : "Makan",done : false},
        {id : 2,todo : "Beli Buku",done : true},
        {id : 3,todo : "Jalan Jalan",done : false},
    ])

    const [newTodo , setNewTodo] = useState('')

    const onBtnSubmitPress = () => {
        const newData = {id : data[data.length-1].id + 1, todo : newTodo,done : false}
        setData([...data,newData])
        setNewTodo('')
    }

    const onTodoTextPress = (index) => {
        let newArr = [...data]; 
        newArr[index].done = true; 

        setData(newArr); 
    }

    return (
        <SafeAreaView>
                <FlatList 
                    data={data}
                    renderItem = {({item,index}) => {
                       return <TodoItem onTodoTextPress={() =>onTodoTextPress(index)} todo={item.todo} done={item.done}/>
                    }}
                    keyExtractor = { (item) => String(item.id)}
                />

                <View style={{flexDirection : "row",paddingHorizontal:20,alignItems : "center",marginTop : 20}}>
                    <TextInput 
                        placeholder='Masukan Todo' 
                        style={{borderBottomColor:'grey',borderBottomWidth:1,paddingBottom:5,marginHorizontal:10,flex:1}}
                        onChangeText = {(text) => setNewTodo(text)} 
                        value={newTodo}
                    />
                    <Button onPress={onBtnSubmitPress} title='Submit' />
                </View>

        </SafeAreaView>
    )
}

export default TodoList
