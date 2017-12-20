import React from 'react'

import {
  ButtonGroup,
  DropdownButton,
  MenuItem,
  FormControl,
} from 'react-bootstrap'

import './Tag.css'

class TagSearch extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.onChange = e => this.setState({ value: e.target.value })
    this.state = {value: '' }
  }

  focusNext() {
    const input = React.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }


  render() {
    return (
      <FormControl
      type='text'
      value={this.state.value}
      placeholder='Yay?'
      onChange={this.handleChange}
      />
    )
  }
}

const Tag = (props) => (
  <ButtonGroup>
    <DropdownButton
      title="Tag"
      dropup
      noCaret
    >
      <MenuItem eventKey="1">one tag</MenuItem>
      <MenuItem eventKey="2">another tag</MenuItem>
    </DropdownButton>
    <DropdownButton
      title="Value"
      dropup
      noCaret
    >
      <MenuItem eventKey="1">one value</MenuItem>
      <MenuItem eventKey="2">another value</MenuItem>
      <MenuItem eventKey="3">
        <FormControl
          ref = { (c) => { this.input = c; } }
          type='text'
          placeholder='yey?'
        />
      </MenuItem>
    </DropdownButton>
  </ButtonGroup>
);

export default Tag
