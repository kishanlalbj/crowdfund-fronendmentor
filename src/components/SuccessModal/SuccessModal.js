import React from 'react';
import check from '../../../public/images/icon-check.svg';
import './SuccessModal.css';

const SuccessModal = (props) => {
  const { onClose } = props;

  return (
    <div className='success-modal-container'>
      <div className='success-modal-body'>
        <img src={check} alt='check'></img>

        <p className='success-modal-title'>Thanks for your Support</p>

        <p className='success-modal-message'>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>

        <button className='btn' onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
