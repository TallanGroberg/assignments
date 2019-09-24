import React from 'react';

const LastName = (props) => {
  const { handleChange, state } = props
  return (
    <div>
      <p>Last Name</p>
      <input
        type='text'
        placeholder="last name"
        value={state.lastName}
        name="lastName"
        onChange={handleChange}
        />
    </div>
  );
};

export default LastName;