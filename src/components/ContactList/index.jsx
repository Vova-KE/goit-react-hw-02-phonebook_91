import React from 'react';
import ContactItem from '../ContactItem';
import style from './style.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        // <li key={contact.id}>{contact}</li>
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
