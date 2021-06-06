import React from 'react'
import styles from './popUp.module.scss'

export default function PopUp({open}) {
    const closeHandler = () => {
        open(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header__text}>Прикрепить</div>
                <button 
                    className={styles.container__header__close}
                    onClick={closeHandler}
                >X</button>
            </div>
            <button className={styles.container__addContent}>
                <div className={styles.container__addContent__text}>Фото или видео</div>    
            </button>
            <button className={styles.container__addContent}>
                <div className={styles.container__addContent__text}>Заявку</div>  
            </button>
        </div>
    )
}
