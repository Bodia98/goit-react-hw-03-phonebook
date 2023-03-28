import React from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';
import { FormContainer } from 'components/Form/Form';
import { SearchContainer } from 'components/Filter/Filter';
import { ContactListContainer } from 'components/ContactList/ContactList';
import { FormTitle, ContactTitle, SearchTitle } from './PhoneBooksStyled';
export class PhoneBook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSearch = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onFilterArray = array => {
    return array.filter(contact => {
      const lowerCaseName = contact.name.toLowerCase();
      const lowerCaseFilter = this.state.filter.toLowerCase();
      return lowerCaseName.includes(lowerCaseFilter);
    });
  };

  handleClickDeleteBtn = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== e.target.id
      ),
    }));
  };

  addNewContact = (contactName, contactNumber) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        ...[
          {
            name: contactName,
            id: nanoid(),
            number: contactNumber,
          },
        ],
      ],
    }));
  };

  createArrayOfContacts = () => {
    if (this.state.filter !== '') {
      return this.onFilterArray(this.state.contacts);
    }
    return this.state.contacts;
  };

  render() {
    return (
      <Box>
        <FormTitle>Phonebook</FormTitle>
        <FormContainer
          contacts={this.state.contacts}
          addNewContact={this.addNewContact}
        />
        <Box>
          <ContactTitle>Contacts</ContactTitle>
          <SearchTitle>Find contacts by name</SearchTitle>
          <SearchContainer
            filter={this.state.filter}
            handleSearch={this.handleSearch}
          />
          <ContactListContainer
            arrayOfContacts={this.createArrayOfContacts()}
            handleClickDeleteBtn={this.handleClickDeleteBtn}
          />
        </Box>
      </Box>
    );
  }
}
