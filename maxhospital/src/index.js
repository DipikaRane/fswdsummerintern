//React 17
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Routing from './Component/Routing';

// ReactDOM.render(<Routing/>,document.getElementById('root'))

//React 18 
import React from 'react';
import Routing from './Component/Routing';
import {createRoot} from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Routing tab="home"/>);