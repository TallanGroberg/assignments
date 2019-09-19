import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.change} onClick={props.toggle}>change stuff
      </button>
    </div>
  );
};

export default Button;