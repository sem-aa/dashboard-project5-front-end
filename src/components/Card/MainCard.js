import React, { useState, Suspense, lazy } from 'react';
import s from './NewCard.module.css';
import Loader from 'react-loader-spinner';
/* import CardRender from './Card';
import EditCard from './EditCard/EditCard';
import CreateCard from '../Card/CreateCard'; */

const CardRender = lazy(() => import('./Card'));
const EditCard = lazy(() => import('./EditCard/EditCard'));
const CreateCard = lazy(() => import('../Card/CreateCard'));

export default function Card({ data, isCreateCard }) {
  const [isEdit, setEdit] = useState(false);
  const [type, setType] = useState(data.type);

  return isCreateCard ? (
    <CreateCard data={data} type={type} />
  ) : (
    <Suspense
      fallback={<Loader type="TailSpin" color="var(--accent-color)" className={s.loader} />}
    >
      <div onClick={() => setEdit(true)} className={s.container}>
        {isEdit ? (
          <EditCard data={data} type={type} setType={setType} setEdit={setEdit} />
        ) : (
          <CardRender data={data} type={type} />
        )}
      </div>
    </Suspense>
  );
}
