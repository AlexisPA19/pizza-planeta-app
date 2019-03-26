import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './pizza_component.css';

class FacturaPDF extends Component {
  constructor(props){
    super(props);
    this.pizzaId = props.pizzaId;
    this.nomPizza = props.nomPizza;
    this.urlImg = props.urlImg;
  }
  render() {
    return (

          <div className="facturaPDF">
            <h1>¡Tu compra fue generada exitosamente!</h1>
            <h5>Descarga tu comprobante</h5>
            <svg-icon><src href="svg/si-glyph-bed.svg"/></svg-icon>
            <span className="glyphicon glyphicon-download-alt"></span>
          </div>
    );
  }
}

export default FacturaPDF;