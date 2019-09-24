import React from 'react';

const FirstName = (props) => {

  const { state, handleChange} = props
  return (
    <div>
      
        <p>first name</p>
        <input
        type='text'
        placeholder="first name"
        value={state.firstName}
        name="firstName"
        onChange={handleChange}
        />
        </div>
 
  );
};

export default FirstName;