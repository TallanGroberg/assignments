import React from 'react';

const Button = (props) => {

  
  return ( <>
            <br />
    <button onClick={props.handleSubmit}> Submit </button>
            </>);
};

export default Button;