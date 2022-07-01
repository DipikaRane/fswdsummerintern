import React from 'react';
import './Header.css';

const Header=()=>{ 
    return(
        <React.Fragment>
        <nav className="navbar navbar-default" style={{backgroundColor:"#003d73"}}>
                <div className="container-fluid">                        
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><a href="#Home" style={{color:"white"}}>MAX HOSPITAL</a></li>
                        <li className="nav-item">
                        <a href="#hospitals" style={{color:"white"}}>Find a Doctor</a>
                        </li>
                        <li className="nav-item" >
                        <a href="#treatment" style={{color:"white"}}>Blogs</a>
                        </li>
                        <li className="nav-item">
                        <a href="#hospitals" style={{color:"white"}}>Research</a>
                        </li>
                        <li className="nav-item">
                        <a href="#treatment" style={{color:"white"}}>Report</a>
                        </li>
                        <li className="nav-item">
                        <a href="#hospitals" style={{color:"white"}}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar navbar-right">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                        <a href="#hospitals">Hospitals</a>
                        </li>
                        <li className="nav-item">
                        <a href="#treatment">Treatments</a>
                        </li>
                        <li className="nav-item">
                        <a href="#mainblock">Services</a>
                        </li>
                        <li className="nav-item">
                        <a href="#treatment">Academics</a>
                        </li>
                        <li className="nav-item">
                        <a href="#treatment">Quick-Enquiry</a>
                        </li>
                        <li className="nav-item">
                            <input className="form-control" type="text" placeholder="Search"/>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Header;