import React, { Component } from 'react';
import logo from './logo.svg';
import './carrito.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaCarritoComponent from './pizzaCarritoComponent';
import _ from 'lodash';



class Carrito extends Component {
  constructor () {
    super();
    this.state = {
        pizzas: [
            {pizzaId:'hML87ffjLhnX1GMOEyU7', nomPizza:'Hawaiana', descripPizza:'Piña y jamón', tamPiza:'Grande', tipoMasa:'Queso', cant:4, Precio:200},
            {pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso',cant:2, Precio:200},
            {pizzaId:3, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', cant:3,Precio:200}
        ]
    }
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
                      this.state.pizzas.map((pizza,index) => {
                          return(
                          <PizzaCarritoComponent key={pizza.pizzaId} pizzaId={pizza.pizzaId} nomPizza={pizza.nomPizza} descripPizza={pizza.descripPizza} tamPizza={pizza.tamPiza} tipoMasa={pizza.tipoMasa} cant={pizza.cant} Precio={pizza.Precio} onRemove={ () => this._remove(index)}/>
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