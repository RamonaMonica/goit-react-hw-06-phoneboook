import React, { useState } from 'react';
import propTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value.replace(/[^a-zA-Z '-]/g, ''));
        break;
      case 'number':
        setNumber(value.replace(/[^\d+() -]/g, ''));
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name: </p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <p>Number: </p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: propTypes.func.isRequired,
};

export default ContactForm;
