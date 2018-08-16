/**
 * Created by zhangyifei on 18/8/12.
 */

import React from 'react'
import {observer} from "mobx-react";


@observer
export default class Item extends React.Component {

    render() {
        console.log(this.props.todo.finished)
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.todo.finished}
                    onClick={() => {
                        this.props.todo.finished = !this.props.todo.finished
                    }}
                />{this.props.todo.title}
            </li>
        )
    }
}
