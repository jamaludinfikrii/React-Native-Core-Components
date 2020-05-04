import React from 'react'
import {View,Text, Button} from 'react-native'
import styles from './counterAppStyles'

class CounterApp extends React.Component{
  state = {counter : 0}

  render(){
    return(
      <View style={styles.container}>
        <Text>Hello World</Text>
        <View style={styles.counterSectionContainer}>
          <Button title='kurangi' onPress={ () => this.setState({counter : this.state.counter -1}) }/>
          <Text style={styles.counterText}>
            {this.state.counter}  
            {/* {console.log(this.state.counter)}  */}
          </Text>
          <Button title='tambah' onPress={ () => this.setState({counter : this.state.counter +1}) }/>
        </View>
      </View>
    )
  }
}


export default CounterApp