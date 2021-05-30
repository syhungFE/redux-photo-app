/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ModalCustom = (props) => {
  const {
    className,
    colorButton,
    modalTitle,
    modalContent,
    modalAction
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className={className}>
      <Button color={colorButton} onClick={toggle}>{modalTitle}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>
          {modalContent}
        </ModalBody>
        <ModalFooter>
          <Button color={colorButton} onClick={toggle}>{modalAction}</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCustom;