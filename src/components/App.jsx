import React, { Component } from 'react';
import ContactForm from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import style from './style.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    // console.log('data', Object.entries(data));
    console.log('data', data);
    // const objName = Object.keys(data);
    // const objNumber = Object.values(data);
    // console.log('objName', objName);
    // console.log('objNumber', objNumber);
    // const arrData = Object.entries(data);

    //   this.setState(prevState => ({
    //     contacts: [...prevState.contacts[objName], objNumber],
    //   }));
  };

  render() {
    return (
      <div className={style.wrapper}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmitForm={this.formSubmitHandler} />
        <h2 className={style.title}>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
