import { useState } from 'react';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import BasicCard from '../BasicCard';

export default function Card() {
  const [isDeleteModalShown, setModal] = useState(false);

  return (
    <BasicCard>
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
          <ModalDelete onClose={() => setModal(false)} type="Quest"></ModalDelete>
        )}
      </div>
    </BasicCard>
  );
}
