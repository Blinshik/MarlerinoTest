import React from 'react'
import styles from './chatHeader.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../../redux/requestList'

export default function ChatHeader() {
    const request = useSelector((state) => state.requests.active)
    const dispatch = useDispatch()

    const clickHandler = (e) => {
        dispatch(setActive({
            position: -1,
            title: '',
            place: '',
        }))
    }


    if(request.position === -1) {
        return (
            <div className={styles.container}>
                <div className={styles.container__menu}>
                    <span className={"material-icons"}>
                        list
                    </span>
                </div>
                <div className={styles.container__line}></div>
                <div className={styles.container__avatar}></div>
                <div className={styles.container__greetings}>
                    <div className={styles.container__greetings__start}>Здравствуйте,</div>
                    <h2 className={styles.container__greetings__user}>UserName</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <div 
                    className={styles.container__menu}
                    onClick={clickHandler}
                >
                    <span className={"material-icons"}>
                        west
                    </span>
                </div>
                <div className={styles.container__line}></div>
                <div className={styles.container__greetings}>
                    <h3 className={styles.container__greetings__user}>{request.title}</h3> 
                    <div>{request.place}</div> 
                </div>
            </div>
        )
    }
   
}
