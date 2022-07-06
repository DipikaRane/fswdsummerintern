import React from 'react';
// import {Link} from 'react-router-dom';

const PostDetail=(props)=>{
    console.log(props)
    console.log(props.match.params.topic)
    return(
        <>      
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>{props.match.params.topic} Details Page</h2>
            </div>
            <div className="panel-body">
            <p>{props.match.params.topic} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>                              
            </div>        
        </div>
        </>
    )
}
export default PostDetail