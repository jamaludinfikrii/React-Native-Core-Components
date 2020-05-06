import React from 'react'
import { View, Text,Dimensions } from 'react-native'
import getWidthDimension from './getWidthDimension'


const DimensionLayouting = () => {
    return (
        <View style={{flex : 1,justifyContent :"center",alignItems:'center'}}>
            <Text style={{fontSize:getWidthDimension(30)}}>Hello World</Text>
        </View>
    )
}

export default DimensionLayouting


// Class / Hooks
// Responsifitas
// Layout With Flexbox
// Props, State, Lifecycle Method
// Data 

// React Navigation