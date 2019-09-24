import React from 'react';

const Email = (props) => {

  const { state, handleChange} = props
  return (
    <div>
      <p>email</p>
        <input
        type='email'
        placeholder="Email"
        value={state.email}
        name="email"
        onChange={handleChange}
        />
    </div>
  );
};

export default Email;