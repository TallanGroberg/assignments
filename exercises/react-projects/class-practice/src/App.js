import React from 'react';
import NextLev from './NextLev'

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      bgColor:  'blue',
      radius: 0,
      
    }
  }

    toggleColor = () =>  {
      this.setState({
        bgColor: this.state.bgColor = this.state.bgColor === 'blue' ? 'green' : 'blue'
    })
    }
    toggleRadius = () => {
      this.setState({radius: this.state.radius === 50 ? 0 : 50})
    }

  render() {
    return(
      <div>
        <div style={{
          width: 100,
          height: 100,
          borderRadius: this.state.radius,
          backgroundColor: this.state.bgColor
          }}></div>
          <button onClick={this.toggleColor}>changeColor</button>
          <button onClick={this.toggleRadius}>change Radius</button>
          <NextLev />
      </div>
    )
  }
}

export default App;
