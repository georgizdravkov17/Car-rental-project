import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({onChangeFunction}) => {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={onChangeFunction}
        />
        <Button variant="primary">Search</Button>
      </Form>
  )
}

export default SearchBar