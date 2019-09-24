import React from 'react';
import styled from 'styled-components'
import img from './images/texture.jpeg'

const Names = props => {
  const {themes, state,} = props

  return (
      <>


        {state.map( state => {
          return(
            <>
        <NameStyle>
          <h4 class="badge">Badge: </h4>
          <p>first name: {state.firstName}</p> 
        <p> last name: {state.lastName}</p>
        <p>phone: {state.phoneNumber}</p>
        <p>email: {state.email}</p>
        <p>favorite food: {state.favoriteFood}</p>
        <p>Place of birth: {state.placeOfBirth}</p>
        
    

        <textarea 
        rows="4" cols="50"
        placeholder={state.tellAbout}
        />
   
      </NameStyle>
        </>
          )
        }
      )
    }
      <br />
      </>
    
  );
};

const NameStyle = styled.div`

display: grid;
grid-template: repeat(3, 1fr) / repeat(2, 1fr);
grid-gap: 20px;
height: 20px;


.badge {
    top: -28px;
    border: 1px solid black;
    background-color: cadetblue;
    grid-column: 1 / -1;
  
  
}

textarea {
  grid-column: 1 / -1;
  border: 1px solid black;

}

p {
  border-bottom: 1px solid black;
}

font-family: Arial, Helvetica, sans-serif;
font-size: 21px;
letter-spacing: 1px;
word-spacing: -5px;
color: #000000;
font-weight: normal;
text-decoration: none solid rgb(68, 68, 68);
font-style: normal;
font-variant: normal;
text-transform: none;

  position: relative;
  margin: auto;
  left: 0;
  right: 0;
  border: 1px solid black;
  height: 50%;
  width: 50%;


`;


export default Names;