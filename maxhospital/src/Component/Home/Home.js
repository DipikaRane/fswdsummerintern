import React from 'react';
import './Home.css';

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
                        <div id="Contact" className="modal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">    
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <center><h3>Love Handi-Crafts.Com</h3></center>
                                            <div className="modal-body">
                                                <div id="about">
                                                    <span>&hearts;Love Handi-crafts.com is a website who provides you different kind of souveniors on your doorstep. Here you can see, 
                                                    choose and buy all you like for your home, garden, office etc. 
                                                    Also you will find the website is best place to buy gifts for your loved ones.&hearts;</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                    <div className="map">
                        <p><span className="direct">Get Directions
                        </span>&nbsp;&nbsp;<span>|</span>&nbsp;
                        <span className="direct">Contact Us</span></p>
                    </div>
                    <div className="fad">
                        <button className="btn btn-primary" type="button" style={{fontSize:"20px"}}>Find a Doctor</button>
      </div>
                </div>
        </div>
        </>
    )

}
export default Home;