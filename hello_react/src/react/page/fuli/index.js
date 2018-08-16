import React from "react"

export default class Android extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                福利 {console.log(this.props.match)}
            </div>
        )
    }
}