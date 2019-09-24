import React, { Component } from 'react';
import styled from 'styled-components'
import Todo from './Todo'
const Home = (props) => {


  const { todos, style } = props
 
    return (
      <div>
        {todos.map(t => {
          return (
            <TodoStyle>
              <Todo todo={t} />
            </TodoStyle>
              
            )
        } )}
      </div>
    );
  }

  const TodoStyle = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template: repeat(2, 1fr) / repeat(5, 1fr);
  grid-auto-flow: dense;
  img {
    height: 400px;
    width: 400px;
  }
  `;

export default Home;