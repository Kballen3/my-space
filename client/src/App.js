import React from 'react';
import {Container, } from 'semantic-ui-react'
import {Switch, Route, } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import Register from './components/Register'


const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
