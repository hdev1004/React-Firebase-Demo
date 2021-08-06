import logo from './logo.svg';
import './App.css';

import Users from './pages/Users';
import UserSearch from './pages/UserSearch';
import UserAdd from './pages/UserAdd';
import ItemManage from './pages/ItemManage';

import { BrowserRouter as Switch, Route } from "react-router-dom";
import firebaseInit, {fire, getFireDB, setFireDB } from './firebaseInit';
import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonToolbar, Alert, Navbar, Nav, Form, FormControl, Spinner, Card } from 'react-bootstrap';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default class App extends Component {
  constructor() {
      super();
      const meta = document.createElement('meta');
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.5, maximum-scale=1.0, viewport-fit=cover";
      document.getElementsByTagName('head')[0].appendChild(meta);
  }
  render(){
    
    return (     
        <div>
          <Navbar bg="dark" variant="dark" className="black-nav">
            <Navbar.Brand href="/">HOME</Navbar.Brand>&nbsp;&nbsp;&nbsp;
            <Nav className="mr-auto">
              <Nav.Link href="/userAdd">회원 추가</Nav.Link> &nbsp;&nbsp;&nbsp;
              <Nav.Link href="/ItemManage">물품 관리</Nav.Link>&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#pricing">회원순위</Nav.Link>&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#pricing">통계</Nav.Link>
            </Nav>
          </Navbar>

        <Switch>
          <Route exact path="/" component={UserSearch}/>
          
          {/* <Route exact path="/second" render={()=><Users users={users}/>}/> */}
          <Route exact path="/userAdd" component={UserAdd}/> 
          <Route exact path="/ItemManage" component={ItemManage}/> 
        </Switch>

        <h1>End</h1>
      </div>
    )
  }
}