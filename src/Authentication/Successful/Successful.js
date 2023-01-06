// import React from 'react';
// import Button from '../../Common/Button/Button';
// import Success from '../../Components/Success/Success';
// import styles from './Succesful.module.scss';

//   return (
//     <div className={styles.successWrap}>
//       <Success heading={'Successful'} text={'Your password have been successfully reset'} />
//       <Button type={'submit'} theme={'secondary'} size={'lg'} text={'Continue'} />
//     </div>
//   );
// }

// export default Successful;

import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function Successful() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
export default Successful;
