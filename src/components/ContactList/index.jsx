import React from 'react';
// import ContactItem from 'components/ContactItem';
import style from './style.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.list}>
      {contacts.map(contact => (
        <li key={contact} className={style.listItem}>
          {contact}
        </li>
        // <ContactItem key={contact} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
