import React from 'react'
import styles from './requestList.module.scss'
import RequestItem from '../requestItem'
import { useSelector } from 'react-redux'



export default function RequestList() {
    const data = useSelector((state) => state.requests.requestMain)

    return (
        <div className={styles.container}>
            {
                data.map((elem, i) => {
                    return (
                        <RequestItem 
                            key={`RI${i}`}
                            request={elem} 
                        />
                    )
                })
            }
        </div>
    )
}
