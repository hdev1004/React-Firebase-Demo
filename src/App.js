import logo from './logo.svg';
import './App.css';
import Users from './Users';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import firebaseInit, {fire, getFireDB } from './firebaseInit';
import React, { Component, useState } from 'react';

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
        <Switch>
          <Route exact path="/" render={()=><Users users={users}/>}/>
        </Switch>
      </div>
    )
  }
}