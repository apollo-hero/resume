import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Letter from "./Components/Letter"


export default class App extends Component {
  render(){
    return (
    <Router>
      <Route path = "/" exact component = { Home } />
      <Route path = "/Blog" exact component = { Blog } />
      <Route path = "/letter" component = {Letter} />
    </Router>
    );
  }
  
}

