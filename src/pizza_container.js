import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './pizza_component.css';
import PizzaComponent from './pizza_component';


class PizzaContainer extends Component {
  constructor () {
        super();
        this.state = {
            pizzas: [
                {pizzaId:1, nomPizza:'Hawaiana', descripPizza:'Jamón y Piña', urlImg:'https://nuestrasrecetas.es/wp-content/uploads/2015/05/hawaiana-1024x683.jpg'},
                {pizzaId:2, nomPizza:'Pepperoni', descripPizza:'Pepperoni y queso cheddar', urlImg:'https://www.360bistrobar.com/wp-content/uploads/sites/16/2017/02/pepperoni-pizza.jpg'},
                {pizzaId:3, nomPizza:'Carnes frias', descripPizza:'Pepperoni, salchicha y jámon', urlImg:'http://dominos.com.mx/wp-content/uploads/2018/05/Mexicana-compressor-1-380x251.jpg'},
                {pizzaId:4, nomPizza:'Jamón', descripPizza:'Jamón cerrano', urlImg:'http://quem.com.ar/wp-content/uploads/2018/05/7792180008701.jpg'}
            ],
            pizzas2: [
                {pizzaId:1, nomPizza:'Mexicana', descripPizza:'Frijoles, chorizo y jamapeños', urlImg:'https://www.yucatan.com.mx/wp-content/uploads/2018/01/pizza-1.jpg'},
                {pizzaId:2, nomPizza:'Cuatro quesos', descripPizza:'Queso parmesano,queso crema y queso Cheddar', urlImg:'https://www.recetin.com/wp-content/uploads/2012/01/pizza_cuatro_quesos.jpg'},
                {pizzaId:3, nomPizza:'Pollo', descripPizza:'Pollo y champiñones', urlImg:'http://assets.kraftfoods.com/recipe_images/opendeploy/136150_640x428.jpg'},
                {pizzaId:4, nomPizza:'Vegetariana',descripPizza:'Calabaza, espinaca y berenjena', urlImg:'http://www.comidayvinos.com/wp-content/uploads//2013/10/receta-de-pizza-vegetariana.jpg'}
            ],
            pizzas3: [
                {pizzaId:1, nomPizza:'Bolonesa',descripPizza:'Carne picada', urlImg:'http://www.recetasdiarias.com/wp-content/uploads/2010/01/pizza-bolo%C2%A7esa-473x325.jpg'},
                {pizzaId:2, nomPizza:'Salchica Italiana',descripPizza:'Salchicha Italiana', urlImg:'https://cdn2.traveler.es/uploads/images/thumbs/201436/pizza_de_salchicha_italiana_5085_1200x630.jpg'},
                {pizzaId:3, nomPizza:'Huevo y tocino', descripPizza:'Huevo y tocino',urlImg:'https://3.bp.blogspot.com/-2o7OWascHpw/V8ZMXa4a6DI/AAAAAAAAJOY/bIGbGcgIEaYc25AnlqZMjsDkvstdfT55QCLcB/s400/delicious-pizza-mushrooms-bacon-egg-cherry-tomatoes-thin-pastry-crust-wooden-background-wooden-desk-56533568.jpg'},
                {pizzaId:4, nomPizza:'Gourmet',descripPizza:'Quesos azules, pera y nuez', urlImg:'https://media-cdn.tripadvisor.com/media/photo-s/0c/b5/f3/63/pizzaria-dindo-pizza.jpg'}
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
                            nomPizza={pizza.nomPizza}
                            descripPizza={pizza.descripPizza} 
                            urlImg={pizza.urlImg}
                            />
                            </div>
                        )
                    })
                }
                
            </div>
            <br/>
            <div className="row">
              {
                      this.state.pizzas2.map(pizza => {
                          return(
                              <div className="col">
                              <PizzaComponent 
                              key={pizza.pizzaId} 
                              pizzaId={pizza.pizzaId}
                              nomPizza={pizza.nomPizza}
                              descripPizza={pizza.descripPizza} 
                              urlImg={pizza.urlImg}
                              />
                              </div>
                          )
                      })
                  }
            </div>
            <br/>
            <div className="row">
              {
                      this.state.pizzas3.map(pizza => {
                          return(
                              <div className="col">
                              <PizzaComponent 
                              key={pizza.pizzaId} 
                              pizzaId={pizza.pizzaId}
                              nomPizza={pizza.nomPizza}
                                descripPizza={pizza.descripPizza}  
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