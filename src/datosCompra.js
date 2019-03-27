import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './datosCompra.css';

class DatosCompra extends Component {
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
          <div id="datosForm">
            <h3>Agrega tus datos para proceder con la compra</h3>
            <h5>Los campos marcados con * son obligatorios</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Tipo de entrega</label>
                <div className="col-sm-10">
                  <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                    <option value="sucursal">En sucursal</option>
                    <option value="domicilio" >A domicilio</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Nombre</label>
                <div className="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Nombre - Apellidos"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail4" className="col-sm-2 col-form-label">* Teléfono</label>
                <div class="form-group col-md-4">
                    <input type="tel" class="form-control" id="inputEmail4" placeholder=""/>
                </div>
                <label for="inputPassword4">* Correo</label>
                <div class="form-group col-md-5">
                    <input type="email" class="form-control" id="inputPassword4" placeholder="email@dom.dom"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6">
                  <Link id="boton" className="btn btn-default" to={'/carritoCompra'}>Cancelar</Link>
                </div>
                <div className="col-sm-6">
                  <Link id="boton" className="btn btn-default" to={'/metodoPago'}>Continuar</Link>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default DatosCompra;