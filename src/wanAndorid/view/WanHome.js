import React, {useEffect, useState} from 'react'

import axios from 'axios'
import './wanHome.css'


function WanHome () {

    const [listArray, setListArray] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('/api/data/Android/10/1').then(res => {
            setListArray(res.data.results)
        })
    }

    const clickItem = (value) => {
        console.log(value)
        window.location = value.url
    }

    return (
        <div className="wan-home">
            <ul>
                {
                    listArray.map((value, index) =>
                        <li key={index} onClick={() => clickItem(value)}>
                            <div className="wan-card">
                                <div className="wan-card-img"></div>
                                <p className="wan-card-text">{value.desc}</p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )

}


export default WanHome