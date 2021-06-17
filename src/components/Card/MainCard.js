import React, { useState, Suspense, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import CardRender from './Card';
import EditCard from './EditCard/EditCard';
import CreateCard from '../Card/CreateCard';
import style from './NewCard.module.css';

export default function Card({ data, isCreateCard, deleteNewCard, isDoneSection }) {
  const [isEdit, setEdit] = useState(false);
  const [isBackDrop, setIsBackDrop] = useState(false);
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
    zIndex: isBackDrop && 3,
  };

  useEffect(() => {
    setHeight(document.body.clientHeight + 'px');
  }, [setHeight]);

  return isCreateCard ? (
    <CreateCard data={data} type={type} deleteNewCard={deleteNewCard} setType={setType} />
  ) : (
    <>
      <Suspense
        fallback={<Loader type="TailSpin" color="var(--accent-color)" className={style.loader} />}
      >
        <div
          onClick={() => {
            !isEdit && setEdit(true);
            !isEdit && setIsBackDrop(true);
          }}
          className={style.container}
        >
          {isEdit ? (
            <EditCard
              data={data}
              setEdit={setEdit}
              setIsBackDrop={setIsBackDrop}
              style={editStyle}
              type={type}
              setType={setType}
            />
          ) : (
            <CardRender data={data} type={type} isDoneSection={isDoneSection} />
          )}
        </div>
      </Suspense>
      {isBackDrop && (
        <div
          style={backDrop}
          onClick={() => {
            setEdit(false);
            setIsBackDrop(false);
          }}
        />
      )}
    </>
  );
}
