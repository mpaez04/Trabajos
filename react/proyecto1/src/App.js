import Header from './Components/Header';
import React, { Component } from 'react';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component{
  render(){
    return (
      <div className= "App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  };
}
export default App;
