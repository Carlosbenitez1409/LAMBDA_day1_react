import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <button className="btn" onClick={() => setCount(prev => Math.max(0, prev - 1))}>-</button>
            <span className="count">{count}</span>
            <button className="btn" onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
    );
};

export default Counter;
