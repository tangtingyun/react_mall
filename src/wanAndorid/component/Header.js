import React, {useState} from 'react'

import './Header.css'

function Header () {

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
    return (
        <div className="header-container">
            <img alt=""/>
            {
                headerArr.map((todo, index) =>
                    <div onClick={() => setCurrentIndex(index)}
                         className={`header-item ${index == currentIndex ? "header-select" : ""}`}>{todo}</div>
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

export default Header