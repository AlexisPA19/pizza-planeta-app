import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Carrito extends Component {
  constructor () {
    super();
    this.state = {
        pizzas: [
            {pizzaId:1, nomPizza:'Hawaiana', descripPizza:'Piña y jamón', tamPiza:'Grande', tipoMasa:'Queso', Precio:200},
            {pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', Precio:200}
        ]
    }
}
  render() {
    return (
        <div className="Carrito">
            {
                    this.state.pizzas.map(pizza => {
                        return(
                            <div className="row">
                              <div className="col">{pizza.nomPizza}</div>
                              <div className="col">{pizza.descripPizza}</div>
                              <div className="col">{pizza.tamPiza}</div>
                              <div className="col">{pizza.tipoMasa}</div>
                              <div className="col">{pizza.Precio}</div>
                              <div className="col"><button className="btn">Eliminar</button></div>
                            </div>
                        )
                    })
                }
                <div className="row">
                  <div className="col">
                    <Link className="btn" to={'/'}>Seguir comprando</Link>
                  </div>
                  <div className="col">
                    <Link className="btn" to={'/datosCompra'}>Proceder con la compra</Link>
                  </div>
                </div>
        </div>
    );
  }
}

export default Carrito;