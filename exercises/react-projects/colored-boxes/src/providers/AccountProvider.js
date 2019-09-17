import React from 'react'

const AccountContext = React.createContext()

export const AccountConsumer =AccountContext.consumer;

import React, { Component } from 'react';

class AccountProvider extends React.Component {
  state = {
    name: 'joefs',
    email: 'test@test.com',
    password: 'password',
  }
  render() {
    return (
      <AccountContext.Provider value={this.state}></AccountContext.Provider>
    );
  }
}

export default AccountProvider;