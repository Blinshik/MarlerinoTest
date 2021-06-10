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
                    <div className={styles.container__wrapper__text__info}>
                        <span className={styles.container__wrapper__text__info__infoPlace}>{request.place}</span>
                        <span className={styles.container__wrapper__text__info__infoDate}>{request.date}</span>
                    </div>
                </div>
                <div className={styles.container__wrapper__img}>
                    <span 
                        className={"material-icons"}
                        style={{ 
                            color: request.isClicked ? "#C6CCEC" : "#C4C2C4",
                            fontSize: "36px"
                        }}
                    >
                        {request.img}
                    </span>
                </div>
            </div>
        </div>
    )
}
