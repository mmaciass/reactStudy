import React, {Component} from "react";
import classes from './Navigation.module.css';
import {todos} from "../todos.json";

class Navigation extends Component{
    constructor() {
        super();
        this.state = {
            todos
        }
    }

    render() {
        return(
            <div className={classes.Prueba}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <nav className = "navba navbar-expand-lg">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item"><a href="" className="nav-link text-white font-weight-bold">Inicio</a></li>
                                    <li className="nav-item"><a href="" className="nav-link text-white font-weight-bold">Quiénes somos</a></li>
                                    <li className="nav-item"><a href="" className="nav-link text-white font-weight-bold">Portafolio</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 text-white pt-2">
                            <span className="font-weight-bold">Task</span>
                            <span className="badge badge-pill badge-light ml-2">
                                {this.state.todos.length}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Navigation;