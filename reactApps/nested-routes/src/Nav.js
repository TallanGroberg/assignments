import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = (props) => {
  return (
    <NavStyle>
     
      <Link to='/'>Home</Link>
      <Link to='/about'>about</Link>
    </NavStyle>
  );
};



const NavStyle = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);

  border: 1px solid black

`;

export default Nav;