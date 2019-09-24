import React from 'react';

const FavFood = (props) => {

  const { state, handleChange} = props
  return (
    <div>
      <p>favorite food</p>
      <input 
      placeholder="favorite food" 
      name="favoriteFood"
      value={state.favoriteFood}
      onChange={handleChange}
      /> 
    </div>
  );
};

export default FavFood;