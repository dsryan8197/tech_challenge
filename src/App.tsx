import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//styles


const App: React.FC = () => {
    return (
    <div>
        <h1>React App!</h1>
        <Router>
            <Route />
            <Route />
        </Router>
    </div>
 )
}

ReactDOM.render(<App />, document.querySelector('#root'));