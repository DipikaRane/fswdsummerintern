import React from 'react';
import './Features.css';

const Feature=(props)=>{
    const renderFeature=({featData})=>{
        if(featData){
            return featData.map((item)=>{
                return(
                    <div className="card">
                        <div className="card-image">
                            <img src={item.image} alt=""/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <center>{item.Feature}</center>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    return(
        <>{renderFeature(props)}</>
    )
}
export default Feature