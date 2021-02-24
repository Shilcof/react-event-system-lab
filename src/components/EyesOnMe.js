import React, {Component} from 'react';

export default class EyesOnMe extends Component {

    constructor(props) {
        super(props);
    }

    handleOnFocus(event) {
        console.log("Good!");
    }

    handleOnBlur(event) {
        console.log("Hey! Eyes on me!");
    }

    render() {
        return (
            <button
                onFocus={this.handleOnFocus}
                onBlur={this.handleOnBlur}
            ></button>
        )
    }

}