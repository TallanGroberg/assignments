
import React from 'react';
import { stat } from 'fs';

const FirstName = (props) => {

  const {handleChange,  state, } = props
  return (
    <>
    <p>Last Name</p>
        <input 
        type="text"
        placeholder="first name"
        value={state.firstName}
        onChange={handleChange}
        name='firstName'
        />
        </>
  );
};

export default FirstName;
