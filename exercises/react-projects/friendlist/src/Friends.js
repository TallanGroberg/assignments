import React, { useState, } from 'react';
import Pet from './Pet'
import styled from 'styled-components'
import img from './images/texture.jpg'

const Friends = (props) => {
  const [count, setCount] = useState([])
  

  const addUp = (arg) => {
    while (arg > 0) {
  
      count.push(arg--)
    }

  }
  
  console.log(addUp(props.friend.length))
  return (
    <div>
      { props.friend.map( f => {
        return (
          
            <Container >
              <div class='person'>
                
              <h1>{count.length -= 1 }: Name: {f.name}</h1>
              <h4>Age: {f.age}</h4>
              </div>
        {f.pets.map(p => {
        return <Pet  class="pets" pet={p} />
            }
          )
        }
            </Container>

        )
      })}
    </div>
  );
};



const Container = styled.div`
  border: 1px solid black;
  background-image: url(${img})
`;

export default Friends;