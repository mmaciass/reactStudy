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
    //otra forma de eliminar
    /*deleteTask =(index)=>{
        const deleted = this.state.todos;
        deleted.splice(index, 1)
       this.setState({
           todos: deleted
       })
    }*/
    deleteTask =(index)=>{
        const deleted = this.state.todos.filter((todo, i)=> i !==index);
        this.setState({
            todos: deleted
        })

    }
  dataSearch = (termino)=>{
        const filtrados = this.state.todos.filter(todo=>todo.title===termino);
        this.setState({
            todos: filtrados
        })
      console.log(filtrados);
    }
  restoreTodo = (todo)=>{
        const list = this.state.todos.map((todo)=>{
            console.log(todos);
            this.state = {
                todos
            }
        })
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
                            <button className="bg-danger" onClick={this.deleteTask.bind(this, i)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="App">
                <Navigation total={todos.length}/>
                <div className="container mt-3 p-0">
                    <div className="jumbotron bg-light p-4">
                        <h3 className="text-center">Buscador de Tareas</h3>
                        <Buscador dataSearch ={this.dataSearch} restoreTodo ={this.restoreTodo} />
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
