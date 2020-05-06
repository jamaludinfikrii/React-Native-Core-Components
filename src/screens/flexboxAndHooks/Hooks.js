import React,{useState,useEffect} from 'react'
import { View,Text, Button, SafeAreaView, FlatList } from "react-native"
import Axios from 'axios'


// HOOKS

// CLASS COMPONENT , FUNCTIONAL COMPONENT
// STATEFULL COMPONENT, STATELESS COMPONENT

// React Update 16 ==> REACT HOOKS
// FUNCTIONAL COMPONENT ==> STATEFULL COMPONENT




const Hooks = () => {
    // const [nama,setNama] = useState('Fikri')
    // const [email,setEmail] = useState('fikri@gmail.com')

    const [dataProduct,setDataProduct] = useState(null)
    const [dataUser,setDataUser] = useState({nama : "fikri", email : "fikri@gmail.com"})

    // useEffect( function, deps / state )
    // componentDidUpdate
    useEffect( () => console.log("jalan") , [dataUser.email] )

    // componentDidMount (ketriger sekali setelah render)
    useEffect( () => {
        getDataProduct();    
    } , [] )


    const getDataProduct = () => {
        Axios.get('https://api.komputer-shop.com/products')
        .then((res) => {
            console.log(res.data)
            setDataProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    


    // const  [state,functionUntukUbahState] = useState('initial_value')

    if(dataProduct === null){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    Loading ...
                </Text>
            </View>
        )
    }

    return (
       <SafeAreaView>
           <FlatList 
                data={dataProduct}
                renderItem ={({item}) => {
                    return (
                        <View>
                            <Text>{item.nama_produk}</Text>
                            <Text>{item.harga}</Text>
                        </View>
                    )
                }}
                keyExtractor = {(item) => String(item.id)}

           />
       </SafeAreaView>
    )
}

export default Hooks;