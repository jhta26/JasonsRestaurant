import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// function Welcome(props){
//   return (<h1>Hello, {props.name} </h1>)
// }

const Welcome = ({ name }) => (
	<div>
  <h1>Hello, {name} </h1>
  <p> My name is {name}</p>
</div>
)





export default Welcome

