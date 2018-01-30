import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';

const styles = {
    slide: {
        padding: 15,
        minHeight: 100,
        color: "#fff"
    },
    slide1: {
        background: "#FEA900"
    },
    slide2: {
        background: "#B3DC4A"
    },
    slide3: {
        background: "#6AC0FF"
    }
}

export default class BannerCompontent extends Component {
    render() {
        return (
            <div>
                <SwipeableViews>
                    <div style={Object.assign({}, styles.slide, styles.slide1)}>
                        one
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide2)}>
                        two
                    </div>
                    <div style={Object.assign({}, styles.slide, styles.slide3)}>
                        three
                    </div>
                </SwipeableViews>
            </div>
        )
    }
};
