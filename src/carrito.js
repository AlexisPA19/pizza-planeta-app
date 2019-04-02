import React, { Component } from 'react';
import './carrito.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaCarritoComponent from './pizzaCarritoComponent';
import _ from 'lodash';

import firebase from 'firebase/app';
import { DB_CONFIG } from './config/config';
import 'firebase/database';


class Carrito extends Component {
  constructor () {
    super();
    this.state = {
        pizzas: [

        ]
    }
    this.removepizza = this.removePizza.bind(this);
    // db connection
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG);
  }
}

componentDidMount() {
  const { pizzas } = this.state;
  firebase.database().ref('compras').on('child_added', snap => {
    pizzas.push({
      pizzaId: snap.key,
      nomPizza: snap.val().nomPizza,
      descripPizza: snap.val().descripPizza,
      tamPizza: snap.val().tamPizza,
      tipoMasa: snap.val().tipoMasa,
      cant: snap.val().cant,
      Precio: snap.val().Precio
    });

    this.setState({pizzas});
  });

  firebase.database().ref('compras').on('child_removed', snap => {
    for(let i = 0; i < pizzas.length; i++) {
      if(pizzas[i].pizzaId === snap.key) {
        pizzas.splice(i , 1);
      }
    }
    console.log(pizzas);
    this.setState({pizzas});
  });

}
removePizza(pizzaId) {
  firebase.database().ref('compras/'+pizzaId).remove();
}
_getTotal(){
  return _.sumBy(this.state.pizzas, function(o) { return o.Precio*o.cant; });;
}
  render() {
    if(this.state.pizzas == 0){
      return(
        <div className="div_vacio">
          <h1>Carrito vacío</h1>
          <br/>
          <Link id="boton" className="nav-link" to={'/'}>Seguir comprando</Link>
        </div>
      );
    }
    else{
      return (
          <div className="Carrito">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
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
                          <PizzaCarritoComponent key={pizza.pizzaId} pizzaId={pizza.pizzaId} nomPizza={pizza.nomPizza} descripPizza={pizza.descripPizza} tamPizza={pizza.tamPizza} tipoMasa={pizza.tipoMasa} cant={pizza.cant} Precio={pizza.Precio} removePizza={this.removePizza}/>
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
}
export default Carrito;