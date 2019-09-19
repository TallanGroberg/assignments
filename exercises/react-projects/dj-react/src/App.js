import React from 'react';
import styled from 'styled-components'
import Square from './Square'
import Button from './Button'

class App extends React.Component {
  constructor() {
    super()
    this.state =  { 
      colors: 'white',
      toggle: false,
    }
  }
  
  

  toggle1 = () => {

    this.setState( {toggle: !this.state.toggle } )
    if (this.state.toggle === true) {
      this.setState( {colors: this.state.color = 'black'} )
    } else {
      this.setState( {colors: this.state.color = 'white'})
    }
    

    console.log('toggle', this.state.toggle, "colors", this.state.colors)

  }

  changeColors = () => {
    if (this.state.toggle === true) {

      console.log('blah ablha but face')
    }
  }

  
    render() {

      return (
        
        <div style={{
          display: 'grid',
          gridTemplate: 'repeat(2 , 1fr) / repeat(2, 1fr)',
          gridGap: 5,
          backgroundColor: 'aliceBlue',
          height: '100vh',
          
        }}>
      <Square  color={this.state.colors} />
      <Square  color={this.state.colors} />
      <Square  color={this.state.colors} />
      
      <Button toggle={this.toggle1}/>
    
        
        </div>
        
        
        );
      }
    }
  


export default App;
