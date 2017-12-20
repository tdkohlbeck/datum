import React, { Component } from 'react';
import logo from './logo.svg';

import {
  Badge,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
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

let Datum = (props) => {
  let DatumState
  if (props.mode == 'default') {
    DatumState = (
      <ButtonToolbar>
        <Tag />
        <Tag />
      </ButtonToolbar>
    )
  } else if (props.mode == 'edit') {
    DatumState = (
      <ButtonToolbar>
        <Tag />
        <Tag />
        <AddTagButton />
      </ButtonToolbar>
    )
  }
  return DatumState
}

let AddButton = (props) => (
  <Button bsStyle='primary'>
    <b>+</b>
  </Button>
)

let DatumBar = (props) => (
  <div id='datum-bar'>
    <Datum mode='edit'/>
    <AddButton />
    <Custom />
  </div>
)

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <DropdownButton
        href=""
        onClick={this.handleClick}
      >
        {this.props.children}
      </DropdownButton>
    );
  }
}

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = e => this.setState({ value: e.target.value });

    this.state = { value: '' };
  }

  focusNext() {
    const input = React.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return (
      <div className="dropdown-menu">
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(child => (
            !value.trim() || child.props.children.indexOf(value) !== -1
          ))}
        </ul>
        <FormControl
          ref={(c) => { this.input = c; }}
          type="text"
          placeholder="Type to filter..."
          onChange={this.onChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

const Custom = () => (
  <Dropdown id="dropdown-custom-menu" dropup>
    <CustomToggle bsRole="toggle">
      Custom toggle
    </CustomToggle>

    <CustomMenu bsRole="menu">
      <MenuItem eventKey="1">Red</MenuItem>
      <MenuItem eventKey="2">Blue</MenuItem>
      <MenuItem eventKey="3" active>Orange</MenuItem>
      <MenuItem eventKey="1">Red-Orange</MenuItem>
    </CustomMenu>
  </Dropdown>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListGroup>
          <ListGroupItem>
            <Datum mode='default'/>
          </ListGroupItem>
          <ListGroupItem>
            <Datum mode='default'/>
          </ListGroupItem>
        </ListGroup>
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
