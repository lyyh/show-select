import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Select from './components/select/Select'
import Option from './components/select/Option'
class App extends Component {
  render() {
    return (
      <Select>
        <Option
          disable='false'
          value='1'
          key='1'
          title='title'
        />
      </Select>
    )
  }
}

export default App;
