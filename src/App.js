import React, { Component } from 'react';
import Screen from './components/Screen';
import Features from './components/Features';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super();
    this.state = {
      sum: 0,
      was: null,
      operator: null,
      cipher: false,
    }
  }
  // 数字累加
  handleAdd(e) {
    if( this.state.operator ) {
      this.setState({
        was: this.state.was * 10 + e
      })
    }else if(!this.state.operator && this.state.cipher) {
      this.setState({
        sum: 0  + e ,
        cipher: false,
      })
    }else {
      this.setState({
        sum: this.state.sum * 10 + e
      })
    }
  }
  // 计算最终值
  handleEqual(e) {
    if(this.state.operator === '+' && e === '=') {
      this.setState({
        sum: this.state.sum + this.state.was,
        was: null,
        operator: null,
        cipher: true,
      })
    }else if(this.state.operator === '-' && e === '=') {
      this.setState({
        sum: this.state.sum - this.state.was,
        was: null,
        operator: null,
        cipher: true,
      })
    }else if(this.state.operator === '*' && e === '=') {
      this.setState({
        sum: this.state.sum * this.state.was,
        was: null,
        operator: null,
        cipher: true,
      })
    }else if(this.state.operator === '/' && e === '=') {
      this.setState({
        sum: Math.round(this.state.sum / this.state.was),
        was: null,
        operator: null,
        cipher: true,
      })
    }else {
      if(e !== '=') {
        this.setState({
          operator: e
        })
      }
    }  
  }
  // 大的计算
  handleGetSum(e) {
    if( e === '重置' ) {
      this.setState({
        sum: 0,
        was: null,
        operator: null,
      })
      return
    }else {
      if( typeof e === 'string' ) {
        this.handleEqual(e);
      }else if( typeof e === 'number' ) {
        this.handleAdd(e);
      }
    } 
  }
  render() {
    return (
      <div className="App">
        <div style={{textAlign: 'center'}}>
          <h2>简易计算器</h2>
        </div>
        <Screen sum={this.state.sum} operator={this.state.operator} was={this.state.was}/>
        <Features getSum={this.handleGetSum.bind(this)} />
        <div style={{color: 'red',marginTop:'1rem'}}>
          注：当前计算器只处理整数，不是整数的四舍五入
        </div>
      </div>
    );
  }
}

export default App;
