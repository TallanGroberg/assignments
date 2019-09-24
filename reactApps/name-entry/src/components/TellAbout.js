import React from 'react';

const TellAbout = (props) => {

  const {state, handleChange} = props
  return (
    <div class="tell-about">
      <p>tell us about yourself</p>

      <textarea
      rows="4" cols="50"
      placeholder="tell us about yourself"
      name='tellAbout'
      value={state.tellAbout}
      onChange={handleChange}
      />
    </div>
  );
};

export default TellAbout;