
import React, { useState, Suspense, lazy, useEffect } from 'react';
import s from './NewCard.module.css';
import CardRender from './Card';
import EditCard from './EditCard/EditCard';
import CreateCard from '../Card/CreateCard';


export default function Card({ data, isCreateCard, deleteNewCard }) {

  const [isEdit, setEdit] = useState(false);
  const [type, setType] = useState(data.type);

  return isCreateCard ? (
    <CreateCard data={data} type={type} deleteNewCard={deleteNewCard} setType={setType} />

  ) : (
    <div onClick={() => setEdit(true)} className={s.container}>
      {isEdit ? <EditCard data={data} setEdit={setEdit} /> : <CardRender data={data} />}
    </div>
  );
}