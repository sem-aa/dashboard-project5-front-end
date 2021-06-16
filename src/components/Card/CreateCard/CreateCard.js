import { useState } from 'react';
import sprite from '../../../icon/sprite.svg';
import style from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import BasicCard from '../BasicCard';


export default function Card({ data, type, deleteNewCard, setType }) {
  const [isDeleteModalShown, setDeleteModal] = useState(false);


  return (
    <BasicCard data={data} isCreateCard deleteNewCard={deleteNewCard} type={type} setType={setType}>
      <div>
        <div className={style.createCard}>
          <button className={style.btnClose} type="button" onClick={() => setDeleteModal(true)}>
            <svg className={style.buttonClear}>
              <use href={sprite + '#icon-clear'}></use>
            </svg>
          </button>
          <button className={style.buttonCreate} type="submit">
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
