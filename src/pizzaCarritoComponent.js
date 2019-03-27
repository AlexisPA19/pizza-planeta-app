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
    this.precio = props.Precio;
}
  render() {
    return (
        <tr>
            <td>{this.nomPizza}</td>
            <td>{this.descripPizza}</td>
            <td>{this.tamPizza}</td>
            <td>{this.tipoMasa}</td>
            <td>{this.precio}</td>
            <td><button className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" data-backdrop="static">Eliminar</button></td>
        </tr>
    );
  }
}

export default PizzaCarritoCompra;