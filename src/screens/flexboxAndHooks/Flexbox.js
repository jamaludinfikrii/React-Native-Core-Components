import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

// Flexbox ada parent dan child
// flex ==> flex-direction, justify-content, align-items, flex
// Justify Content VS Align Item
// Justify-content depend on flex-direction
// Align item itu kebalikan dari flex-direction

const AlignSelf = () => {
    return(
        <View style={{flex:1,padding:20,alignItems : "flex-end"}}>
            <View style={{height : 50,width : 100, backgroundColor : 'red',alignSelf : "flex-start"}}></View>
            <View style={{height : 50,width : 150, backgroundColor : 'orange'}}></View>
            <View style={{height : 50,width : 50, backgroundColor : 'green'}}></View>
        </View>

    )
}


const FlexWrap = () => {
    return(
        <View style={{flex : 1,alignContent : "center",flexWrap:"wrap"}}>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>
            <View style={{borderWidth : 1, borderColor : "red",height : 100, width : 50}}></View>

        </View>
    )
}

const Flexbox = () => {
    return (
        <SafeAreaView style={{flex:1}}>
            {/* <View style={{flex:1,padding:20}}>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:20}}>
                        Flex
                    </Text>
                </View>
                <View style={{flex:1,backgroundColor:'red',flexDirection : "row",padding : 20}}>
                    <View style={{flex: 1,backgroundColor : "white"}}>
                        <Text>Box1</Text>
                    </View>
                    <View  style={{flex: 1,backgroundColor : "orange"}}>
                        <Text>Box2</Text>
                    </View>
                    <View  style={{flex: 2,backgroundColor : "blue"}}>
                        <Text>Box3</Text>
                    </View>
                    <View  style={{flex: 4,backgroundColor : "green"}}>
                        <Text>Box4</Text>
                    </View>

                </View>
                <View style={{flex:2,backgroundColor:'orange'}}>

                </View>
                <View style={{flex:4,backgroundColor:'green'}}>

                </View>

            </View> */}
            {/* <AlignSelf /> */}
            <FlexWrap/>
        </SafeAreaView>
    )
}

export default Flexbox
