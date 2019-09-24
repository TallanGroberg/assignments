import React from 'react';

const DiceBox = (props) => {
  const { roll, state } = props
  return (
    <div style={{ gridRow: '1 / -1'}}>
      <h1>{props.state.diceRolls}</h1>
      <button onClick={roll}>Roll the Dice</button>
    </div>
  );
};

export default DiceBox;