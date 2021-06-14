import React, { useState, useEffect, Suspense, lazy } from 'react';
import Loader from 'react-loader-spinner';
import s from './NewCard.module.css';
// import CardRender from './Card';
// import EditCard from './EditCard/EditCard';
// import CreateCard from '../Card/CreateCard';

const CardRender = lazy(() => import('./Card'));
const EditCard = lazy(() => import('./EditCard/EditCard'));
const CreateCard = lazy(() => import('../Card/CreateCard'));


export default function Card({ data, isCreateCard }) {
  const [isEdit, setEdit] = useState(false);
  const [type, setType] = useState(data.type);
  const [height, setHeight] = useState(document.body.clientHeight + 'px');

  const backDrop = {
    position: 'absolute',
    inset: 0,
    height: height,
    backgroundColor: 'transparent',
    width: '100%',
    zIndex: 2,
  };

  const editStyle = {
    zIndex: 3,
  };

  useEffect(() => {
    setHeight(document.body.clientHeight + 'px');
  });

  return isCreateCard ? (
    <CreateCard data={data} type={type} setType={setType} />
  ) : (
    <Suspense
      fallback={<Loader type="TailSpin" color="var(--accent-color)" className={s.loader} />}
    >
      <div onClick={() => setEdit(true)} className={s.container}>
        {isEdit ? (
          <>
            <EditCard data={data} setEdit={setEdit} style={editStyle} setType={setType} />
          </>
        ) : (
          <CardRender data={data} />
        )}
      </div>
      {isEdit && <div style={backDrop} onClick={() => setEdit(false)} />}
    </Suspense>
  );
}