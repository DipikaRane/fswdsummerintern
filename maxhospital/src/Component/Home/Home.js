import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom'
const Home =()=>{

    return(
        <>
        
        <div id="main">
                <div className="max-img">
                    <div className="heading">
                        <h1>Max Hospital India</h1>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <i className="fas fa-star checked"></i>
                        <i className="far fa-star"></i><span style={{marginLeft:"15px"}}>4.0</span>
                    </div>
                    <div className="emergency" data-toggle="modal" data-target="#Contact">
                        <span>E</span><span>M</span><span>E</span><span>R</span><span>G</span><span>E</span>
                        <span>N</span><span>C</span><span>Y</span>
                    </div>
                    <div className="map">
                        <p><span className="direct">Get Directions
                        </span>&nbsp;&nbsp;<span>|</span>&nbsp;
                        <span className="direct">Contact Us</span></p>
                    </div>
                    <div className="fad">
                    <Link to='/doctor'><button className="btn btn-primary" type="button" style={{fontSize:"20px"}}>Find a Doctor</button></Link>
      </div>
                </div>
        </div>
        </>
    )

}
export default Home;