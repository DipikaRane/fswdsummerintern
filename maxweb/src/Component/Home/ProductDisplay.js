import React from 'react';
import './Home.css'

const Product = (props)=>{
    const renderProduct=props.prodData.map((item)=>{
        return(
            <>
            <div className="card">
                <div className="card-image">
                    <img src={item.Image} alt=""/>
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h3>{item.product_name}</h3>
                    </div>
                    <div className="card-content">
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p>{item.origin}</p>
                    </div>
                </div>
            {/* <h1>{item.product_name}</h1> */}
            </div>
            </>
        )
    })
    return(
        <>{renderProduct}</>
    )
}
export default Product