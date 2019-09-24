import React, { Component } from 'react';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    name: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newName = `${this.state.firstName} ${this.state.lastName}`
    this.setState(prevState => ({
      name: [...prevState, newName]
    }))
    console.log(this.state)
  }
  handleChange = (e) => {
    e.preventDefault()
    const { name, value, } = e.target
    this.setState({
      [name]: value
    })

    
    console.log("change", this.state)
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="first name"
            name="firstName"
            value={this.state.firstName}
            type="text"
            onChange={this.handleChange}
          />


          <input
            placeholder="last name"
            name="lastName"
            value={this.state.lastName}
            type="text"
            onChange={this.handleChange}
          />


          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default App;
