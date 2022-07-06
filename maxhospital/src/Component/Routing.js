import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header'
import Home from './Home/Home';
import Features from './Features/Features'

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Home/>
        {/* <Route exact path="/" component={Home}/> */}
        <Route path="/feature" component={Features}/>
        </BrowserRouter>
    )
    
}
export default Routing