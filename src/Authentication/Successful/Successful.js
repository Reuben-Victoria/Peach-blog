import React from 'react';
import Button from '../../Common/Button/Button';
import Success from '../../Components/Success/Success';
import styles from './Succesful.module.scss';

function Successful() {
  return (
    <div className={styles.successWrap}>
      <Success heading={'Successful'} text={'Your password have been successfully reset'} />
      <Button type={'submit'} theme={'secondary'} size={'lg'} text={'Continue'} />
    </div>
  );
}

export default Successful;
