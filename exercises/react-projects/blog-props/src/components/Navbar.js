import React, { useState, } from 'react';
import styled from 'styled-components'


const Navbar = (props) => {
  const [count, setCount] = useState([])

  const addDiv = (arg) => {
    let nav = ['', '', 'home', 'about', 'simple post', 'contact']

    while (arg > 0) {
      nav.map(i =>  count.push(`div${arg-- +1} ${i}`))
    }
  }

  console.log(count)

  addDiv(6)
  return (
    <NavStyle>
      <div></div>
     <p className="boot-strap">Start Bootstrap</p>
     {count.map(id => {
       return <> 
       <div class={id.split(" ")[0]}> {id.split(" ")[1]}</div>
      

       </>
     })}
    </NavStyle>
  );
};

const NavStyle = styled.div`

display: grid;
grid-template-columns: 2fr repeat(11, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
.div1 { grid-area: 1 / 3 / 2 / 4; }
.div2 { grid-area: 1 / 7 / 2 / 8; }
.div3 { grid-area: 1 / 8 / 2 / 9; }
.div4 { grid-area: 1 / 9 / 2 / 10; }
.div5 { grid-area: 1 / 10 / 2 / 11; }
.div6 { grid-area: 1 / 11 / 2 / 12; }
  color: white; 
  
  div {
    margin: 15px 0 0 0;
  }

  line-height: inherit;
  white-space: nowrap;

  font-family: sans-serif;
    text-transform: capitalize;
    text-align: center;
    .boot-strap {font-size: 20px;}
    color: rgb(255, 255, 255);
    background-color: rgba(164, 131, 116, 0);

`;


export default Navbar;