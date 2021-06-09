import React, { useState } from 'react';
import s from './NewCard.module.css';
import CardRender from './Card'
import EditCard from './EditCard/EditCard'


export default function Card({ data }) {
  const [isEdit, setEdit] = useState(false);
  return (
    <div onClick={() => setEdit(true)} className={s.container} >
      {isEdit ? <EditCard /> : <CardRender data={data} />}
    </div >
  );
}





