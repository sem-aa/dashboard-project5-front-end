import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import sprite from '../../icon/sprite.svg'
import s from "./NewCard.module.css"
import {useSelector} from 'react-redux'


const Card = React.forwardRef(({ data, register, handleSubmit, isEdit }, ref) => {
    
    return (
      <div className={s.container}>
            <form onSubmit={handleSubmit}>
                   <div className={s.head}><select className={s.difficulty} name={'difficulty'} ref={ref} {...register('difficulty')}>
                    <option className={s.item} value="Easy">Easy</option>
                    <option value="Easy">Normal</option>
                    <option value="Easy">Hard</option>
                </select>
                <svg className={s.iconTask}>
                    <use href={sprite + "#icon-star"}></use>
                    </svg>
                {/* <select className={s.task} name={'type'} ref={ref} {...register('type')}>
                    <option value="Task">Task</option>
            <option  value="Challenge">Challenge</option>
                    </select> */}
                </div>
                <div> {isEdit ?
                    <input className={s.titleInput} {...register('title')} ref={ref}></input> :
                    <h2 className={s.title}> Title</h2>}
                    {isEdit ?
                        <div className={s.dateFlex}>
                        <input className={s.inputDate} {...register('date')} ref={ref} placeholder="Today"></input>
                        <button ref={ref}>
                                <svg className={ s.calendar}height="10px" width="10px" >
                    <use href={sprite + "#icon-calendar"}></use>
                    </svg>
                </button>
                       
                        </div>
                        :
                        <p className={s.date}>March 23, 21:30</p>} </div>
                <div className={s.foot}>
                    <select className={s.category} name={'category'} ref={ref} {...register('category')}>
                    <option className={s.stuff} value="Stuff"  ref={ref}>Stuff</option>
                    <option value="FAMILY">FAMILY</option>
                    <option value="HEALTH">HEALTH</option>
                    <option value="LEARNING">LEARNING</option>
                    <option value="LEISURE">LEISURE</option>
                    <option value="WORK">WORK</option>
                    </select>
                    <div>
                {isEdit && 
                            <div className={s.buttonFlex}>
                            <button ref={ref}>
                <svg className={s.buttonSave}>
                    <use href={sprite + "#icon-save"}></use>
                    </svg>
                            </button >
                <button className={s.buttonClose} ref={ref}>
                <svg className={s.buttonClear}>
                    <use href={sprite + "#icon-clear"}></use>
                </svg>
                    </button>
                <button ref={ref}>
                <svg className={s.buttonDone} >
                    <use href={sprite + "#icon-done"}></use>
                    </svg>
                </button>
                
               
                    </div>}
                    </div>
                    </div>    
        </form>
      </div>
    );
});
  
export default function CardForm() {
   const [isEdit, setEdit] = useState(true)
    const { register, handleSubmit } = useForm()
    const cards = useSelector(state => state.auth.user.cards)
    const onSubmit = () => { }
   
    return (
        <Card onClick={() => setEdit(!isEdit)}
            isEdit={isEdit}
            handleSubmit={handleSubmit(onSubmit)}
            register={register}
            data={cards}
            />
    )
}

