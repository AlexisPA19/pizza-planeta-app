import React, { Component } from 'react';
import './metodoPago.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class MetodoPago extends Component {
    constructor(props) {
        super(props);
        
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        
      }
    
      handleSubmit(event) {

      }
    
      render() {
        return (
          <div id="datosPagoForm">
            <h3>Selecciona tu método de pago</h3>
            <h5>Los campos marcados con * son obligatorios</h5>
            <form onSubmit={this.handleSubmit} className="was-validated">
              <div className="form-group row">
                <div className="col-sm-1">
                    <input type="checkbox" class="form-check-input" value="" required/>
                </div>
                <label for="staticEmail" className="col-sm-2 col-form-label">* Tarjeta</label>
                </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Numero de tarjeta</label>
                <div className="col-sm-10">
                    <input type="number" class="form-control" id="numTarj" placeholder="XXXX-XXX-XXX-XXX" required />
                    <div className="invalid-feedback">El campo Numero de tarjeta es obligatorio.</div>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Titular</label>
                <div className="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Nombre del titular de la tarjeta" required/>
                    <div className="invalid-feedback">El campo titular es obligatorio.</div>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputEmail4" className="col-sm-2 col-form-label">* MM / AA</label>
                <div class="form-group col-md-4">
                    <input type="date" class="form-control" id="inputEmail4" required/>
                    <div className="invalid-feedback">El campo MM / AA es obligatorio.</div>
                </div>
                <label for="inputPassword4">* CVC</label>
                <div class="form-group col-md-5">
                    <input type="number" class="form-control"  placeholder="XXX" required/>
                    <div className="invalid-feedback">El campo CVC es obligatorio.</div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick"/>
                <input type="hidden" name="hosted_button_id" value="7XKJUQUKVDJ6C"/>
                <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea."/>
                <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1"/>
                </form>
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
                  <Link id="boton" className="btn btn-default" to={'/carritoCompra'}>Cancelar</Link>
                </div>
                <div className="col-sm-3">
                <Link id="boton" className="btn btn-default" to={'/datosCompra'}>Regresar</Link>
                </div>
                <div className="col-sm-3">
                  <Link id="boton" className="btn btn-default" to={'/facturaPDF'}>Continuar</Link>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default MetodoPago;