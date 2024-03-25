import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import propTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={handleChange}
        className={styles.filterInput}
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
