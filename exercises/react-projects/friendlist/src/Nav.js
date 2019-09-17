import React from 'react';
import styled from 'styled-components'
import img from './images/texture.jpg'
const Nav = (props) => {
  return (
    <NavStyle>
      <h1>{props.title}</h1>
      <h1>Home</h1>
      <h1>about</h1>
    </NavStyle>
  );
};

const NavStyle = styled.div`
  @media only screen and (max-width: 800px) {
    font-size: 15px;
 
}
  display: grid;
  grid-gap: 5px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr) 5fr;
  background-image: ${img};
 font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    font-style: italic;

    font-size: 35px;
    color: rgba(113, 65, 51, 0.83);
  
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;
`;

export default Nav;