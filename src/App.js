import React, { Component } from 'react';
import { Table } from './components';
import { layout } from './hoc';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default layout(App);
