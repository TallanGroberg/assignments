import React from 'react';

const Pet = (props) => {
  

 const {name, breed } = props.pet
  return (
    <div>
      
      <h2>Pet: {name}</h2>
      <h4>Breed: {breed}</h4>
    </div>
  );
};

export default Pet;