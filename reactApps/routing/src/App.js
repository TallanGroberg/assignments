import React from 'react';
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import NoMatch from './components/NoMatch'
import Body from './components/Body'
import { Route , Switch } from 'react-router-dom'
//use the render to <Home /> syntax from now on
// conponent will not work to pass props
function App() {
  let someStuff = "a string"

  let newThing = "read in the dev tools "
  return (
    <>
    <Nav title="head" />
    <Switch>
    <Route exact path='/' render={ rProps => <Home {...rProps} someStuff={someStuff} />} />
    <Route exact path='/about' render={ rProps => <About {...rProps} someStuff={someStuff} />} />
    <Route exact path='/body' render={ rProps => <Body {...rProps} someStuff={someStuff} />} />
      
      <Route component={NoMatch} />
    </Switch>
    <Nav title="foot" />
    </>
  );
}

export default App;
