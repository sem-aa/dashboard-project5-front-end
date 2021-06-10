import React from 'react';
import sprite from '../../icon/sprite.svg';
import s from './NewCard.module.css';
import { colorDifficult, colorCategory } from '../../helper/helper'

export default function Card({ data }) {

    return (
        <div className={s.container} >
            <form className={s.formCard}>
                <div className={s.head}>
                    <div className={s.difficulty}>
                        <svg className={s.iconEllipse}>
                            <use
                                fill={colorDifficult(data.difficulty)}
                                href={sprite + '#icon-ellipse'}></use>
                        </svg>
                        <p className={s.difficulty}>{data.difficulty}</p>
                    </div>
                    <div className={s.iconContainer} >
                        {data.type === "Task" ?
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
                    <h2 className={s.title}>{data.title}</h2>
                    <p className={s.date}>{data.date}, {data.time}</p>
                </div>
                <div className={s.foot}>
                    <div>
                        <p className={s.category} style={{ backgroundColor: colorCategory(data.category) }} >{data.category}</p>
                    </div>
                    <div >
                    </div>
                </div>
            </form>
        </div >
    );
}





