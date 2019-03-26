import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './App';

import './personaliza_pizza.css';

class PersonalizaPizza extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Grande'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
      render() {
        return (
          <div id="perzonalizarForm">
            <h3>Personaliza tu pizza</h3>
            <h5>Los campos marcados con * son obligatorios</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-8 col-form-label">* Elige el tamaño de tu pizza</label>
                <div className="col-sm-4">
                  <select id="select" className="form-control" value={this.state.value} onChange={this.handleChange}>
                    <option value="Grande">Grande</option>
                    <option value="Mediana">Mediana</option>
                    <option value="Pequeña">Pequeña</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-8 col-form-label">* Seleccionar el tipo de masa</label>
                <div className="col-sm-4">
                  <select id="select" className="form-control" value={this.state.value} onChange={this.handleChange}>
                      <option value="Sencilla">Sencilla</option>
                      <option value="Rellena">Rellena</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-8 col-form-label">* Cantidad de pizzas</label>
                <div className="col-sm-4">
                  <select id="select" className="form-control" value={this.state.value} onChange={this.handleChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                  <div className=" col-sm-7">
                    <Link id="boton" className="btn" role="button" to={'/'}>Cancelar</Link>
                  </div>
                  <div className="col-sm-3">
                    <button id="boton" type="button" className="btn" data-toggle="modal" data-target="#exampleModal">Agregar al carrito</button>
                  </div>
                </div>
            </form>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h5 className="modal-title" id="exampleModalLabel">EXITO</h5>
                  <div className="modal-body">
                    <div class="alert alert-success" role="alert">
                      Pizza agregada correctamente
                    </div>
                  </div>
                    <Link id="boton" className="btn" to={'/'}>Aceptar</Link>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PersonalizaPizza;