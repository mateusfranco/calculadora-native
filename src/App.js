/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Button from './components/Button'
import Display from  './components/Display'

const initalState={
  displayValue:'0',
  operation: null,
  values:[null,null],
  current:0,
  clear: 0,
}

class App extends Component{ 

  state = {...initalState}

  addDigit = displayValue => {
    if(this.displayValue == 0 || this.state.clear) this.setState({displayValue: '' + displayValue })
    else if(this.state.displayValue != 0) displayValue = this.state.displayValue + displayValue 

    this.setState({displayValue, clear:0})
  }

  clear = () => {
    this.setState({...initalState})
  }

  setOperation = operation => {
    let values = this.state.values
    if(this.state.current == 0){
      if(operation == '=') return
      values[this.state.current] = this.state.displayValue
      console.log(values)
      this.setState({values:values, current:1, operation:operation, clear: 1 })
    }else{
      values[1] = this.state.displayValue
      console.log(values)
      let current = 1
      const oldOperation = this.state.operation 
      if(oldOperation == "+") values = [Number(values[0]) + Number(values[1]),null]
      if(oldOperation == "-") values = [values[0] - values[1],null]
      if(oldOperation == "/") values = [values[0] / values[1],null]
      if(oldOperation == "*") values = [values[0] * values[1],null]
      if(operation == "="){
        operation = null
        current = 0  
      }
      console.log(values)
      this.setState({values:values, operation:operation, displayValue:values[0], current:current, clear: 1})
    }
  }

  render(){
    return (
      <View style={styles.middle}>
        <Display value={this.state.displayValue}/>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clear}></Button>
          <Button label='/' operation onClick={() => this.setOperation('/') }></Button>
          <Button label='7' onClick={()=>this.addDigit('7')}></Button>
          <Button label='8' onClick={()=>this.addDigit('8')}></Button>
          <Button label='9' onClick={()=>this.addDigit('9')}></Button>
          <Button label='*' operation onClick={() => this.setOperation('*') }></Button>
          <Button label='4' onClick={()=>this.addDigit('4')}></Button>
          <Button label='5' onClick={()=>this.addDigit('5')}></Button>
          <Button label='6' onClick={()=>this.addDigit('6')}></Button>
          <Button label='-' operation onClick={() => this.setOperation('-') }></Button>
          <Button label='1' onClick={()=>this.addDigit('1')}></Button>
          <Button label='2' onClick={()=>this.addDigit('2')}></Button>
          <Button label='3' onClick={()=>this.addDigit('3')}></Button>
          <Button label='+' operation onClick={() => this.setOperation('+') }></Button>
          <Button label='0' double onClick={()=>this.addDigit('0')}></Button>
          <Button label='.' onClick={()=>this.addDigit('.')}></Button>
          <Button label='=' operation onClick={() => this.setOperation('=') }></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  middle: {
    flex: 1,
    backgroundColor: '#f3f1fa',
  },
  buttons:{
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default App;
