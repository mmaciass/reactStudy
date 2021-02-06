import React, {Component} from "react";


class Buscador extends Component {
    searchRef = React.createRef();
    handleSubmitSearch =(e)=>{
        e.preventDefault();
        const termino = this.searchRef.current.value;
        this.props.dataSearch(termino);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmitSearch}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg border-primary"
                               placeholder="Busca tu Tarea..."/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>

                </div>
            </form>
        )
    }

}

export default Buscador;