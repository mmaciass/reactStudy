import React, {Component} from 'react';

const listCar = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <tr className="bg-danger">
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
          {props.cart &&
            props.cart.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>

              </tr>
            ))}
          <tr>
            <th className="text-right">Total a pagar:{props.total}</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default listCar;
