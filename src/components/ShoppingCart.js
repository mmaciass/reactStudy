import React, {useState} from 'react';

const listCar = (props) => {
  const [lisCarState, setListCarState] = useState({
    totalProductos: 0
  });
  const cantidadTotal =()=>{
    let cantidad = 0;
     const price = props.cart.map((item) =>{
     cantidad += parseFloat(item.price);
     })
    setListCarState({
      totalProductos: cantidad
    })

  }

  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <tr className="bg-danger">
            <th>Producto</th>
            <th>Precio</th>
          </tr>
          {props.cart &&
            props.cart.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
            ))}
        </table>
        <span>Pago total:{lisCarState.totalProductos}
        </span>
      </div>
    </div>
  );
};
export default listCar;
