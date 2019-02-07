import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import VisiomaticPanel from '../Visiomatic/Panel'
import Header from '../Header/Header';
import {Toolbar} from 'primereact/toolbar';
import { Button } from 'primereact/button';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      image: 'v159494-fg-focalplane-summary.ptif',
      images: [
        'v159494-fg-focalplane-summary.ptif',
        'v12456-fy-focalplane-summary.ptif',
        'v166969-fy-focalplane-summary.ptif',
        'v161984-fy-focalplane-summary.ptif',
        'v174549-fi-focalplane-summary.ptif',
        'v167899-fy-focalplane-summary.ptif',
        'v174602-fi-focalplane-summary.ptif',
        'v32678-fz-focalplane-summary.ptif',
        'v37648-fy-focalplane-summary.ptif',
        'v8027-fz-focalplane-summary.ptif',
      ]
    }
  }

  componentDidMount() {
    // this.interval = setInterval(this.onChangeImage, 20000);
  }

  componentWillUnmount() {
    this.interval.clearInterval();
  }

  onChangeImage = () => {
    const id = Math.floor(Math.random() * 10);
    this.setState({image: this.state.images[id]})
  }

  render() {
     return (
      <div className="layout-wrapper">
        <Header />
        <div className="layout-content">
          <VisiomaticPanel image={this.state.image}/>
        </div>
      </div>
    );
  }
}

export default App;
