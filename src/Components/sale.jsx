import React from "react";

function Sale({ sale }) {
    return (
        <div className="sale_list">
            <img src={sale.img} key={sale.id} alt={sale.title} />
            <div className="like"> 
                <img src={sale.like} key={sale.id} alt={sale.like} />
            </div>
            <div className="bottom"> 
                <p>{sale.title}</p>
                <span>{sale.price}</span>
            </div>

        </div>
    )
}

export default Sale;