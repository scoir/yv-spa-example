import React, { Component } from 'react'
import './App.css'

import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';

import { Container, Menu } from 'semantic-ui-react'

import Home from './Home'
import Colleges from './Colleges'
import College from './College'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="App">
            <Menu>
              <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
              <Menu.Item as={NavLink} to="/colleges">Colleges</Menu.Item>
            </Menu>
            <section>
              <Switch>
                <Route path="/colleges" component={Colleges} />
                <Route
                  path="/college/:id"
                  render={({match}) => <College iped={match.params.id} />}
                  />
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
              </Switch>
            </section>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
