import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header=()=>{ 
    return(
        <React.Fragment>
        <nav className="navbar navbar-default" style={{backgroundColor:"#003d73"}}>
                <div className="container-fluid">                        
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><Link to='/' style={{color:"white"}}>MAX HOSPITAL</Link></li>
                        <li className="nav-item">
                        <a href="#hospitals" style={{color:"white"}}>Find a Doctor</a>
                        </li>
                        <li className="nav-item" >
                        <Link to="/feature" style={{color:"white"}}>Features</Link>
                        </li>
                        <li className="nav-item">
                        <a href="#hospitals" style={{color:"white"}}>Research</a>
                        </li>
                        <li className="nav-item">
                        <a href="#treatment" style={{color:"white"}}>Report</a>
                        </li>
                        <li className="nav-item">
                        <Link to="/contact" style={{color:"white"}}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar navbar-right">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                        <Link to='/hospital'>Hospitals</Link>
                        </li>
                        <li className="nav-item">
                        <a href="#treatment">Treatments</a>
                        </li>
                        <li className="nav-item">
                        <Link to="/service">Services</Link>
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