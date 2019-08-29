import React, {useEffect} from 'react';
import "./cssTrick.css"

function binarySearch (list, item) {
    let low = 0;
    let high = list.length;
    let mid;
    let guess;
    while (low <= high) {
        mid = parseInt((low + high) / 2);
        guess = list[mid];
        if (guess == item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;

}

function CssTrick (props) {


    const list = [1, 3, 5, 7, 9]
    useEffect(() => {
        var counter = document.getElementById("css-counter");
        var computedStyle = getComputedStyle(counter, ":before");
        let len = computedStyle.length;
        for (var i = 0; i < len; i++) {
            let style = computedStyle[i];
            // console.log("    " + style + " : " + computedStyle.getPropertyValue(style) + "\n");
        }

        let test = parseInt(5 / 2);
        console.log(test)

        var search = binarySearch(list, 10);
        console.log(search)
    })
    return (
        <div>
            <div className="css-msg-content">
                hello life!
            </div>
            <hr className="css-line"/>
            <div className="css-counter">
                <h3>道连格雷</h3>
                <h3>亨利勋爵</h3>
                <h3 id="css-counter">画家</h3>
            </div>
        </div>
    );
}

export default CssTrick;
