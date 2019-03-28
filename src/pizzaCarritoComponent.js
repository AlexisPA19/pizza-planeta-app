import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class PizzaCarritoCompra extends Component {
constructor(props){
    super(props);
    this.pizzaId = props.key;
    this.nomPizza = props.nomPizza;
    this.descripPizza = props.descripPizza;
    this.tamPizza = props.tamPizza;
    this.tipoMasa = props.tipoMasa;
    this.cant = props.cant;
    this.precio = props.Precio;
}

  render() {
    return (
        <tr>
            <td>{this.nomPizza}</td>
            <td>{this.descripPizza}</td>
            <td>{this.tamPizza}</td>
            <td>{this.tipoMasa}</td>
            <td>{this.cant}</td>
            <td>${this.precio}</td>
            <td><button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-backdrop="static">Eliminar</button></td>
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
                      <button type="button" class="btn btn-danger" data-dismiss="modal" >Aceptar</button>
                    </div>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
        </tr>
    );
  }
}

export default PizzaCarritoCompra;