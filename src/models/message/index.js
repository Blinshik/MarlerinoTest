import React from 'react'
import styles from './message.module.scss'

export default function Message({msg}) {
    return (
        <div className={styles.wrapper}>
            <div style={{
                flexGrow: msg.userMsg ? '1' : '0'
            }}></div>
            <div 
                className={styles.container}
                style={{ 
                    background: msg.userMsg ? '#657CDA' : '#EAE8E9',
                    borderRadius: msg.userMsg ? '16px 16px 0px 16px' : '0px 16px 16px 16px',
                }}
            >
                <div className={styles.container__content}>
                    <div
                        className={styles.container__content__name}
                        style={{ display: msg.userMsg ? 'none' : 'block' }}
                    >Оператор</div>
                    <div className={styles.container__content__message}>
                        <div 
                            className={styles.container__content__message__text}
                            style={{ color: msg.userMsg ? '#F6F4F5' : '#121417' }}
                        >
                            <div
                                style={{ 
                                    display: msg.img ? 'block' : 'none',
                                    background: `center / contain no-repeat url(${msg.img}) `
                                }}
                                className={styles.container__content__message__text__img}
                            ></div>
                            {msg.text}
                        </div>
                        <div className={styles.container__content__message__date}>
                            <div
                                style={{ 
                                    color: msg.userMsg ? '#DDDBDC' : '#C4C2C4',
                                    marginRight: '7px'
                                }}
                            >{msg.time}</div>
                            <div
                                style={{ 
                                    color: msg.userMsg ? '#DDDBDC' : '#C4C2C4',
                                    display: msg.view ? 'block' : 'none'
                                }}
                            >
                                <span 
                                    className={"material-icons"}
                                    style={{ fontSize: '12px' }}
                                >
                                    done
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                flexGrow: msg.userMsg ? '0' : '1'
            }}></div>
        </div>
        
    )
}
