import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './pizza_component.css';
import PizzaComponent from './pizza_component';


class PizzaContainer extends Component {
  constructor () {
        super();
        this.state = {
            pizzas: [
                {pizzaId:1, nomPizza:'Hawaiana', urlImg:'https://nuestrasrecetas.es/wp-content/uploads/2015/05/hawaiana-1024x683.jpg'},
                {pizzaId:2, nomPizza:'Pepperoni', urlImg:'https://www.360bistrobar.com/wp-content/uploads/sites/16/2017/02/pepperoni-pizza.jpg'},
                {pizzaId:3, nomPizza:'Carnes frias', urlImg:'http://dominos.com.mx/wp-content/uploads/2018/05/Mexicana-compressor-1-380x251.jpg'},
                {pizzaId:4, nomPizza:'Jamon', urlImg:'http://quem.com.ar/wp-content/uploads/2018/05/7792180008701.jpg'}
            ]
        }

  }

  render() {
    return (

          <div className="pizzaContainer">
            <div className="row">
                
                {
                    this.state.pizzas.map(pizza => {
                        return(
                            <div className="col">
                            <PizzaComponent 
                            key={pizza.pizzaId} 
                            pizzaId={pizza.pizzaId} 
                            urlImg={pizza.urlImg}
                            />
                            </div>
                        )
                    })
                }
                
            </div>
          </div>

      
    );
  }
}

export default PizzaContainer;