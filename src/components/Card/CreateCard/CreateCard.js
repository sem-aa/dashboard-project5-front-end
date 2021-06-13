import { useState } from 'react';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import BasicCard from '../BasicCard';

export default function Card({ data, deleteNewCard }) {
  const [isDeleteModalShown, setModal] = useState(false);

  return (
    <BasicCard data={data}  isCreateCard>
      <div>
        <div className={s.createCard}>
          <button className={s.btnClose} type="button" onClick={() => setModal(true)}>
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
         deleteNewCard={deleteNewCard}
         onClose={() => setModal(false)}
         isCreate
         type="Quest"></ModalDelete>
        )}
      </div>
    </BasicCard>
  );
}
