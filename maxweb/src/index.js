import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Component/Home/Home';

const App =()=>{
    return(
        <>               
        <Home/>
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))