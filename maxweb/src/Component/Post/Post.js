import React from 'react';
import './post.css';
import {Link} from 'react-router-dom'

const Post=()=>{
    return( 
        <>      
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post</h2>
            </div>
            <div className="panel-body">
            <h3>JavaScript</h3>
                <Link to="/post/Javascript?page=1" className="btn btn-primary">Details</Link>
            <h3>React</h3>
                <Link to="/post/React?page=1" className="btn btn-warning">Details</Link>
            <h3>MongoDB</h3>
                <Link to="/post/Mongo?page=1" className="btn btn-danger">Details</Link> 
            </div>        
        </div>
        </> 
    )
}
export default Post