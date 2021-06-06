import React from 'react';
<<<<<<< Updated upstreamтзь
import s from "./Modal-hard.module.css";
import sprite from '../../icon/sprite.svg';
import s from './svg.module.css';

const ModalHard = () => {
    return (
        <div className={s.modal}>
            <ul>
                <li className={s.modal__content}>
                    <svg className={s.iconEasy}>
                        <use href={sprite + "#Elipse"}></use>
                    </svg>EASY</li>
                <li className={s.modal__content}>
                    <svg className={s.iconNormal}>
                        <use href={sprite + "#Elipse"}></use>
                    </svg>NORMAL</li>
                <li className={s.modal__content}>
                    <svg className={s.iconHard}>
                        <use href={sprite + "#Elipse"}></use>
                    </svg>HARD</li>
            </ul>   
        </div>
  )
};
=======
import s from './Modal-hard.module.css';
//import PropTypes from 'prop-types';//

const ModalHard = ({  }) => (
    <div className={s.Overlay}>
        <li className={s.Li}>Easy</li>
        <li className={s.Li}>Normal</li>
        <li className={s.Li}>Hard</li>
    </div>
);

//ModalDelete.propTypes = {};//
>>>>>>> Stashed changes

export default ModalHard;