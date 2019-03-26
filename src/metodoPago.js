import React, { Component } from 'react';
import './metodoPago.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class MetodoPago extends Component {
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
          <div id="datosPagoForm">
            <h3>Selecciona tu método de pago</h3>
            <h5>Los campos marcados con * son obligatorios</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <div className="col-sm-1">
                    <input type="checkbox" class="form-check-input" value=""/>
                </div>
                <label for="staticEmail" className="col-sm-2 col-form-label">* Tarjeta</label>
                </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Numero de tarjeta</label>
                <div className="col-sm-10">
                    <input type="text" class="form-control" id="numTarj" placeholder="XXXX-XXX-XXX-XXX"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Titular</label>
                <div className="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail4" className="col-sm-2 col-form-label">* MM / AA</label>
                <div class="form-group col-md-4">
                    <input type="date" class="form-control" id="inputEmail4"/>
                </div>
                <label for="inputPassword4">* CVC</label>
                <div class="form-group col-md-5">
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-1">
                    <input type="checkbox" class="form-check-input" value=""/>
                </div>
                <label for="staticEmail" className="col-sm-2 col-form-label">* Paypal</label>
              </div>
              <div className="form-group row">
              <div className="col-sm-1">
                    <input type="checkbox" class="form-check-input" value=""/>
                </div>
                <label for="staticEmail" className="col-sm-2 col-form-label">* Efectivo</label>
              </div>
              <div className="form-group row">
                <div className="col-sm-6">
                  <Link className="btn btn-default" to={'/carritoCompra'}>Cancelar</Link>
                </div>
                <div className="col-sm-3">
                <Link className="btn btn-default" to={'/datosCompra'}>Regresar</Link>
                </div>
                <div className="col-sm-3">
                  <Link className="btn btn-default" to={'/facturaPDF'}>Continuar</Link>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default MetodoPago;