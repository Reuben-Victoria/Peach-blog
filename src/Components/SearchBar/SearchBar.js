import React from 'react';
import searchIcon from '../../assets/Search.svg';
import styles from './SearchBar.module.scss';

function SearchBar() {
  return (
    <div className={styles.input}>
      <input />
      <div className={styles.input__search}>
        <img src={searchIcon} alt="search icon" />
      </div>
    </div>
  );
}

export default SearchBar;
