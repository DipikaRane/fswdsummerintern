import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header'
import Home from './Home/Home';
import Features from './Features/Features';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Doctor from './Doctor/Doctor';
import Booking from './Booking/Booking'

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Home/>
        {/* <Route exact path="/" component={Home}/> */}
        <Route path="/feature" component={Features}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/service" component={Services}/>
        <Route path="/doctor" component={Doctor}/>
        <Route path="/book/:id" component={Booking}/>
        </BrowserRouter>
    )
    
}
export default Routing