import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({onChangeFunction, onSearchFunction}) => {
  return (
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={onChangeFunction}
        />
        <Button variant="primary" onClick={onSearchFunction}>Search</Button>
      </Form>
  )
}

export default SearchBar