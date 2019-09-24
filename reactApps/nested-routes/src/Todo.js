import React from 'react';
import styled from 'styled-components'

const Todo = (props) => {

  const { todo} = props
  return (
    <PropsStyle>
        <h1>{todo.title}</h1>
              <p>completed: {todo.completed}</p>
                <img src={todo.imgUrl} />
              <p>{todo.description}</p>
              <button>Delete</button>
    </PropsStyle>
  );
};

const PropsStyle = styled.div`
display: ${props => props.rules}

${console.log(props => props.rules.display)}
`

export default Todo;