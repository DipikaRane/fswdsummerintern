import React from 'react';
import './Footer.css';

const Footer=(props)=>  {
    console.log(props)
        return(
            <>
            <hr/>
            <center>
            <h3 className="footer">&copy; Techvanto Academy {props.year} {props.month}</h3>
            </center>
            </>
        )
}
export default Footer