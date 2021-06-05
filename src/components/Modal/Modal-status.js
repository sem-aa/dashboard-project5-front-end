import React from 'react';
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

export default ModalStatus;