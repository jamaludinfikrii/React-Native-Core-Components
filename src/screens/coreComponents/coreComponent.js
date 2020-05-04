import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Button, Picker, Switch, FlatList } from 'react-native'

const data = [
    {id : 1, todo : "Makan" , done : false},
    {id : 2, todo : "Belanja" , done : true},
    {id : 3, todo : "Potong Rambut" , done : false},
    {id : 4, todo : "Belajar" , done : false},
]


class CoreComponent extends Component {
    state ={
        selectedValuePicker : 'jawa_tengah',
        is_switched : false
    }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>Text Component</Text>
                    <TextInput 
                        style ={{borderBottomWidth : 1,borderBottomColor:'grey'}}
                        placeholder ='Enter Your Name'
                        onChangeText= {(text) => {console.log(text)}}
                    />

                    <View style={{marginTop:20,paddingHorizontal:20}}>
                        <Picker 
                            style
                            selectedValue={this.state.selectedValuePicker}
                            onValueChange ={(value) => this.setState({selectedValuePicker : value}) }
                        >
                            <Picker.Item label='Jawa Tengah' value='jawa_tengah' />
                            <Picker.Item label='Jawa Barat' value='jawa_barat' />
                            <Picker.Item label='Jawa Timur' value='jawa_timur' />
                        </Picker>
                    </View>
                    <View style={{flexDirection:"row",justifyContent :"center"}}> 
                        <Text>
                            {
                                this.state.is_switched ? "Hello True" : "Hello False"
                            }
                        </Text>
                    </View>
                    <View style={{marginTop:20 , flexDirection:"row",justifyContent : "center"}}>
                        <Switch  
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.is_switched ? "#f5dd4b" : "#f4f3f4"}
                            value = {this.state.is_switched}
                            onValueChange = {() => this.setState({is_switched : !this.state.is_switched})}
                        />
                    </View>
                    {/* const data = [
    {id : 1, todo : "Makan" , done : false},
    {id : 2, todo : "Belanja" , done : true},
    {id : 3, todo : "Potong Rambut" , done : false},
    {id : 4, todo : "Belajar" , done : false},
] */}

                    <View style={{marginTop : 20,paddingHorizontal:20}}>
                        <FlatList 
                            data={data}
                            renderItem = { ({item}) => {
                                return (
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{flex:1}}>
                                            {item.id}
                                        </Text>
                                        <Text style={{flex:5}}>
                                            {item.todo}
                                        </Text>
                                        <Text style={{flex:1}}>
                                            {item.done ? 'V' : "X"}
                                        </Text>
                                    </View>
                                )
                            }  }
                            
                            keyExtractor={ item => item.id }
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


export default CoreComponent