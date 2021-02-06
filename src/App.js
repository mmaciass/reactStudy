import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import {todos} from './todos.json';
import TodoForm from './components/TodoForm.js';
import Buscador from './components/Buscador';
import classes from './components/Buscador.Module.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos
        }
        this.addTodoForm = this.addTodoForm.bind(this);
    }

    addTodoForm(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    dataSearch = (termino)=>{
        console.log((termino));
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4 mt-3" key={i}>
                    <div className="card">
                        <div className="card-header">
                            <h1>{todo.title}</h1>
                            <span className="badge badge-pill p-1 badge-info">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.description}</p>
                            <strong>{todo.responsible}</strong>
                        </div>
                        <div className="card-footer">
                            <button className="bg-danger">Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="App">
                <Navigation/>
                <div className="container mt-3 p-0">
                    <div className="jumbotron bg-light p-4">
                        <h3 className="text-center">Buscador de Tareas</h3>
                        <Buscador dataSearch ={this.dataSearch}   />
                    </div>
                </div>

                <img src={logo} className="App-logo" alt="logo"/>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 mt-3 border-right">
                            <h3>Insertar Tarea</h3>
                            <TodoForm onAddTodo={this.addTodoForm}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );

    }
}

export default App;
