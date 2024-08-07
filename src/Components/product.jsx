import React from "react";

function Product({ item }) {
    return (
        <div className="list">
            <img src={item.img} key={item.id} alt={item.title} />
        </div>
    )
}

export default Product;
