import React, { useState } from 'react';
import s from './NewCard.module.css';
import CardRender from './Card';
import EditCard from './EditCard/EditCard';
import CreateCard from '../Card/CreateCard';

export default function Card({ data, isCreateCard }) {
  const [isEdit, setEdit] = useState(false);

  return isCreateCard ? (
    <CreateCard />
  ) : (
    <div onClick={() => setEdit(true)} className={s.container}>
      {isEdit ? <EditCard data={data} /> : <CardRender data={data} />}
    </div>
  );
}
