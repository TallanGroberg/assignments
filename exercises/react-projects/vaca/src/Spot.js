import React from 'react';

const Spot = (props) => {
  return (
    <div>
      {props.theSpot.map( p => {
        return <>
        <h1>{p.place}</h1>
                  {p.price > 500 ? `$$${p.price}` : p.price }
                    <p style={{backgroundColor: "aliceBlue"}}>{p.timeToGo}</p>

                </>
      
      })}
    </div>
  );
};

export default Spot;