import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormBookLabel, FormBookInput, SubmitBtn } from './FormStyled';
export class FormContainer extends React.Component {
  state = { name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.props.contacts.find(
        contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }
    this.props.addNewContact(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormBookLabel>
          Name
          <FormBookInput
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormBookLabel>
        <FormBookLabel>
          Number
          <FormBookInput
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormBookLabel>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}

FormContainer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  addNewContact: PropTypes.func.isRequired,
};
