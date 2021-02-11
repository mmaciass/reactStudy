import React, { Component } from 'react';

const listCar = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <tr>
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
      </div>
    </div>
  );
};
export default listCar;
