import React, { Component } from 'react';
import styled from 'styled-components'
import Names from './components/Names'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import PhoneNumber from './components/PhoneNumber'
import Email from './components/Email'
import PlaceOfBirth from './components/PlaceOfBirth'
import FavFood from './components/FavFood'
import TellAbout from './components/TellAbout'


class App extends Component { 
"use strict"
    state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    placeOfBirth: '',
    favoriteFood: '',
    tellAbout: '',
    names: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const {firstName, lastName, phoneNumber, email, placeOfBirth, favoriteFood, tellAbout  } = this.state
    const newName = { 
      firstName: this.state.firstName, 
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber, email: this.state.email,
      placeOfBirth: this.state.placeOfBirth,  favoriteFood: this.state.favoriteFood,
        tellAbout: this.state.tellAbout
    }


    this.setState(prev => ({
      names: [...prev.names,  newName],
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      placeOfBirth: '',
      favoriteFood: '',
    }))
  }
  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value 
    })

  }
  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <FormStyle>
        <FirstName  handleChange={this.handleChange} state={this.state} />
        <LastName handleChange={this.handleChange} state={this.state} />
        <PhoneNumber handleChange={this.handleChange} state={this.state} />
        <Email handleChange={this.handleChange} state={this.state} />
        <PlaceOfBirth handleChange={this.handleChange} state={this.state} />
        <FavFood handleChange={this.handleChange} state={this.state} />
        <TellAbout handleChange={this.handleChange} state={this.state} />
      <button>submit</button>
        </FormStyle>
      </form>

        <Names state={this.state.names} themes={this.color} />
      </>
      );
  }
}

const FormStyle = styled.div`
* {
  font-family: Arial, Helvetica, sans-serif;
font-size: 21px;
letter-spacing: 1px;
word-spacing: -5px;
color: #000000;
font-weight: normal;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: none;
}
position: relative;
margin: auto;
left: 0;
right: 0;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
text-align: center;
height: 75%;
width: 50%;
border: 1px solid black;

input, textarea {

  border: 1px solid black;

}
.tell-about {

  grid-column: 1 / -1;
  
}

button {

  position: relative;
  margin: auto;
  align-content: center;
  left: 0;
  right: 0;
  grid-column: 1 / -1
  
}

div {
  align-content: center;
}

`;





export default App;