import React from 'react'

import {
  ButtonGroup,
  DropdownButton,
  MenuItem,
} from 'react-bootstrap'

import './Tag.css'

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
    </DropdownButton>
  </ButtonGroup>
);

export default Tag
