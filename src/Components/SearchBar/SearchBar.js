import React from 'react';
import searchIcon from '../../assets/Search.svg';
import styles from './SearchBar.module.scss';
import PropTypes from 'prop-types';

function SearchBar({ value, onChange }) {
  return (
    <div className={styles.input}>
      <input value={value} onChange={onChange} />
      <div className={styles.input__search}>
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBar;
