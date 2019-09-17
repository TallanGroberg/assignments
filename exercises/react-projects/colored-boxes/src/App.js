import React from 'react';
import Home from './components/Home'

function App() {


  let styles = {
    red: {
      backgroundColor: 'red',
    },
    blue: {
      backgroundColor: 'blue',
    },
    green: {
      backgroundColor: 'green',
    },
    grey: {
      backgroundColor: 'grey',
    },
    title: {
      theTitle: 'this is the title', 
      theSecondTitle: 'this is the second title',
      greensTitle: 'this is for green'
    },
    subTitle: {
      subTitle: 'sub Title',
      newSub: "the second subtitle"
    },
    info: {
      theInfo: 'this is some prop drilling',
      message: 'and OOJ work for sure'

    }


    }
  
  return (
    <>
      <Home
      wholething={styles}
       titles={styles.title.theTitle} 
       informationals={styles.info.theInfo}
       subTitles={styles.subTitle.subTitle}
       styles={styles.red} />
      <Home
      wholething={styles}
       titles={styles.title.theSecondTitle}
       subTitles={styles.subTitle.newSub}
       informationals={styles.info.message} 
       styles={styles.blue} />
       <Home 
       wholething={styles}
       titles={styles.title.greensTitle}
       styles={styles.green}
       subTitles={styles.subTitle.subTitle}
       informationals={styles.info.theInfo}
      
       />
       <Home 
       wholething={styles}
       titles={styles.title.greensTitle}
       styles={styles.green}
       subTitles={styles.subTitle.subTitle}
       informationals={styles.info.theInfo}
      
       />
       <Home 
       wholething={styles}
       titles={styles.title.greensTitle}
       styles={styles.green}
       subTitles={styles.subTitle.subTitle}
       informationals={styles.info.theInfo}
      
       />
       <Home 
       wholething={styles}
       titles={styles.title.greensTitle}
       styles={styles.green}
       subTitles={styles.subTitle.subTitle}
       informationals={styles.info.theInfo}
      
       />
       <Home 
       wholething={styles}
       titles={styles.title.greensTitle}
       styles={styles.green}
       subTitles={styles.subTitle.subTitle}
       informationals={styles.info.theInfo}
      
       />

      

    </>
  );
}

export default App;
