import React, { useRef } from 'react'
import styles from './popUp.module.scss'
import { setImg } from '../../redux/messages'
import { useDispatch } from 'react-redux'

export default function PopUp({open}) {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const closeHandler = () => {
        open(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            dispatch(setImg(URL.createObjectURL(e.target.files[0])))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__header}>
                <div className={styles.container__header__text}>Прикрепить</div>
                <button 
                    className={styles.container__header__close}
                    onClick={closeHandler}
                >
                    <span className={"material-icons"}>
                        close
                    </span>
                </button>
            </div>
            
            <form ref={inputRef} style={{ width: "100%" }}  >
                <input 
                    type="file" 
                    onChange={handleSubmit} 
                    id={"file"} 
                    style={{ display: 'none' }} 
                />
                <label for="file">
                    <div className={styles.container__addContent}>
                        <div className={styles.container__addContent__text}>Фото или видео</div>  
                    </div>  
                </label>
            </form>
            <button className={styles.container__addContent}>
                <div className={styles.container__addContent__text}>Заявку</div>  
            </button>
        </div>
    )
}
