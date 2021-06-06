import React, { useState } from 'react'
import styles from './userChat.module.scss'
import { addMsg } from '../../redux/messages'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../message' 
import PopUp from '../popUp'

export default function UserChat({position}) {
    const dispatch = useDispatch();
    const messages =  useSelector(state => state.messages.userChats[position].messages)
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)
    // const [imagePreviewUrl, setImagePreviewUrl] = useState('')
    // const [file, setFile] = useState('')

    const dateTime = new Date()

    const sendHandler = () => {
        if(text) {
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
                },
                position: position
            }))
            setText('');
        }else {
            alert('Пустое сообщение');
        }
    };

    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const openHandler = () => {
        setOpen(true)
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // TODO: do something with -> this.state.file
    //     //console.log('handle uploading-', this.state.file);
    //   }

    //   const handleImageChange = (e) => {
    //     e.preventDefault();
    
    //     let reader = new FileReader();
    //     let file = e.target.files[0];
    
    //     reader.onloadend = () => {
    //         setFile(file)
    //         setImagePreviewUrl(reader.result)
    //     }
    
    //     reader.readAsDataURL(file)
    //   }

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
                    >Add</button>
                </div>
                <button
                    onClick={sendHandler}
                    className={styles.container__form__enter}
                >Send</button>
            </div>
            {/* <form onSubmit={handleSubmit}>
          <input className="fileInput" 
            type="file" 
            onChange={handleImageChange} />
          <button className="submitButton" 
            type="submit" 
            onClick={handleSubmit}>Upload Image</button>
        </form> */}
        </div>
    )
}
