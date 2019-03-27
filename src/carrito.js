import React, { Component } from 'react';
import logo from './logo.svg';
import './carrito.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaCarritoComponent from './pizzaCarritoComponent';

var suma =0;
class Carrito extends Component {
  constructor () {
    super();
    suma=0;
    this.state = {
        pizzas: [
            {pizzaId:1, nomPizza:'Hawaiana', descripPizza:'Piña y jamón', tamPiza:'Grande', tipoMasa:'Queso', cant:4, Precio:200},
            {pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso',cant:2, Precio:200},
            {pizzaId:3, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', cant:3,Precio:200}
        ]
    }
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
                        suma = suma + pizza.Precio
                    })
            }
            {
              
              this.state.pizzas.map(pizza=>{
                  suma = suma + pizza.Precio*pizza.cant;
              })
            }
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>{suma}</td>
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