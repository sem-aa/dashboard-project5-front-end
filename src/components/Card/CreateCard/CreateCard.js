import { useState } from 'react';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import BasicCard from '../BasicCard';


export default function Card({ data, type, deleteNewCard, setType }) {
  const [isDeleteModalShown, setDeleteModal] = useState(false);


  return (
    <BasicCard data={data} isCreateCard deleteNewCard={deleteNewCard} type={type} setType={setType}>
      <div>
        <div className={s.createCard}>
          <button className={s.btnClose} type="button" onClick={() => setDeleteModal(true)}>
            <svg className={s.buttonClear}>
              <use href={sprite + '#icon-clear'}></use>
            </svg>
          </button>
          <button className={s.buttonCreate} type="submit">
            create
          </button>
        </div>
        {isDeleteModalShown && (
          <ModalDelete
            onClose={() => setDeleteModal(false)}
            type={type}
            deleteNewCard={deleteNewCard}
            isCreate
          ></ModalDelete>
        )}
      </div>
    </BasicCard>
  );
}
