/**
 * Created by arp226 on 6/9/2018.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBQLG77h8mhQkiI7VSimBOBHJAqsPlpxa4';
//Create a new component. This component should produce some HTML
const App = () =>{
    return <div>Hi!!</div>
}


// Take this component's generated HTML and put it on the page(in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));