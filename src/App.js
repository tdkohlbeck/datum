import React, { Component } from 'react';
import logo from './logo.svg';

import {
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  FormControl,
  FormGroup,
  Jumbotron,
  Label,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Navbar,
} from 'react-bootstrap';

import './App.css';
import Tag from './Tag';

let AddTagButton = (props) => (
  <Button>
    <b>+</b>
  </Button>
)

let Datum = (props) => (
  <ButtonToolbar>
    <Tag />
    <Tag />
    <AddTagButton />
  </ButtonToolbar>
)

let AddButton = (props) => (
  <Button bsStyle='primary'>
    <b>+</b>
  </Button>
)

let DatumBar = (props) => (
  <div id='datum-bar'>
    <Datum />
    <AddButton />
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav bsStyle='pills' id='datum-bar-nav'>
          <NavItem>
            <DatumBar />
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default App;
