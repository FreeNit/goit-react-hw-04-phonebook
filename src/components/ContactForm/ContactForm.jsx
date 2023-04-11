import { Component, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  FormWrapper,
  PhonebookForm,
  FormLabel,
  FormInput,
  AddContactBtn,
} from './ContactForm.styled';

export const ContactForm = ({
  updateContactList,
  checkUserAvailability,
  NotificationManager,
}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // -> Add contact to Local Storage
  const updateAddToLocalStorage = contact => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts) {
      const newContacts = [...localContacts, contact];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    } else {
      const newContacts = [contact];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isUserAvailable = checkUserAvailability(name);

    if (isUserAvailable) {
      NotificationManager.warning(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    updateAddToLocalStorage(contact);

    updateContactList(contact);

    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    switch (evt.target.name) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        console.log('Sorry, this element is not under control');
    }
  };

  return (
    <FormWrapper>
      <PhonebookForm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </PhonebookForm>
    </FormWrapper>
  );
};
