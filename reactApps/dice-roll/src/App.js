import React, { Component } from 'react';
import DiceBox from './DiceBox';


// make a random method for dice rolls 

class App extends Component {

  state = {
    diceRolls: [],
  }

  rand = () => {
    return Math.ceil(Math)
  }

  // return the number of rolls 
  roll = () => {
    
    let num = Math.floor(Math.random() * 6) 
    let num1 = Math.floor(Math.random() * 6) 
    let num2 = Math.floor(Math.random() * 6) 
    let num3 = Math.floor(Math.random() * 6) 
    let num4 = Math.floor(Math.random() * 6) 
    let num5 = Math.floor(Math.random() * 6) 

    const arrOfNums = [num, num1, num2, num3, num4, num5]
    this.setState(prev => ({
      diceRolls: [ ...prev.diceRolls,'', ...arrOfNums],
      
    }))
    console.log(this.state)
    return arrOfNums
  }
 
 


  render() {
    const {diceRolls } = this.state
    return (
      <div style={{
        display: 'grid',
        
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridGap: '5px',
        alignContent: 'center',
        textAlign: 'center',
    }}>
        
        <DiceBox state={diceRolls} roll={this.roll} />
      {diceRolls.map( (d, i) => {
        return <h1 style={{border: '1px solid black',}} key={i}>{d}</h1>
      })}
      </div>

    );
  }
}

export default App;
