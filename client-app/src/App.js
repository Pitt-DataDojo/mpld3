import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mpld3Data: null
    }
  }

  componentDidMount(){
    const refThis = this;
    axios.get("http://127.0.0.1:5000/api/dataviz").then((res) => {
      refThis.setState({mpld3Data: res.data});
    });
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.mpld3Data != this.state.mpld3Data){
      window.mpld3.draw_figure(this.state.mpld3Data.id, this.state.mpld3Data);
    }
  }


  render() {
    const chartStyle = {
      backgroundColor: "white"
    }
    return (
      <div className="App">
        <header className="App-header">

        {this.state.mpld3Data && <div style ={chartStyle} id={this.state.mpld3Data.id}></div>}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
