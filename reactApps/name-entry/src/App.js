import React from 'react';
import styled from 'styled-components'
import FirstName from './components/FirstName'
import LastName from './components/LastName';
import Button from './components/Button'
import Name from './components/Name'
import Fade from 'react-reveal/Fade';

class App extends React.Component {

    state = {
      firstName: '',
      lastName: '',
      names: [],
      toggle: false,
    }
  
  handleChange = (e) => {
    e.preventDefault()
    this.setState( {[e.target.name]: e.target.value, })
    this.setState({toggle: false})
  }

  
handleSubmit = (e) => {
  e.preventDefault() 
  const newName = `${this.state.firstName} ${this.state.lastName}`
  this.setState(prevState => ({
    names: [...prevState.names, newName ],
    firstName: '',
    lastName: '',
    toggle: true,
  }))
}
  render() {
    console.log(this.state)
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>

          <FirstName handleChange={this.handleChange} state={this.state}  />
    
          <LastName handleChange={this.handleChange} state={this.state} />
          
          <Button handleSubmit={this.handleSubmit} />
        </form>
        
        <Fade bottom collapse when={this.state.toggle === true}>
          <div>
        <Name state={this.state} />
          </div>
        </Fade>
        <Fade bottom when={this.state.toggle === false}>
          <div>
        {this.state.firstName + " " + this.state.lastName}
          </div>
        </Fade>

      </Container>
   );
  }
}

const Container = styled.div`
  div {
    text-align: center;
  }
  
  form {
    text-align: center;
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
  }
  background-color: aliceblue;
  height: 100vh;
`;

export default App;
