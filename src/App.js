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

class App extends Component{ 

  state = {
    displayValue: '1',
  }

  addDigit = displayValue => {
    this.setState({displayValue})
  }

  clear = () => {
    this.setState({displayValue:'0'})
  }

  setOperation = operation => {}

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
