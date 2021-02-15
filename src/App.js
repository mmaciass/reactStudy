import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {todos as initialState} from './todos.json';
import TodoForm from './components/TodoForm.js';
import Buscador from './components/Buscador';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';


// New Component Funcional
const AppFunctional = (props) => {
    const [cart, setCart] = useState([]);
    const [todos, setTodos] = useState([...initialState]);

    const addTodoForm = (todo) => {
        setTodos([...todos, todo])
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const dataSearch = (termino) => {
        const filtrados = todos.filter((todo) =>
            todo.title.trim().toLowerCase().includes(termino.toLowerCase().trim())
        );
        setTodos(filtrados);
    };

    const restoreTodo = () => {
        setTodos([...initialState]);
    };


    return (
        <div className="App">
            <Navigation total={todos.length}/>
            <div className="container mt-3 p-0">
                <div className="jumbotron bg-light p-4">
                    <h3>Buscador</h3>
                    <Buscador dataSearch={dataSearch} restoreTodo={restoreTodo}/>
                </div>
            </div>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <div className="container">
                <div className="row text-center">
                    <div className="col-12"><h1 className="text-center">Listado de productos</h1></div>
                    <div className="col-md-3 mt-3 border-right">
                        <h3>Insertar Producto</h3>
                        <TodoForm onAddTodo={addTodoForm}/>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <ProductList listProducts={todos} addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12">
                        <h4 className="bg-white" id="shopCar">
                            Listado carro de compra
                        </h4>
                        <ShoppingCart cart={cart}/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFunctional;
