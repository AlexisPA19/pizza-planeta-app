import React, { Component } from 'react';
import logo from './logo.svg';
import './carrito.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaCarritoComponent from './pizzaCarritoComponent';
class Carrito extends Component {
  constructor () {
    super();
    this.state = {
        pizzas: [
            {pizzaId:1, nomPizza:'Hawaiana', descripPizza:'Piña y jamón', tamPiza:'Grande', tipoMasa:'Queso', Precio:200},
            {pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', Precio:200},
            {pizzaId:3, nomPizza:'Pepperoni', descripPizza:'Queso...', tamPiza:'Chica', tipoMasa:'Queso', Precio:200}
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
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
                    this.state.pizzas.map(pizza => {
                        return(
                                <PizzaCarritoComponent key={pizza.pizzaId} nomPizza={pizza.nomPizza} descripPizza={pizza.descripPizza} tamPizza={pizza.tamPiza} tipoMasa={pizza.tipoMasa} Precio={pizza.Precio}/>
                        )
                    })
                }
              </tbody>
            </table>
                <div className="row">
                  <div className="col">
                    Total
                  </div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                  <div className="col"></div>
                </div>
                <div className="row">
                  <div className="col">
                    <Link id="boton" className="btn btn-default" to={'/'}>Seguir comprando</Link>
                  </div>
                  <div className="col">
                    <Link  id="boton" className="btn btn-default" to={'/datosCompra'}>Proceder con la compra</Link>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <h5 className="modal-title" id="exampleModalLabel">Advertencia</h5>
                      <div className="modal-body">
                        <div class="alert alert-warning" role="alert">
                          ¿Seguro deseas quidar la pizza?
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        </div>
                        <div className="col">
                          <button type="button" class="btn btn-danger" data-dismiss="modal">Aceptar</button>
                        </div>
                      </div>
                      <br/>
                    </div>
                  </div>
                </div>
        </div>
    );
  }
}
export default Carrito;