import React from 'react';

const PlaceOfBirth = (props) => {
  const { state, handleChange} = props
  return (
    <div>
      <p>place of birth</p>
      <input
      placeholder="place of birth"
      name="placeOfBirth"
      value={state.placeOfBirth}
      onChange={handleChange}
       />
    </div>
  );
};

export default PlaceOfBirth;