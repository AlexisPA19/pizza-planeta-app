import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './App';

import './personaliza_pizza.css';

import firebase from 'firebase/app';
import { DB_CONFIG } from './config/config';
import 'firebase/database';

class PersonalizaPizza extends Component {
  constructor () {
    super();
    // db connection
		//this.app = firebase.initializeApp(DB_CONFIG);
		//this.db = this.app.database().ref().child('compras');
  }
  componentWillMount(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA2W5oUjErDfEn48kB9LsI6xa51I5-WQXs",
      authDomain: "pizza-planeta-7be5c.firebaseapp.com",
      databaseURL: "https://pizza-planeta-7be5c.firebaseio.com",
      projectId: "pizza-planeta-7be5c",
      storageBucket: "pizza-planeta-7be5c.appspot.com",
      messagingSenderId: "977260831032"
    };
    firebase.initializeApp(config);
  }
  enviar(){
    const form = document.getElementsById('PerzonalizaPizzaForm');
    if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
      form.addEventListener('submit', PerzonalizaPizzaForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
    }
  
    function PerzonalizaPizzaForm(event) {
      event.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
      const tamPizza = document.getElementsByName("tamPizza"); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
      const tipoMasa = document.getElementsByName('tipoMasa');
      const cant = document.getElementsByName('cant');
      const data = {
  
        'tamPizza': tamPizza.value,
        'tipoMasa': tipoMasa.value,
        'cant': cant.value
  
      }; // Creamos un objecto con todos los elementos de nuestro formulario.
      savePerzonalizaPizzaForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
      form.reset(); // borramos todos los campos. 
    }
  
  function savePerzonalizaPizzaForm(data) {
    firebase.database().ref('compras').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function(){
        //alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function(){
        //alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      });
  };
  }

      render() {
        return (
          <div id="perzonalizarForm">
            <h3>Personaliza tu pizza</h3>
            <h5>Los campos marcados con * son obligatorios</h5>
            <form id="PerzonalizaPizzaForm" name="PerzonalizaPizzaForm">
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-8 col-form-label">* Elige el tamaño de tu pizza</label>
                <div className="col-sm-4">
                  <select id="select" name="tamPizza" className="form-control">
                    <option value="Grande">Grande</option>
                    <option value="Mediana">Mediana</option>
                    <option value="Pequeña">Pequeña</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-8 col-form-label">* Seleccionar el tipo de masa</label>
                <div className="col-sm-4">
                  <select id="select" name="tipoMasa" className="form-control">
                      <option value="Sencilla">Sencilla</option>
                      <option value="Rellena">Rellena</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label for="inputPassword" className="col-sm-8 col-form-label">* Cantidad de pizzas</label>
                <div className="col-sm-4">
                  <select id="select" name="cant" className="form-control">
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
                    <button id="boton" type="submit" onClick={this.enviar} className="btn" data-toggle="modal" data-target="#exampleModal" data-backdrop="false">Agregar al carrito</button>
                  </div>
                </div>
            </form>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <h5 className="modal-title" id="exampleModalLabel">EXITO</h5>
                  <div className="modal-body">
                    <div className="alert alert-success" role="alert">
                      Pizza agregada correctamente.
                    </div>
                  </div>
                    <Link id="boton" to={'/'} className="btn">Aceptar</Link>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PersonalizaPizza;