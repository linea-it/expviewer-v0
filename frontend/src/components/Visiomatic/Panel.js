import React, { Component } from 'react';
import 'primeflex/primeflex.css';
import './Viewer.css';
import {Toolbar} from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { uniqueId } from 'lodash'
class VisiomaticPanel extends Component {

  constructor(props){
    super(props);

    this.state = this.initialState

    this.id = uniqueId("visiomatic-container-")

    // Instancia do Visiomatic linkado com a div
    this.visiomatic = null;

    // Verificar se a lib Aladin esta disponivel
    if (window.L) {
      this.libL = window.L;
      console.log("Leaflet Carregado")
    } else {
      console.log("Leaflet NÃO CARREGADO!")
    }      
  }

  get initialState() {
    return {};
  }

  componentDidMount() {
    console.log("Visiomatic - DidMount")

    const map = this.libL.map(this.id, 
      {fullscreenControl: true, zoom: 1});
    
    this.libL.control.scale.wcs({pixels: false}).addTo(map);
    this.libL.control.reticle().addTo(map);
    
    var wcsControl = this.libL.control.wcs({
      coordinates: [{label: 'RA,Dec', units: 'HMS'}],
      position: 'topright'
    }).addTo(map);

    //var url = 'https://desportal.cosmology.illinois.edu:8080/visiomatic?FIF=data/releases/desarchive/OPS/multiepoch/Y3A1/r2577/DES0223-1958/p01/qa/DES0223-1958_r2577p01.ptif&CNT=0.7&GAM=0.3571&CTW=-0.17360014137426552,-0.1468986152782014,-0.17360014137426552,0.4748051237315408,0.8680007068713278,0;-0.17360014137426552,0.11278933738126469,0.8680007068713278,0.11278933738126469,-0.17360014137426552,0;0.8680007068713278,0.4748051237315408,-0.17360014137426552,-0.1468986152782014,-0.17360014137426552,0&JTL=3,15'
    // var url = 'http://localhost:7001/iipserver/?FIF=output_image.tif&WID=2000&CVT=jpeg'
    var url = `${window.origin}/iipserver?FIF=teste.ptif&WID=2000&CVT=jpeg`

    const layer = this.libL.tileLayer.iip(url, {}).addTo(map)

  }

  onBack = () => {
    const history = this.props.history;
    history.push({ pathname: `/` });
  };

  render() {
    // Ajuste no Tamanho do container
    return (
      <div id={this.id} className="visiomatic-container" style={{width: '100vw', height:'calc(100vh - 52px)'}}></div>
    )
  }
}

export default VisiomaticPanel;
