
import React from 'react';
import s from './Modal-delete.module.css';
//import PropTypes from 'prop-types';//

const ModalDelete = ({}) => (
    <div className={s.Overlay}>
        <p className={s.Name}>Delete this Quest</p>
        <li className={s.Cancel}>CANCEL</li>
        <li className={s.Delete}>DELETE</li>
    </div>
);

//ModalDelete.propTypes = {};//

export default ModalDelete;



