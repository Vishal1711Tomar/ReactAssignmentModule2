import React, { useState } from "react";

const CounterFunction = () => {
    const [count, setCount] = useState(0); 

    return (
        <div>
            <h2>Functional Component Counter</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
};

export default CounterFunction;
