import React from 'react';
import Button from '../../Common/Button/Button';
import Success from '../../Components/Success/Success';
import styles from './Succesful.module.scss';

function Successful() {
  // const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modalContent}>
        <div className={styles.successWrap}>
          <Success heading={'Successful'} text={'Your password have been successfully reset'} />
          <Button type={'submit'} theme={'secondary'} size={'lg'} text={'Continue'} />
        </div>
      </div>
    </div>
  );
}

export default Successful;
