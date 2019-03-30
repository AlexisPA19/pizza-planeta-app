import React, { Component } from 'react';
import logo from './logo.svg';
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
            //{pizzaId:'hML87ffjLhnX1GMOEyU7', nomPizza:'Hawaiana', descripPizza:'Piña y jamón', tamPiza:'Grande', tipoMasa:'Queso', cant:4, Precio:200},
            //{pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso',cant:2, Precio:200},
            //{pizzaId:3, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', cant:3,Precio:200}
        ]
    }
    this.addPizza = this.addPizza.bind(this);
		this.removePizza = this.removePizza.bind(this);
    //db conection
    this.app = firebase.initializeApp(DB_CONFIG);
		this.db = this.app.database().ref().child('Compras');
}

componentDidMount() {
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
    });

    this.setState({pizzas});
  });

  this.db.on('child_removed', snap => {
    for(let i = 0; i < pizzas.length; i++) {
      if(pizzas[i].pizzaId === snap.key) {
        pizzas.splice(i , 1);
      }
    }
    console.log(pizzas);
    this.setState({pizzas});
  });
}

addPizza(pizza) {
  /*
  let { notes } = this.state;
  notes.push({
    noteId: notes.length + 1,
    noteContent: note
  });
  this.setState({
    notes
  });
  */
  this.db.push().set({nomPizza: pizza});
}	
removePizza(pizzaId) {
  this.db.child(pizzaId).remove();
}
_getTotal(){
  return _.sumBy(this.state.pizzas, function(o) { return o.Precio*o.cant; });;
}
  render() {
    if(this.state.pizzas == 0){
      return(
        <h1>Carrito vacío</h1>
      );
    }
    else{
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
                          <PizzaCarritoComponent key={pizza.pizzaId} pizzaId={pizza.pizzaId} nomPizza={pizza.nomPizza} descripPizza={pizza.descripPizza} tamPizza={pizza.tamPiza} tipoMasa={pizza.tipoMasa} cant={pizza.cant} Precio={pizza.Precio} removePizza={this.removePizza}/>
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