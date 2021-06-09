import React, { useState, useRef } from 'react'
import styles from './popUp.module.scss'
import { setImg } from '../../redux/messages'
import { useDispatch } from 'react-redux'

export default function PopUp({open}) {
    const [openLoader, setOpenLoader] = useState(false)
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const closeHandler = () => {
        open(false)
        setOpenLoader(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            dispatch(setImg(URL.createObjectURL(e.target.files[0])))
        }
    }

    const openHandler = () => {
        setOpenLoader(true)
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
            <button className={styles.container__addContent} onClick={openHandler}>
                    <div className={styles.container__addContent__text}>Фото или видео</div>    
            </button>
            <form style={{ display: openLoader ? 'block' : 'none' }} ref={inputRef} >
                <input type="file" onChange={handleSubmit} />
            </form>
            <button className={styles.container__addContent}>
                <div className={styles.container__addContent__text}>Заявку</div>  
            </button>
        </div>
    )
}
