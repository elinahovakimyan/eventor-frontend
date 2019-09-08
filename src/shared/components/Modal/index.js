import './styles.scss';

import React from 'react';
import ReactModal from 'react-modal';
import { Icon } from 'antd';


function Modal({
  isOpen, onClose, className, children,
}) {

  return (
    <ReactModal shouldCloseOnEsc shouldCloseOnOverlayClick isOpen={isOpen} className={`Modal ${className}`}>
      <div className="Modal__box">
        <Icon type="close" className="Modal__box__close" onClick={onClose} />

        {children}
      </div>
    </ReactModal>
  );
}


export default React.memo(Modal);
