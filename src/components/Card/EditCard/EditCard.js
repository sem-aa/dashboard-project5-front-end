import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sprite from '../../../icon/sprite.svg';
import s from '../NewCard.module.css';
import ModalDelete from '../../Modal/Modal-delete';
import ModalDefficulty from '../../Modal/Modal-hard';
import ModalCategory from '../../Modal/Modal-status';
import { createCard } from '../../../redux/operations/cardOperations';
import Complete from '../CompleteForm'

const EditCard = React.forwardRef(({ register, handleSubmit }, ref) => {
    const [isDeleteModalShown, setModal] = useState(false);
    const [isDifficultyModalShown, setDifficultyModal] = useState(false);
    const [task, setTask] = useState(false);
    const [category, setCategory] = useState(false);
    const [complete, setComlete] = useState(false);

    return (
        <div className={s.container} >
            { complete ? <Complete /> : <>
                <form className={s.formCard} onSubmit={handleSubmit}>
                    <div className={s.head}>
                        <div onClick={() => setDifficultyModal(!isDifficultyModalShown)} className={s.difficulty}>
                            {isDifficultyModalShown && <ModalDefficulty />}
                            <svg className={s.iconEllipse}>
                                <use
                                    href={sprite + '#icon-ellipse'}></use>
                            </svg>
                            <p className={s.difficulty}>Easy</p>
                            <svg className={s.iconPolygon}>
                                <use href={sprite + '#icon-polygon'}></use>
                            </svg>
                        </div>
                        <div className={s.iconContainer} onClick={() => setTask(!task)}>
                            {task ?
                                <svg className={s.iconTask}>
                                    <use href={sprite + '#icon-star'}></use>
                                </svg>
                                :
                                <svg className={s.iconTrophy}>
                                    <use x="-4" y="2" href={sprite + "#icon-trophy"}></use>
                                </svg>
                            }
                        </div>
                    </div>
                    <div className={s.main}>

                        <p className={s.textInput}>Edit quest</p>
                        <input
                            className={s.titleInput}
                            {...register('title')}
                            ref={ref}
                        ></input>
                        <div className={s.dateFlex}>
                            <input
                                className={s.inputDate}
                                {...register('date')}
                                ref={ref}
                                placeholder="Today"
                            ></input>
                            <button ref={ref}>
                                <svg className={s.calendar} height="10px" width="10px">
                                    <use href={sprite + '#icon-calendar'}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={s.foot}>
                        <div onClick={() => setCategory(!category)}>
                            {category ? <> <ModalCategory /> <p className={s.category}>Stuff</p> </> : <p className={s.category}>Stuff</p>}
                        </div>
                        <div >

                            <div>
                                <button
                                    className={s.buttonCard} ref={ref}>
                                    <svg className={s.buttonSave}>
                                        <use href={sprite + '#icon-save'}></use>
                                    </svg>
                                </button>
                                <button className={s.buttonClose} ref={ref} onClick={() => setModal(true)}>
                                    <svg className={s.buttonClear}>
                                        <use href={sprite + '#icon-clear'}></use>
                                    </svg>
                                </button>
                                <button className={s.buttonCard} ref={ref} >
                                    <svg onClick={() => setComlete(true)} className={s.buttonDone}>
                                        <use href={sprite + '#icon-done'}></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </form></>}
            {
                isDeleteModalShown && (
                    <ModalDelete onClose={() => setModal(false)} type="Quest"></ModalDelete>
                )
            }
        </div >
    );
});

export default function CardForm({ data }) {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const body = {
            ...data,
            type: 'Task',
            date: new Date().toISOString().split('T')[0],
            time: new Date().getHours() + ':' + new Date().getMinutes(),
        };

        dispatch(createCard(body));
    };

    return <EditCard handleSubmit={handleSubmit(onSubmit)} register={register} data={data} />;
}



