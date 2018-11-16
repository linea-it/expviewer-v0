import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import VisiomaticPanel from '../Visiomatic/Panel'
import Header from '../Header/Header';

class App extends Component {
  render() {
 
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="layout-content">
          <VisiomaticPanel />
        </div>
      </div>
    );
  }
}

export default App;
