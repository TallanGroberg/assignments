import React from 'react';
import Grey from './Grey'

const Home = (props) => {

  const {styles, titles, subTitles, informationals } = props
  return (
    <div style={styles} >
      <h1>{titles}</h1>
        <h4>{subTitles}</h4>
        <p>{informationals}</p>
        <Grey wholethings={props.wholething} />
       
    </div>
  )
}

export default Home;