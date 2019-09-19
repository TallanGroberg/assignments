import React from 'react';
import styled from 'styled-components'

const BlogList = (props) => {

  const mappedcontent = props.content.map( c => {
    return ( <BlogStyle>
      <div class="blog">
      </div>
      <div class="start">
      <h1 >
        <a href="">{c.author} </a>
          <p><a href="">{c.title} <br />{c.subtitle}</a></p>
      </h1>
        <h3>
          {c.date}
        </h3>
          
      </div>
          <div class="end"></div>

            </BlogStyle>
    )
  })
  return (
      <>
      {mappedcontent}
      </>
  );
};

const BlogStyle = styled.div`

  display: flex;
  text-align: center;
  justify-content: center;
  border-bottom: 1px solid black;
  margin: auto;
  left: 0;
  right: 0;
  width: 66%;
  font-family: sans-serif;

   a {
     text-decoration: none;
     color: black;
     transition: 0.5s;
   }
   a:hover {
     color: blue;

   }
  .end {
    
  }
  .blog {
    
  }
  .start {
    
  }


`;

export default BlogList;