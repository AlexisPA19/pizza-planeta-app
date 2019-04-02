import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './datosCompra.css';



function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div>
      <div className="form-group row">
        <label for="inputEmail4" className="col-sm-2 col-form-label">* Numero</label>
        <div class="form-group col-md-2">
            <input type="tel" class="form-control" id="inputEmail4" placeholder="" required/>
        </div>
        <label for="inputPassword4">* CP</label>
        <div class="form-group col-md-2">
            <input type="email" class="form-control" id="inputPassword4" placeholder="" required/>
        </div>
      </div>
      <div className="form-group row">
        <label for="staticEmail" className="col-sm-2 col-form-label">* Colonia</label>
        <div className="col-sm-10">
            <input type="text" class="form-control" id="inputEmail4" placeholder="" required/>
        </div>
      </div>
      <div className="form-group row">
        <label for="staticEmail" className="col-sm-2 col-form-label">* Delegación o municipio</label>
        <div className="col-sm-10">
            <input type="text" class="form-control" id="inputEmail4" placeholder="" required/>
        </div>
      </div>
      <div className="form-group row">
        <label for="staticEmail" className="col-sm-2 col-form-label">* Estado</label>
        <div className="col-sm-2">
          <select className="form-control" >
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California" >Baja California</option>
            <option value="Baja California Sur" >Baja California Sur</option>
            <option value="Campeche" >Campeche</option>
            <option value="Coahuila" >Baja California</option>
            <option value="Distrito Federal" >Ciudad de México</option>
            <option value="Coahuila" >Coahuila</option>
            <option value="Colima" >Colima</option>
            <option value="Chiapas" >Chiapas</option>
            <option value="Chihuahua" >Chihuahua</option>
            <option value="Durango" >Durango</option>
            <option value="Guanajuato" >Guanajuato</option>
            <option value="Guerrero" >Guerrero</option>
            <option value="Hidalgo" >Hidalgo</option>
            <option value="Jalisco" >Jalisco</option>
            <option value="Estado de México" >Estado de México</option>
            <option value="Michoacán" >Michoacán</option>
            <option value="Morelos" >Morelos</option>
            <option value="Nayarit" >Nayarit</option>
            <option value="Nuevo León" >Nuevo León</option>
            <option value="Oaxaca" >Oaxaca</option>
            <option value="Puebla" >Puebla</option>
            <option value="Querétaro" >Querétaro</option>
            <option value="Quintana Roo" >Quintana Roo</option>
            <option value="San Luis Potosí" >San Luis Potosí</option>
            <option value="Sinaloa" >Baja California</option>
            <option value="Baja California" >Sinaloa</option>
            <option value="Sonora" >Sonora</option>
            <option value="Tabasco" >Tabasco</option>
            <option value="Tamaulipas" >Tamaulipas</option>
            <option value="Tlaxcala" >Tlaxcala</option>
            <option value="Veracruz" >Veracruz</option>
            <option value="Yucatán" >Yucatán</option>
            <option value="Zacatecas" >Zacatecas</option>
          </select>
        </div>
      </div>
    </div>    
  );
}

class DatosCompra extends Component {
    constructor(props) {
        super(props);

        this.state = {showWarning: false}
        this.handleToggleClick = this.handleToggleClick.bind(this);

      }
      handleToggleClick() {
        this.setState(prevState => ({
          showWarning: !prevState.showWarning
        }));
      }
      render() {
        return (
          <div id="datosForm">
            <h3>Agrega tus datos para proceder con la compra</h3>
            <h5>Los campos marcados con * son obligatorios</h5>
            <form onSubmit={this.handleSubmit} class="needs-validation" novalidate>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Tipo de entrega</label>
                <div className="col-sm-3">
                  <select className="form-control"  onChange={this.handleToggleClick}>
                    <option value="sucursal">En sucursal</option>
                    <option value="domicilio" onClick={this.handleToggleClick}>A domicilio</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">* Nombre</label>
                <div className="col-sm-10">
                    <input type="text" class="form-control" placeholder="Nombre - Apellidos"  id="uname"  name="uname" required/>
                </div>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group row">
                <label for="inputEmail4" className="col-sm-2 col-form-label">* Teléfono</label>
                <div class="form-group col-md-4">
                    <input type="tel" class="form-control" id="inputEmail4" placeholder="" required/>
                </div>
                <label for="inputPassword4">* Correo</label>
                <div class="form-group col-md-5">
                    <input type="email" class="form-control" id="inputPassword4" placeholder="email@dom.dom" required/>
                </div>
              </div>
                <WarningBanner warn={this.state.showWarning} />
              <div className="form-group row">
                <div className="col-sm-6">
                  <Link id="boton" className="btn btn-default" to={'/carritoCompra'}>Cancelar</Link>
                </div>
                <div className="col-sm-6">
                
                  <Link id="boton"  className="btn btn-default" to={'/metodoPago'} >Continuar</Link>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default DatosCompra;