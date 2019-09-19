import React from 'react'
import Controls from './Controls'
import UserList from './UserList'

class NextLev extends React.Component {
  constructor() {
    super()
    this.state = {
      users: ['rick', 'morty', 'beth', 'bird man '] 
    }
  }
  addJerry = () => {this.setState((prevState) => ( { users: [...prevState.users, 'jerry']} ))}

  sayName = () => { }

  render() {
   
    return (
      <div>
    
      <UserList users={this.state.users} />
      <Controls addJerry={this.addJerry} />
      </div>
    )
  }
}

export default NextLev