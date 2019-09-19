import React from 'react';

const Name = (props) => {
  const { state } = props
  return (
    <div>

    {state.names.map( (name, i ) => {
      return <h1 key={i}>{name}</h1>
    })}
    </div>
  );
};

export default Name;