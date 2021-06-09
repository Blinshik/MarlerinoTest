import React, { useState } from 'react'
import styles from './userChat.module.scss'
import { addMsg, setImg } from '../../redux/messages'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../message' 
import PopUp from '../popUp'

export default function UserChat({position}) {
    const dispatch = useDispatch();
    const messages =  useSelector(state => state.messages.userChats[position].messages)
    const img = useSelector(state => state.messages.img)
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)

    const dateTime = new Date()

    const sendHandler = () => {
        if(text || img) {
            let hour = dateTime.getHours();
            let minute = dateTime.getMinutes();
            if(minute < 10) {
                minute = `0${minute}`
            }
            dispatch(addMsg({
                newMsg:{
                    text: text,
                    time: `${hour}.${minute}`,
                    view: false,
                    userMsg: true,
                    img: img,
                },
                position: position
            }))
            setText('');
            dispatch(setImg(''))
        }else {
            alert('Пустое сообщение');
            console.log(img);
        }
    };

    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const openHandler = () => {
        setOpen(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__gradient}></div>
            <div className={styles.container__msgs}>
                {
                    messages.map((elem, i) => {
                        return (
                            <Message msg={elem} key={`${position}M${i}`} />
                        )
                    })
                }
            </div>
            <div className={styles.container__form}>
                <div  style={{ display: open ? 'block' : 'none' }}>
                    <PopUp open={setOpen} />
                </div>
                <div className={styles.container__form__input}>
                    <textarea
                        value={text}
                        placeholder={'Сообщение'}
                        onChange={changeHandler}
                        className={styles.container__form__input__area}
                    ></textarea>
                    <button 
                        className={styles.container__form__input__add}
                        onClick={openHandler}
                    >
                        <span class="material-icons">
                            attach_file
                        </span>
                    </button>
                </div>
                <button
                    onClick={sendHandler}
                    className={styles.container__form__enter}
                >
                    <span class="material-icons">
                        north
                    </span>
                </button>
            </div>
        </div>
    )
}
