import React, {Component} from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            price: '',
            description: ''
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
                        <input type="text" name="title" onChange={this.handleInput} placeholder="Producto" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="price" onChange={this.handleInput} placeholder="Precio" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" onChange={this.handleInput} placeholder="descripcion" className="form-control"/>
                    </div>
                    <button className="bg-primary">Guardar</button>
                </form>
            </div>
        )

    }

}

export default TodoForm;