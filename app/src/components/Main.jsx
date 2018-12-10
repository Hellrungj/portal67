import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Questions from './Questions/Questions';
import Nav from './Nav/Nav';
import End from './End';
import Credits from './Credits';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Questions}/>
      <Route path='/Nav' component={Nav}/>
      <Route path='/End' component={End}/>
      <Route path='/Credits' component={Credits}/>
    </Switch>
  </main>
)

export default Main