import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Head from './Head'
import Home from './Home/Home';
import Post from './Post/Post';
import Profile from './Profile/Profile';
import PostDetail from './Post/PostDetail';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Head/>
        {/* <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to ="/post">Post</Link>&nbsp;&nbsp;
        <Link to="/profile">Profile</Link>*/}
        <Route exact path="/" component={Home}/>
        <Route path="/post" component={Post}/>
        <Route path="/post/:topic" component={PostDetail}/>
        <Route path="/profile" component={Profile}/>
        </BrowserRouter>
    )
}
export default Routing  

