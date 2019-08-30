import React, {useState} from 'react'
import PropTypes from 'prop-types'

import './Header.css'

import {withRouter} from 'react-router-dom';


function Header (props) {

    console.log('-----------')
    console.log(props)

    const [currentIndex, setCurrentIndex] = useState(0)
    const headerArr = [
        "首页",
        "项目",
        "体系",
        "公众号",
        "导航",
        "项目分类",
        "工具"
    ]
    const clickHandler = (index) => {
        if (index === currentIndex) return
        switch (index) {
            case 0:
                props.history.push("/wanHome")
                break;
            case 1:
                props.history.push("/wanCategory")
                break
        }
        setCurrentIndex(index)
    }
    return (
        <div className="header-container">
            <span>{props.name}</span>
            {
                headerArr.map((todo, index) =>
                    <div key={index}
                         onClick={() => clickHandler(index)}
                         className={`header-item ${index === currentIndex ? "header-select" : ""}`}>{todo}</div>
                )
            }
            <div className="header-right">
                <input type="text"/>
                <div className="login-state">
                    <span>登录</span>
                    <span>·</span>
                    <span>注册</span>
                </div>

            </div>

        </div>
    )
}

Header.defaultProps = {
    name: "wanAndroid"
}

Header.propTypes = {
    name: PropTypes.string
}


export default withRouter(Header);