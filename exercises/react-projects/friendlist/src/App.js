import React from 'react';
import FriendsList from './FriendsList'
import Nav from './Nav'

import styled from 'styled-components'


const friends = [
  {
    name: "Ben",
    age: 29,
    pets: [
      {
        name: "spot",
        breed: "tabby"
      },{
        name: "John Johnson",
        breed: "husky"
      },{
        name: "Bear the bear",
        breed: "Grizzly"
      }
    ]
  },{
    name: "Bob",
    age: 31,
    pets: [
      {
        name: "Sally",
        breed: "Australian Shepard"
      }
    ]
  },{
    name: "Marcus",
    age: 25,
    pets: [
      {
        name: "Indy",
        breed: "Akita"
      },{
        name: "Anna",
        breed: "persian cat"
      }
    ]
  },{
    name: "Jacob",
    age: 20,
    pets: [
      {
        name: "fluffy",
        breed: "sphynx cat"
      },{
        name: "patches",
        breed: "sphynx cat"
      },{
        name: "tiger",
        breed: "sphynx cat"
      },{
        name: "oscar",
        breed: "sphynx cat"
      }
    ]
  }
]


function App() {
  return (
      <>
    <Nav title="Pets" />
      <Apps>
      <FriendsList  myFriends={friends} />
    </Apps>
      <Nav id="footer" title="pets" />
      </>
  );
}

const Apps = styled.div`

@media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1, 1fr);
 
}

@import url('https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope');


    font-family: "Annie Use Your Telescope", cursive;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    font-size: 35px;
    color: rgba(113, 65, 51, 0.83);
   
    text-shadow: rgb(0, 0, 0) 2px 2px 2px;

  #footer  {
    position:absolute;
   bottom:0;
   width:100%;  
   background:#6cf;
  }
`;


export default App;
