//imports
import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//file imports
import SideNav from './AppComponents/SideNav';
import TopNav from './AppComponents/TopNav';
import Seamus from './AppComponents/Seamus'
import Home from './AppComponents/Home'
import Data from './AppComponents/Data'
//styles
import '../styles/Main.scss'


const App: React.FC = () => {
    return (
    <div>
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

ReactDOM.render(<App />, document.querySelector('#root'));