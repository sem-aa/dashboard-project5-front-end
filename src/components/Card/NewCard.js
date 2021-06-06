import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import sprite from '../../icon/sprite.svg'
import s from "./NewCard.module.css"

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
                <div> {isEdit ? <input className={s.titleInput} {...register('title')} ref={ref}></input> : <h2 className={s.title}>Buy the gift for Mary</h2>}
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
                    <option  value="Stuff"  ref={ref}>Stuff</option>
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
                <svg className={s.buttonEdit} >
                    <use href={sprite + "#icon-done"}></use>
                    </svg>
                </button>
                <button ref={ref}>
                <svg className={s.buttonEdit}>
                    <use href={sprite + "#icon-save"}></use>
                    </svg>
                </button >
                <button ref={ref}>
                <svg className={s.buttonEdit}>
                    <use href={sprite + "#icon-clear"}></use>
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
   const [isEdit, setEdit] = useState(false)
    const { register, handleSubmit } = useForm()
    const onSubmit = () => { }
   
    return (
        <Card onClick = {() => setEdit(!isEdit)}
            // data={el}
            // el={_id}
            isEdit={isEdit}
            handleSubmit={ handleSubmit(onSubmit)}
            register={ register}/>
    )
}

