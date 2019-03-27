import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './facturaPDF.css';

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
            <br/>
            <h5>Descarga tu comprobante</h5>
            <br/>
            <a href="">
              <img src="https://github.com/AlexisPA19/pizza-planeta-app/blob/master/public/iconfinder_pdfs_774684.png?raw=true"/>
              <img src="https://github.com/AlexisPA19/pizza-planeta-app/blob/master/public/iconfinder_24_171492.png?raw=true"/>
            </a>
          </div>
    );
  }
}

export default FacturaPDF;