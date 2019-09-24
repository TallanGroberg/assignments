import React from 'react';
import {Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import About from './About'
import Nav from './Nav'
import NoMatch from './NoMatch'
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []

    }
  }

  

componentDidMount() {
  axios.get(`https://api.vschool.io/tallan/todo/`)
    .then( res => {
      this.setState(prev => ({ 
        todos: [...res.data, ...prev.todos]
      }))
      console.log('todos: ', this.state.todos)
    })
    .catch( err => console.log(err))
}

  render() {
    const { todos } = this.state
    return (
<>
      
   <Nav />
      <Switch>
        <Route exact path='/' render={ rProps => <Home style={ContainerStyle} todos={todos} {...rProps} />} />
        <Route exact path='/about' render={ rProps => <About {...rProps} />} />
        <Route path component={NoMatch} />
      </Switch>

    

      
</>
  );
  }
}

const ContainerStyle = styled.div`

width: 200px;
height: 200px;
background-color: rebeccapurple;


font-family: sans-serif;

`;

export default App;
