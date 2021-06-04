import React, { useState } from 'react'
import styles from './userChat.module.scss'
import { addMsg } from '../../redux/messages'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../message' 

export default function UserChat({position}) {
    const dispatch = useDispatch();
    const messages =  useSelector(state => state.messages.userChats[position].messages)
    const [text, setText] = useState('')

    const sendHandler = () => {
        text ? dispatch(addMsg({
            newMsg:{
                text: text,
                time: '333',
                view: false,
                userMsg: true,
            },
            position: position
        })) : console.log('Пустое сообщение');
    };

    const changeHandler = (e) => {
        setText(e.target.value)
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
                <div>
                    <textarea
                        value={text}
                        placeholder={'Сообщение'}
                        onChange={changeHandler}
                    ></textarea>
                    <button></button>
                </div>
                <button
                    onClick={sendHandler}
                ></button>
            </div>
        </div>
    )
}
