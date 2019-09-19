import React from 'react';
import styled from 'styled-components'
import Navbar from './Navbar'
import img from './image/home-bg.jpg'
const Header = (props) => {
  return (
    <HeaderStyle>
      <Navbar />
      <h1 class='clean-blog'>Clean Blog</h1>
      <p class="sub-title">A Blog theme by start Bootstrap</p>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  height: 66vh;
background-image: url(${img});
color: white;
position: relative;
bottom: 8px;
text-align: center;
font-family: sans-serif;

.clean-blog {
  position: relative;
  top: 47px;
}
.sub-title {
  position: relative;
  top: 60px;
}
`;

export default Header;