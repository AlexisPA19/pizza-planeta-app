import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './pizza_component.css';

class PizzaComponent extends Component {
  constructor(props){
    super(props);
    this.pizzaId = props.pizzaId;
    this.nomPizza = props.nomPizza;
    this.urlImg = props.urlImg;
  }
  render() {
    return (

          <div className="pizzaComponent">
            <div className="row">
              <div className="col">
                <img src={this.urlImg} className="img-thumbnail" id="img-pizza"/> 
              </div>
            </div>
            <div className="row">
              <div className="col">
                <br/>
                <Link className="btn btn-light" to={'/personalizaPizza'}>Seleccionar</Link>
              </div>
            </div>
          </div>

      
    );
  }
}

export default PizzaComponent;