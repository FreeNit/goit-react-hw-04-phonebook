import { useState, useEffect, useRef } from 'react';

import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { TitleMain, TitleContacts } from './App.styled';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isMounted = useRef(false);

  // -> set the contacts based on local storage at the beginning
  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      setContacts(JSON.parse(localContacts));
    }
  }, []);

  // -> update local storage and state
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const updateContactList = contact => {
    setContacts([contact, ...contacts]);
  };

  const checkUserAvailability = userName => {
    return contacts.find(contact => contact.name === userName);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilter = evt => {
    setFilter(evt.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <TitleMain>Phonebook</TitleMain>
        <ContactForm
          updateContactList={updateContactList}
          checkUserAvailability={checkUserAvailability}
          NotificationManager={NotificationManager}
        />
      </div>
      {contacts.length > 0 && (
        <div>
          <TitleContacts>Contacts</TitleContacts>
          <Filter filterValue={filter} handleFilter={handleFilter} />
          <ContactList
            filter={filter}
            contacts={contacts}
            deleteContact={deleteContact}
          />
        </div>
      )}

      <NotificationContainer />
      <GlobalStyle />
    </div>
  );
};
