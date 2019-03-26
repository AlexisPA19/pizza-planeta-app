import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaContainer from './pizza_container';
import Carrito from './carrito';
import PersonalizaPizza from './personaliza_pizza';
import DatosCompra from './datosCompra';
import MetodoPago from './metodoPago';
import FacturaPDF from './facturaPDF';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div id="navbarNav">
              <nav id="navbarNav" className="navbar navbar-expand-lg ">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul  id="navbarNav" className="navbar-nav">
                    <li className="nav-item" id="botonPrinc">
                      <Link id="link" className="nav-link" to={'/carritoCompra'}>Carrito</Link>
                    </li>
                    <li className="nav-item" id="botonPrinc">
                      <Link id="link" className="nav-link" to={'/'}>Menú</Link>
                    </li>
                  </ul>
                </div>
              </nav>
          </div>
          <br/><br/>
          <Switch>
                  <Route exact path='/' component={PizzaContainer} />
                  <Route path='/personalizaPizza' component={PersonalizaPizza} />
                  <Route path='/carritoCompra' component={Carrito} />
                  <Route path='/datosCompra' component={DatosCompra} />
                  <Route path='/metodoPago' component={MetodoPago} />
                  <Route path='/facturaPDF' component={FacturaPDF} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
