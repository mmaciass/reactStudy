import React, {Component} from "react";

const listCar = (props) => {
console.log(props.cart)
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <span>{props.item}</span>
                </div>

            </div>
        </div>
   /* <div>
        {Array.from(props.cart).map((item)=>(
            <div className="card">
                <div className="card-header">
                    {item.title}
                </div>
                <div className="card-body">
                    <strong>{item.price}</strong>
                </div>
            </div>
            )

        )}

    </div>*/

    )


}
export default listCar;