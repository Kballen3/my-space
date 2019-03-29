import React from 'react';
import {Container, } from 'semantic-ui-react'
import {Switch, Route, } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import Register from './components/Register'
import FetchUser from './components/FetchUser'
import ProtectRoute from './components/ProtectRoute'
import YourFriends from './components/YourFriends'


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectRoute exact path="/" component={Home} />
          <ProtectRoute exact path="/my_friends" component={YourFriends} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;
