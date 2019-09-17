import React from 'react';

const Grey = (props) => {
  const { wholethings } = props
  return (
    <div style={wholethings.grey}>
      <h1>the grey stuff three levels deep!!!!</h1>
    {console.log(props),
    console.log(props.wholethings.grey)
    }
    </div>

  );
};

export default Grey;