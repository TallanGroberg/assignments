import React from 'react';

const PhoneNumber = (props) => {
  const { state, handleChange} = props

  return (
    <div>
      <p>phone number</p>
        <input
        type='number'
        placeholder="phone Number"
        value={state.phoneNumber}
        name="phoneNumber"
        onChange={handleChange}
         />
    </div>
  );
};

export default PhoneNumber;