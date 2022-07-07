import React from 'react';
import './Services.css'

const Service=(props)=>{
    const renderService=({servData})=>{
        if(servData){
            return servData.map((item)=>{
                return(
                    <>
                    <div className="card">
                        <div className="card-image">
                            <img src={item.image} alt={item.Service}/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>{item.Service}</h3>
                            </div>
                            <div className="card-text">
                                <h4>{item.Description}</h4>
                                <p><span className="label">{item.location[0].location_name}</span>
                                <span className="label">{item.location[1].location_name}</span></p>
                                <p><span className="label">{item.location[2].location_name}</span>
                                <span className="label">{item.location[3].location_name}</span></p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            })
        }
    }
    return(
        <>{renderService(props)}</>
    )
}
export default Service