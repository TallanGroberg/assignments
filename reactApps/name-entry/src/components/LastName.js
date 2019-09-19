import React from 'react';


const LastName = (props) => {

  const { handleChange, state} = props
  return (
      <>
      <p>First Name</p>
      <input
        type='text'
        name='lastName'
        placeholder='last name'
        value={state.lastName}
        onChange={handleChange}
      />
      <br />
      </>
  );
};

export default LastName;