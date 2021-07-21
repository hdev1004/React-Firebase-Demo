import logo from './logo.svg';
import './App.css';

import Users from './pages/Users';
import UserSearch from './pages/UserSearch';
import UserAdd from './pages/UserAdd';

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
      this.state = {
        users: []
      };
      fire();
  }

  //랜더링을 마친 후
  componentDidMount() {
    //setFireDB('tester', 20);

    getFireDB()
    .then(res =>{
      this.setState({
        users : res.val().users
      })

      console.log("rendering : " + res.val().users);
    });
  }
  render(){
    const {
      users
    } = this.state;
    
    return (     
        <div>
          <Navbar bg="dark" variant="dark" className="black-nav">
            <Navbar.Brand href="/">HOME</Navbar.Brand>&nbsp;&nbsp;&nbsp;
            <Nav className="mr-auto">
              <Nav.Link href="/userAdd">회원 추가</Nav.Link> &nbsp;&nbsp;&nbsp;
              <Nav.Link href="#features">물품 관리</Nav.Link>&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#pricing">회원순위</Nav.Link>&nbsp;&nbsp;&nbsp;
              <Nav.Link href="#pricing">통계</Nav.Link>
            </Nav>
          </Navbar>

        <Switch>
          <Route exact path="/" component={UserSearch}/>
          
          {/* <Route exact path="/second" render={()=><Users users={users}/>}/> */}
          <Route exact path="/userAdd" component={UserAdd}/> 
        </Switch>

        <h1>End</h1>
      </div>
    )
  }
}