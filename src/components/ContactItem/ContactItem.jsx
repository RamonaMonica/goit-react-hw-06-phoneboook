import React from 'react';

import propTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.listItem}>
    <p>
      {contact.name}: {contact.number}
    </p>
    <button
      type="button"
      onClick={() => onDeleteContact(contact.id)}
      className={styles.deleteButton}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactItem;
