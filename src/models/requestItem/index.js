import React, { useState } from 'react'
import styles from './requestItem.module.scss'
import { setActive } from '../../redux/requestList'
import { useDispatch } from 'react-redux'

export default function RequestItem({request}) {
    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()

    const overHandler = () => {
        setIsHover(true)
    }

    const leaveHandler = () => {
        setIsHover(false)
    }

    const clickHandler = (e) => {
        dispatch(setActive({
            position: request.position,
            title: request.title,
            place: request.place,
        }))
    }

    return (
        <div 
            className={styles.container}
            onMouseOver={overHandler}
            onMouseLeave={leaveHandler}
            onClick = {clickHandler}
            style={{ background: isHover ? 'rgba(198, 204, 236, 0.2)' : 'rgba(196, 194, 196, 0.15)' }}
        >
            <div
                className={styles.container__hover}
                style={{ display: isHover ? 'block' : 'none' }}
            ></div>
            <div className={styles.container__wrapper}>
                <div>
                    <div >{request.title}</div>
                    <div>
                        <span>{request.place}</span>
                        <span>{request.date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
