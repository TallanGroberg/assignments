import React from 'react';

const User = (props) => {
  return (
    <div>
      <button>say name </button> 
      <h1>{props.user}</h1>
    </div>
  );
};

export default User;