import React from 'react'
import styles from './requestItem.module.scss'
import { setActive } from '../../redux/requestList'
import { useDispatch } from 'react-redux'

export default function RequestItem({request}) {
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(setActive({
            position: request.position,
            title: request.title,
            place: request.place,
        }))
    }

    return (
        <div 
            className={styles.container}
            onClick = {clickHandler}
            style={{ background: request.isClicked ? 'rgba(198, 204, 236, 0.2)' : 'rgba(196, 194, 196, 0.15)' }}
        >
            <div
                className={styles.container__hover}
                style={{ display: request.isClicked ? 'block' : 'none' }}
            ></div>
            <div className={styles.container__wrapper}>
                <div className={styles.container__wrapper__text}>
                    <div className={styles.container__wrapper__text__title}>{request.title}</div>
                    <div>
                        <span className={styles.container__wrapper__text__infoPlace}>{request.place}</span>
                        <span className={styles.container__wrapper__text__infoDate}>{request.date}</span>
                    </div>
                </div>
                <div className={styles.container__wrapper__img}>X</div>
            </div>
        </div>
    )
}
