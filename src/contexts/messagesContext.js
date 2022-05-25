import { useState, useEffect, createContext} from 'react';
import { base_URL } from '../helpers/constants.js';
import Service from '../services/ServiceClass.js';

const messages_URL = `${base_URL}/messages`;

export const MessagesContext = createContext();


export const MessagesProvider = ({children}) => {

    const [messages, setMessages] = useState([]);

    const messagesService = new Service(messages_URL);

    useEffect(() => {
       messagesService.getAll()
       .then(response => {
           setMessages(response.data);
       })
       .catch(err => {
           console.log(err);
    })
    }, []);

    const deleteMessage = (id) => {
        messagesService.delete(id)
        .then(_ => {
            setMessages(messages.filter(message => message.id !== id));
            alert("Succesfully deleted message!");
        })
        .catch(err => {
            console.log(err);
        })
    }

    const createMessage = (data) => {
        messagesService.create(data)
        .then(_ => {
            setMessages([...messages, data])
            alert("Successfully created message!");
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <MessagesContext.Provider value={{messages, deleteMessage, createMessage}}>{children}</MessagesContext.Provider>
    );
}

