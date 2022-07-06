import React from 'react';
import {Link} from 'react-router-dom';

class Head extends React.Component {
    render(){
        return(
            <>
                <center>
                <nav className="navbar navbar-inverse" style={{width:'70%'}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Techvanto</Link>
                        </div>
                        <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>
                    <h1>Techvanto Academy</h1>
                </center>
                <hr/>
            </>
        )
    }
}
export default Head