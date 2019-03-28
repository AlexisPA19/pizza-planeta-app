import React, { Component } from 'react';
import logo from './logo.svg';
import './carrito.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaCarritoComponent from './pizzaCarritoComponent';
import _ from 'lodash';

import firebase from 'firebase';
import {DB_CONFIG} from './config/config'; 
import 'firebase/database'; 


class Carrito extends Component {
  constructor () {
    super();
    this.state = {
        pizzas: [
            //{pizzaId:1, nomPizza:'Hawaiana', descripPizza:'Piña y jamón', tamPiza:'Grande', tipoMasa:'Queso', cant:1, Precio:200},
            //{pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso',cant:2, Precio:200},
            //{pizzaId:3, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', cant:3,Precio:200}
        ]
    };
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('Compras');
}
componentDidMount(){
  const { pizzas } = this.state;
  this.db.on('child_added', snap => {
    pizzas.push({
      pizzaId: snap.key,
      nomPizza: snap.val().nomPizza,
      descripPizza: snap.val().descripPizza,
      tamPiza: snap.val().tamPiza,
      tipoMasa: snap.val().tipoMasa,
      cant: snap.val().cant,
      Precio: snap.val().Precio

    })
    this.setState({pizzas});
  });
}

_getTotal(){
  return _.sumBy(this.state.pizzas, function(o) { return o.Precio*o.cant; });;
}
  render() {
    return (
        <div className="Carrito">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Ingredientes</th>
                <th>Tamaño</th>
                <th>Masa</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
                    this.state.pizzas.map(pizza => {
                        return(
                         <PizzaCarritoComponent key={pizza.pizzaId} nomPizza={pizza.nomPizza} descripPizza={pizza.descripPizza} tamPizza={pizza.tamPiza} tipoMasa={pizza.tipoMasa} cant={pizza.cant} Precio={pizza.Precio}/>
                        )
                    })
            }
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>$ {this._getTotal()}</td>
            </tbody>
          </table>
                <div className="row">
                  <div className="col">
                    <Link id="boton" className="btn btn-default" to={'/'}>Seguir comprando</Link>
                  </div>
                  <div className="col">
                    <Link  id="boton" className="btn btn-default" to={'/datosCompra'}>Proceder con la compra</Link>
                  </div>
                </div>
        </div>
    );
  }
}
export default Carrito;