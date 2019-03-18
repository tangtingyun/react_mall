import React from "react"
import { observer, inject } from "mobx-react";
import "./android.css";

@inject("androidStore")
@observer
export default class Android extends React.Component {

    constructor(props) {
        super(props)
    }

    handleData = () => {
        this.props.androidStore.getAndroid()
    }

    imgBuild = (item) => {
        if (item.images) {
            return (
                <div>
                    <img className="item_img" src={item.images[0]}></img>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="android_container">
                <div onClick={this.handleData} className="android_top">
                    Click Me Hello Android
                </div>
                {this.props.androidStore.values.map((item) => {
                    return (
                        <div key={item._id}>
                            <div>
                                {item.desc}
                            </div>
                            <div>
                                {this.imgBuild(item)}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}