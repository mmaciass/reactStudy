import React, {Component} from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            descripcion: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state)


 }
 handleInput(e){
        const {value,name} = e.target;
        this.setState({
        [name]: value
        })
     console.log(this.state);
 }
    render() {
        return (
            <div className="card my-0 mx-auto">
                <form action="" className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" onChange={this.handleInput} placeholder="titulo" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" onChange={this.handleInput} placeholder="Responsable" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion" onChange={this.handleInput} placeholder="descripcion" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <select name="priority" onChange={this.handleInput} className="form-control">
                            <option>High</option>
                            <option>Low</option>
                            <option>Medium</option>
                        </select>
                    </div>
                    <button className="bg-primary">Guardar</button>
                </form>
            </div>
        )

    }

}

export default TodoForm;