import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Carrito extends Component {
  render() {
    return (
        <div className="Carrito">
            <h1>El carrito está vacio</h1>
        </div>
    );
  }
}

export default Carrito;