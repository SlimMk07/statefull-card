import React from 'react';
import Card from './card'
import Formulaire from './formulaire'
import './App.css';



export default class App extends React.Component{
  constructor(){
    super()  
    this.state={
    } 
  }
  statefull=(a,b,c)=>
  {
    this.setState({
      numero:a,
      nom:b,
      date:c,
    })
  }
  
  render(){
    return ( 
      <div className="app">
        <Card number={this.state.numero} name={this.state.nom} date={this.state.date}/>
       <Formulaire statefull={this.statefull}/>
      </div>
    )
  }
}