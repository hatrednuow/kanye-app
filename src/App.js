import React, { Component } from "react";
import icon from './assets/images/icon.png';
import './App.css';

import Getquote from './Quote';
import Myquote from './Myquote';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={icon} className="App-logo" alt="Kanye-West Quotes" />
          <Getquote />
          <Myquote />
        </header>
      </div>
    );
  }
}
