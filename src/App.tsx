//imports
import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//file modularity
import SideNav from './AppComponents/SideNav';
import TopNav from './AppComponents/TopNav';
import Seamus from './AppComponents/Seamus'
import Home from './AppComponents/Home'
import Data from './AppComponents/Data'

//styles
import '../styles/Main.scss'

//parent React Component + manages React Router
const App: React.FC = () => {
    return (
    <div className="appDiv">
        <Router>
            <TopNav />
            <SideNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/data" component={Data} />
            <Route path="/seamus" component={Seamus} />
          </Switch>
        </Router>
    </div>
 )
}

//renders App and its children at the root id on index.html
ReactDOM.render(<App />, document.querySelector('#root'));