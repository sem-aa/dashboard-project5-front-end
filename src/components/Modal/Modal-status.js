import React from 'react';
<<<<<<< Updated upstream
import s from "./Modal-status.module.css";

const ModalStatus = () => {
    return (
        <div className={s.modal}>
            <ul>
                <li className={s.modal__content}>STUFF</li>
                <li className={s.modal__content}>FAMILY</li>
                <li className={s.modal__content}>HEALTH</li>
                <li className={s.modal__content}>LEARNING</li>
                <li className={s.modal__content}>LEISURE</li>
                <li className={s.modal__content}>WORK</li>
            </ul>   
        </div>
  )
};
=======
import s from './Modal-status.module.css';
//import PropTypes from 'prop-types';//

const ModalStatus = ({  }) => (
    <div className={s.Overlay}>
        <li className={s.li}>STUFF</li>
        <li>FAMILY</li>
        <li>HEALTH</li>
        <li>LEARNING</li>
        <li>LEISURE</li>
        <li>WORK</li>
    </div>
);

//ModalDelete.propTypes = {};//
>>>>>>> Stashed changes

export default ModalStatus;