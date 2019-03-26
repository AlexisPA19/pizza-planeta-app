import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PizzaContainer from './pizza_container';
import Carrito from './carrito';
import PersonalizaPizza from './personaliza_pizza';
import DatosCompra from './datosCompra';
import MetodoPago from './metodoPago';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <div id="navbar">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link" to={'/carritoCompra'}>Carrito</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to={'/'}>Menú</Link>
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
