import React from 'react';
import { useContext, useState } from 'react';
import { SearchBar } from '../../../components/components.js';
import { Table, Button } from 'react-bootstrap';
import { MessagesContext } from '../../../contexts/messagesContext';
import './DashboardMessages.css';

const DashboardMessages = () => {

  const {messages, deleteMessage} = useContext(MessagesContext);

  const [messagesQuery, setMessagesQuery] = useState("");

  const printMessages = () => {
    return messages.map(({id, email, message }, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{id}</td>
                <td>{email}</td>
                <td>{message}</td>
                <td><Button variant="danger" onClick={() => { deleteMessage(id) } }>X</Button> <Button variant="success">V</Button></td>
              </tr>
    ))
  }

  return (
    <div>
        <div className="messages">
      <div className="search-bar-container">
            <h3>Messages</h3>
            <SearchBar onChangeFunction={(event) => { setMessagesQuery(event.target.value) }}/>
        </div>
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>From</th>
                    <th>Message</th>
                    <th>Activities</th>
                  </tr>
                </thead>
                <tbody>
                  { printMessages() }
                </tbody>
            </Table>
      </div>
    </div>
  )
}

export default DashboardMessages