import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import './App.css'
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
    console.log(this.state.result);
 
    return(
      <>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <h1>{this.state.result}</h1>
      </>
    )
  }
}

export default App;
