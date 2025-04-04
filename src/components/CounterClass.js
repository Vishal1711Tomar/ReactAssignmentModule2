import React, { Component } from "react";

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }; 
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 }); 
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 }); 
    };

    render() {
        return (
            <div>
                <h2>Class Component Counter</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default CounterClass;
