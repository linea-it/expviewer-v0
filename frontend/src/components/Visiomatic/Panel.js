import React, { Component } from 'react';
import 'primeflex/primeflex.css';
import './Viewer.css';
import { uniqueId } from 'lodash'
import PropTypes from 'prop-types';
class VisiomaticPanel extends Component {

  static propTypes = {
    image: PropTypes.string
  };

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
    const map = this.libL.map(this.id, 
      {fullscreenControl: true, zoom: 1});
    
    this.libL.control.scale.wcs({pixels: false}).addTo(map);
    this.libL.control.reticle().addTo(map);
    
    var wcsControl = this.libL.control.wcs({
      coordinates: [{label: 'RA,Dec', units: 'HMS'}],
      position: 'topright'
    }).addTo(map);

    this.map = map;

    this.changeImage();
  }

  componentDidUpdate(nextProps){
    this.changeImage();
  };


  changeImage=async ()=>{
    if (this.props.image) {  

      if (this.layer) {
        this.map.removeLayer(this.layer)
      }

      var url = `http://localhost/iip?FIF=img2.tif&WID=256&CVT=jpeg&RGN=0.25,0,0.1,0.1`
      var url2 = `http://localhost/iip?FIF=img.tif&WID=256&CVT=jpeg&RGN=0.25,0,0.1,0.1`

      this.layer = this.libL.tileLayer.iip(url, {}).addTo(this.map)
      console.log(this.libL.tileLayer.iip(url, {}))
      var layer2 = this.libL.tileLayer.iip(url2, {})
      layer2.addTo(this.map)
      console.log(layer2)
      console.log(layer2.createTile)
    }

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
