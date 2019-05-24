import React, { Component } from 'react';

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state={ number:'**** **** **** ****', name:'**********',date:'**/**' }
  }


  theNumber(e){
    // card number Type (only Numbers)
    if(e.target.value[e.target.value.length-1] !== parseInt(e.target.value[e.target.value.length-1]).toString() 
        && e.target.value.length%5 !== 0){
      e.target.value=e.target.value.slice(0, e.target.value.length-1)
    }
    //  spaces between card numbers 
    if( e.target.value.length %5 === 4 ){
      e.target.value=e.target.value+' '
    }
    this.setState({
      number: e.target.value+"**** **** **** ****".slice(e.target.value.length)
    }, ()=> this.props.statefull(this.state.number,this.state.name,this.state.date) )  
  }


  // Holder Name
  theName(e){ 
    this.setState({name: e.target.value.toUpperCase()},
      ()=> this.props.statefull(this.state.number,this.state.name,this.state.date) )  
  }


  theDate(e){
    //date is numbers
    if(e.target.value[e.target.value.length-1] !== parseInt(e.target.value[e.target.value.length-1]).toString()){
      e.target.value=e.target.value.slice(0, e.target.value.length-1)
    }

    //  the month 12 max
    if(e.target.value[0]+e.target.value[1] > 12)  e.target.value=e.target.value[0]
    if(e.target.value[0]> 1 ) e.target.value=''
   
    // slash between Month and year
    if(e.target.value.length===2) e.target.value =e.target.value+'/'
    this.setState({
      date:  (typeof e.target.value[0]==='undefined')? '**/**':
             (typeof e.target.value[1]==='undefined')? e.target.value.slice(0,1)+'*/**':
             (typeof e.target.value[3]==='undefined')? e.target.value.slice(0,2)+'/**':
             (typeof e.target.value[4]==='undefined')? e.target.value.slice(0,4)+'*':
             e.target.value
    },()=> this.props.statefull(this.state.number,this.state.name,this.state.date) )
    
  }
  render() { 
    return ( 
      <div className="form">
      <input type="text" maxLength="19" placeholder="Card Number" onChange={(event) => {this.theNumber(event)}}/>
      <input type="text" maxLength="20" placeholder="Mr/Ms" onChange={(event) => {this.theName(event)}}/>
      <input type="text" maxLength="5" placeholder="Expiration date" onChange={(event) => {this.theDate(event)}}/>
    </div>
     );
  }
}
 
export default Formulaire;