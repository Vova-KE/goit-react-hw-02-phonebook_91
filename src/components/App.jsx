import React, { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList/index';
import style from './style.module.css';

class App extends Component {
  state = {
    contacts: ['asdsdc', 'asxasx'],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log('data', data);
  };

  render() {
    return (
      <div className={style.wrapper}>
        <Form onSubmitForm={this.formSubmitHandler} />
        <h2 className={style.title}>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
